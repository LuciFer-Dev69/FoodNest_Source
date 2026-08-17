// Root post-install hook.
//
// Runs the unified build automatically whenever `npm install` executes at the
// repository root. This guarantees that a Vercel deployment produces the
// patched output (frontend SSR + backend API in one __server function) even
// when Vercel's "Build Command" setting still contains the old command or is
// empty. If the frontend build artifact already exists and is patched, this
// script exits quickly without rebuilding.
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

// If `npm install` ran inside frontend/ instead of the root, do nothing – the
// root hook only applies at the repo root.
const entry = path.join(root, "frontend", ".vercel", "output", "functions", "__server.func", "index.mjs");
if (fs.existsSync(entry) && fs.readFileSync(entry, "utf8").includes("__foodnest_api_guard__")) {
  console.log("[postinstall] Patched Vercel output already present – nothing to do.");
  process.exit(0);
}

// Install the frontend dependencies ourselves if they are missing. Vercel
// installs root dependencies first, then runs the root postinstall hook
// before it has installed frontend/node_modules – without this, the frontend
// build would fail with `vite: not found`. Run npm directly (no shell) –
// Vercel's Node 24 container does not provide /bin/sh for shell spawns.
function runNpmNoShell(cwd, args) {
  const npmCli = path.join(
    cwd,
    "node_modules",
    "npm",
    "bin",
    "npm-cli.js",
  );
  const npmBin = fs.existsSync(npmCli) ? npmCli : "npm";
  return spawnSync(npmBin, args, { cwd, stdio: "inherit", shell: false });
}

const frontend = path.join(root, "frontend");
const frontendModules = path.join(frontend, "node_modules");
if (!fs.existsSync(frontendModules)) {
  console.log("[postinstall] Installing frontend dependencies first...");
  runNpmNoShell(frontend, ["install"]);
}

console.log("[postinstall] Running unified build (frontend + backend API)...");
try {
  const r = spawnSync(process.execPath, [path.join(root, "scripts", "build.js")], {
    cwd: root,
    stdio: "inherit",
    shell: false,
  });
  if (r.status !== 0 && r.status !== null) {
    console.error("[postinstall] Unified build failed with exit", r.status);
  }
} catch (err) {
  console.error("[postinstall] Unified build failed:", err.message);
  // Non-fatal: Vercel may still run its own build command afterwards.
  process.exit(0);
}
