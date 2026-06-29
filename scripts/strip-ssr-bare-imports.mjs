/**
 * Vike SSR chunks include bare side-effect imports (e.g. import "react-icons/fa")
 * that esbuild ignores during wrangler deploy and logs ~150 warnings for.
 * The real named imports live in bundled chunks, so these lines are safe to remove.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const ssrDir = path.join(root, "dist", "server");
const BARE_IMPORT = /^\s*import\s+["'][^"']+["']\s*;?\s*\r?\n/gm;

function walk(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (/\.(m?js)$/.test(entry.name)) files.push(full);
  }
  return files;
}

if (!fs.existsSync(ssrDir)) {
  console.error("strip-ssr-bare-imports: dist/server not found. Run vite build first.");
  process.exit(1);
}

let totalRemoved = 0;

for (const file of walk(ssrDir)) {
  const content = fs.readFileSync(file, "utf8");
  const matches = content.match(BARE_IMPORT);
  if (!matches?.length) continue;

  fs.writeFileSync(file, content.replace(BARE_IMPORT, ""));
  totalRemoved += matches.length;
}

console.log(
  `strip-ssr-bare-imports: removed ${totalRemoved} bare import(s) from dist/server.`,
);
