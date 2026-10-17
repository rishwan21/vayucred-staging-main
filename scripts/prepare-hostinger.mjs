import { copyFile, mkdir } from "node:fs/promises";
import { resolve } from "node:path";

const outputDirectory = resolve("out");

await mkdir(outputDirectory, { recursive: true });
await copyFile(resolve("public/.htaccess"), resolve(outputDirectory, ".htaccess"));

console.log("Hostinger configuration copied to out/.htaccess");
