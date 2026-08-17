// FoodNest unified build for Vercel.
//
// 1. Builds the TanStack Start frontend (`npm run build` in frontend/), which
//    emits the Nitro Vercel preset output at frontend/.vercel/output/.
// 2. Patches the generated `__server.func/index.mjs` so that requests to
//    `/api/*` and `/uploads/*` are handled by the shared Express backend
//    (backend/) instead of falling through to the SSR renderer.
//
// This is the fix for "POST /api/auth/register 404" after deploying to
// Vercel: the previous deployment only shipped the frontend SSR server, and
// the Express API never existed in production.
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
// Self-adapting root detection: the script lives at <root>/scripts/build.js,
// but Vercel sometimes invokes it from a different working directory (e.g.
// /vercel/path0/frontend/ when the project's Root Directory is set to
// frontend/). In that case, walk up from the script's own location until the
// markers (frontend/src and backend) are found.
let root = path.resolve(__dirname, "..");
if (!fs.existsSync(path.join(root, "frontend", "src")) || !fs.existsSync(path.join(root, "backend"))) {
  let probe = __dirname;
  while (probe !== path.dirname(probe)) {
    const candidate = path.dirname(probe);
    if (fs.existsSync(path.join(candidate, "frontend", "src")) && fs.existsSync(path.join(candidate, "backend"))) {
      root = candidate;
      console.log(`==> Detected repo root at ${root} (invoked from ${process.cwd()})`);
      process.chdir(root);
      break;
    }
    probe = candidate;
  }
  if (!fs.existsSync(path.join(root, "frontend", "src")) || !fs.existsSync(path.join(root, "backend"))) {
    throw new Error(
      "Could not locate the FoodNest repo root. Expected frontend/src and backend/ next to the project. " +
        `Searched up from ${__dirname} and ${process.cwd()}.`,
    );
  }
}
const frontend = path.join(root, "frontend");
const funcDir = path.join(frontend, ".vercel", "output", "functions", "__server.func");
const entry = path.join(funcDir, "index.mjs");

// Ensure frontend dependencies are installed. Vercel only installs root
// dependencies by default, so `vite` would be missing here otherwise.
// Run an npm command without a shell. Vercel's Node 24 build container does
// not provide /bin/sh for shell-spawned children, so plain execSync('npm ...')
// fails with ENOENT. We resolve the npm CLI JavaScript entrypoint and spawn
// it directly with the same node process (shell: false).
function runNpm(cwd, args) {
  const candidates = [
    path.join(cwd, "node_modules", "npm", "bin", "npm-cli.js"),
    path.join(frontend, "node_modules", "npm", "bin", "npm-cli.js"),
    path.join(root, "node_modules", "npm", "bin", "npm-cli.js"),
  ];
  // Prefer a .bin shim so the correct npm version/context is used.
  const shims = [
    path.join(cwd, "node_modules", ".bin", "npm"),
    path.join(frontend, "node_modules", ".bin", "npm"),
  ];
  let npmBin = null;
  for (const shim of shims) {
    if (fs.existsSync(shim)) {
      const target = fs.readlinkSync(shim);
      const resolved = path.isAbsolute(target) ? target : path.resolve(path.dirname(shim), target);
      if (fs.existsSync(resolved)) {
        npmBin = resolved;
        break;
      }
    }
  }
  if (!npmBin) {
    for (const c of candidates) {
      if (fs.existsSync(c)) {
        npmBin = c;
        break;
      }
    }
  }
  if (!npmBin) {
    // No local npm package found (common with pnpm/berry installs that skip
    // vendoring npm). Fall back to resolving the `npm` binary from PATH.
    const pathEnv = process.env.PATH || "";
    for (const dir of pathEnv.split(path.delimiter)) {
      const binPath = path.join(dir, "npm");
      if (fs.existsSync(binPath)) {
        npmBin = binPath;
        break;
      }
    }
  }
  if (!npmBin) {
    throw new Error(`Could not locate an npm executable for "npm ${args.join(" ")}" in ${cwd}`);
  }
  const result = spawnSync(process.execPath, [npmBin, ...args], {
    cwd,
    stdio: "inherit",
    shell: false,
  });
  if (result.status !== 0) {
    throw new Error(`Command "npm ${args.join(" ")}" failed in ${cwd} (exit ${result.status})`);
  }
}

const frontendModules = path.join(frontend, "node_modules");
if (!fs.existsSync(frontendModules)) {
  console.log("==> Installing frontend dependencies first...");
  runNpm(frontend, ["install"]);
}

console.log("==> Building frontend...");
runNpm(frontend, ["run", "build"]);

if (!fs.existsSync(entry)) {
  throw new Error(`Nitro output not found at ${entry} – frontend build may have failed.`);
}

// ---------------------------------------------------------------------------
// Step 2 – patch the server entry to mount the Express backend
// ---------------------------------------------------------------------------
// (frontend build completed above)
console.log("==> Patching Nitro server entry to mount the backend API...");

const serverCode = fs.readFileSync(entry, "utf8");
if (serverCode.includes("__foodnest_api_guard__")) {
  console.log("    Already patched, skipping.");
  process.exit(0);
}

// Locate the vercel_web_default fetch wrapper (the last `//#region ... vercel.web`
// block) and inject our API dispatcher before `nitroApp.fetch(req)`.
const patchMarker = "//#region node_modules/nitro/dist/presets/vercel/runtime/vercel.web.mjs";
const regionStart = serverCode.indexOf(patchMarker);
if (regionStart === -1) {
  throw new Error("Could not locate the vercel.web region in the Nitro output.");
}
const region = serverCode.slice(regionStart);
const fetchImplStart = region.indexOf("var vercel_web_default = { fetch(req, context) {");
if (fetchImplStart === -1) {
  throw new Error("Could not locate vercel_web_default in the Nitro output.");
}

const dispatcher = `
//#region #foodnest-api
// FoodNest backend API dispatcher. Requests to /api/* and /uploads/* are
// served by the shared Express application (backend/) instead of the SSR
// renderer. Imported lazily so cold starts stay fast when no API is hit.
	// (node:stream is hoisted to the top of the file by the build script.)
	let __foodnest_api_app_promise = undefined;
function __foodnest_api_app() {
	if (!__foodnest_api_app_promise) {
		__foodnest_api_app_promise = import("../../../../../backend/server.js").then((m) => m.default);
	}
	return __foodnest_api_app_promise;
}
async function __foodnest_api_dispatch(req) {
	const app = await __foodnest_api_app();
	const url = new URL(req.url, "https://x");
	if (!url.pathname.startsWith("/api/") && !url.pathname.startsWith("/uploads") && url.pathname !== "/api") {
		return null; // not an API request – fall through to SSR
	}
	return new Promise((resolve) => {
		const headers = Object.fromEntries(req.headers.entries());
		const chunks = [];
		const reader = req.body ? req.body.getReader() : null;
		function drain() {
			if (!reader) return finish();
			reader.read().then(({ done, value }) => {
				if (done) return finish();
				chunks.push(value);
				drain();
			});
		}
		function finish() {
			const body = Buffer.concat(chunks.map((c) => (typeof c === "string" ? Buffer.from(c) : Buffer.from(c))));
			if (body.length) headers["content-length"] = String(body.length);
			const stream = body.length ? __foodnest_api_Readable.from([body]) : __foodnest_api_Readable.from([]);
			const nodeReq = Object.assign(stream, {
				method: req.method,
				url: url.pathname + url.search,
				headers,
				httpVersion: "1.1",
				httpVersionMajor: 1,
				httpVersionMinor: 1,
				on: stream.on.bind(stream),
			});
			let statusCode = 200;
			const resHeaders = {};
			const resChunks = [];
			const nodeRes = Object.create(null, {
				headersSent: { value: false, writable: true, configurable: true },
				statusCode: {
					get() { return statusCode; },
					set(v) { statusCode = v; },
					configurable: true,
				},
				setHeader: { value(k, v) { resHeaders[String(k).toLowerCase()] = v; } },
				getHeader: { value() { return undefined; } },
				removeHeader: { value() {} },
				writeHead: { value(code, h) { statusCode = code; if (h) Object.assign(resHeaders, h); nodeRes.headersSent = true; } },
				write: { value(chunk) { resChunks.push(Buffer.from(chunk)); return true; } },
				end: {
					value(chunk) {
						if (chunk !== undefined) resChunks.push(Buffer.from(chunk));
						nodeRes.headersSent = true;
						const bodyBuf = Buffer.concat(resChunks);
						const respHeaders = { ...resHeaders };
						resolve(
							new Response(bodyBuf.length ? bodyBuf : null, { status: statusCode, headers: respHeaders }),
						);
					},
				},
				on: { value() { return nodeRes; } },
			});
			void app(nodeReq, nodeRes);
		}
		drain();
	});
}
//#endregion
`;

const insertionPoint = regionStart + fetchImplStart + "var vercel_web_default = { fetch(req, context) {".length;
const newServerCode =
	serverCode.slice(0, insertionPoint) + dispatcher + serverCode.slice(insertionPoint);

// Hook the dispatcher into the fetch wrapper.
const hooked = newServerCode.replace(
	/return nitroApp\.fetch\(req\);/,
	`return __foodnest_api_dispatch(req).then((r) => r !== null ? r : nitroApp.fetch(req));`,
);

if (!hooked.includes("__foodnest_api_guard__")) {
	// idempotency marker plus a hoisted import of node:stream (imports cannot
	// appear inside an object literal, so it goes at the top of the file).
	const finalCode =
		"// __foodnest_api_guard__\n" +
		'import { Readable as __foodnest_api_Readable } from "node:stream";\n' +
		hooked;
	fs.writeFileSync(entry, finalCode);
	console.log("    Patched __server.func/index.mjs successfully.");
} else {
	console.log("    Already patched, skipping.");
}

// ---------------------------------------------------------------------------
// Step 3 – ensure the Express backend is importable from the func dir.
// The backend ESM server is compiled/copied alongside the function so the
// relative import "../../../../../backend/server.mjs" resolves at runtime.
// ---------------------------------------------------------------------------
const backendTarget = path.resolve(funcDir, "..", "..", "..", "..", "..", "backend");
const backendSource = path.join(root, "backend");
console.log("==> Symlinking backend into the Nitro output tree...");
if (!fs.existsSync(backendTarget)) {
	fs.symlinkSync(backendSource, backendTarget, "dir");
}

console.log("==> Build complete. Deploy the repo root to Vercel.");
