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

const buildEnvironment = {
  ...process.env,
  NEXT_PUBLIC_SITE_URL:
    process.env.NEXT_PUBLIC_SITE_URL || "https://vayucred.com",
  NEXT_PUBLIC_ALLOW_INDEXING:
    process.env.NEXT_PUBLIC_ALLOW_INDEXING || "true",
};

function runNextBuild(output) {
  // Hostinger's legacy glibc loads SWC through WASM, which Turbopack cannot use.
  const result = spawnSync(process.execPath, [nextCli, "build", "--webpack"], {
    env: {
      ...buildEnvironment,
      VAYUCRED_NEXT_OUTPUT: output,
    },
    stdio: "inherit",
  });

  if (result.error) {
    throw result.error;
  }

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

// Hostinger's Next.js detector accepts either static or standalone output.
// Generate both because older detector versions can miss a valid `out/` export.
runNextBuild("export");
runNextBuild("standalone");
