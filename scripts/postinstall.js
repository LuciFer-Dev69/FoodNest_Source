// Root post-install hook.
//
// Runs the unified build automatically whenever `npm install` executes at the
// repository root. This guarantees that a Vercel deployment produces the
// patched output (frontend SSR + backend API in one __server function) even
// when Vercel's "Build Command" setting still contains the old command or is
// empty. If the frontend build artifact already exists and is patched, this
// script exits quickly without rebuilding.
import { execSync } from "node:child_process";
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
// build would fail with `vite: not found`.
const frontend = path.join(root, "frontend");
const frontendModules = path.join(frontend, "node_modules");
if (!fs.existsSync(frontendModules)) {
  console.log("[postinstall] Installing frontend dependencies first...");
  execSync("npm install", { cwd: frontend, stdio: "inherit" });
}

console.log("[postinstall] Running unified build (frontend + backend API)...");
try {
  execSync("node scripts/build.js", { cwd: root, stdio: "inherit" });
} catch (err) {
  console.error("[postinstall] Unified build failed:", err.message);
  // Non-fatal: Vercel may still run its own build command afterwards.
  process.exit(0);
}
