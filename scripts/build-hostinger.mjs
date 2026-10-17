import { spawnSync } from "node:child_process";
import { rmSync } from "node:fs";
import { fileURLToPath } from "node:url";

const nextCli = fileURLToPath(
  new URL("../node_modules/next/dist/bin/next", import.meta.url),
);

for (const directory of ["../.next", "../out"]) {
  rmSync(fileURLToPath(new URL(directory, import.meta.url)), {
    force: true,
    maxRetries: 5,
    recursive: true,
    retryDelay: 200,
  });
}

// Hostinger's legacy glibc loads SWC through WASM, which Turbopack cannot use.
const result = spawnSync(process.execPath, [nextCli, "build", "--webpack"], {
  env: {
    ...process.env,
    NEXT_PUBLIC_SITE_URL:
      process.env.NEXT_PUBLIC_SITE_URL || "https://vayucred.com",
    NEXT_PUBLIC_ALLOW_INDEXING:
      process.env.NEXT_PUBLIC_ALLOW_INDEXING || "true",
  },
  stdio: "inherit",
});

if (result.error) {
  throw result.error;
}

process.exit(result.status ?? 1);
