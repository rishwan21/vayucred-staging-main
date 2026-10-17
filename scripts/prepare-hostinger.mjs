import { copyFile, cp, mkdir } from "node:fs/promises";
import { resolve } from "node:path";

const outputDirectory = resolve("out");
const standaloneDirectory = resolve(".next/standalone");

await mkdir(outputDirectory, { recursive: true });
await copyFile(resolve("public/.htaccess"), resolve(outputDirectory, ".htaccess"));
await cp(resolve("public"), resolve(standaloneDirectory, "public"), {
  recursive: true,
});
await mkdir(resolve(standaloneDirectory, ".next"), { recursive: true });
await cp(resolve(".next/static"), resolve(standaloneDirectory, ".next/static"), {
  recursive: true,
});

console.log("Hostinger configuration copied to out/.htaccess");
console.log("Hostinger standalone server packaged in .next/standalone/");
