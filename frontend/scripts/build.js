// Shim for Vercel deployments whose Root Directory points at frontend/.
//
// The real unified build lives at <repo root>/scripts/build.js. When Vercel
// runs `node scripts/build.js` from this directory (because the project's
// Root Directory was set to `frontend/`), this shim re-executes the real
// build script from the repo root — but ONLY once. The root build runs vite
// directly and never calls `npm run build` in frontend/, so recursion is
// impossible on that path; the guard below protects any stray re-invocation.
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));

// Recursion guard: the repo-root build sets this flag when it owns the
// frontend build. If it is already set here, vite is being driven directly
// by the root build — just exit successfully (vite already ran or will run).
if (process.env.__FOODNEST_UNIFIED_BUILD === "1") {
  console.log("[frontend/scripts/build.js] Unified build already in control – delegating to vite.");
  execFileSync(process.execPath, [path.join(here, "..", "node_modules", ".bin", "vite"), "build"], {
    cwd: here,
    stdio: "inherit",
  });
  process.exit(0);
}

// Locate the repo root: the ancestor that contains `backend/` and whose
// `frontend/` child is the directory this shim lives in.
let root = path.resolve(here, "..");
while (root !== path.dirname(root)) {
  if (
    fs.existsSync(path.join(root, "backend")) &&
    path.resolve(root, "frontend") === path.resolve(here, "..")
  ) {
    break;
  }
  root = path.dirname(root);
}
if (!fs.existsSync(path.join(root, "backend"))) {
  console.error(
    "[frontend/scripts/build.js] Could not locate the FoodNest repo root. " +
      "This shim expects backend/ next to the frontend directory.",
  );
  process.exit(1);
}

const realScript = path.join(root, "scripts", "build.js");
if (!fs.existsSync(realScript)) {
  console.error(`[frontend/scripts/build.js] Real build script not found at ${realScript}`);
  process.exit(1);
}

console.log(
  `[frontend/scripts/build.js] Redirecting to the unified repo-root build (${realScript})...`,
);
execFileSync(process.execPath, [realScript], {
  cwd: root,
  stdio: "inherit",
  env: { ...process.env, __FOODNEST_UNIFIED_BUILD: "1" },
});
