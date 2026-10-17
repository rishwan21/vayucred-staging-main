import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const siteRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const appRoot = join(siteRoot, "app");

const routeFiles = new Map([
  ["/", join(appRoot, "page.tsx")],
  ["/about", join(appRoot, "about/page.tsx")],
  ["/asset-owners", join(appRoot, "asset-owners/page.tsx")],
  ["/buyers", join(appRoot, "buyers/page.tsx")],
  ["/contact", join(appRoot, "contact/page.tsx")],
  ["/evidence-infrastructure", join(appRoot, "evidence-infrastructure/page.tsx")],
  ["/methodology", join(appRoot, "methodology/page.tsx")],
  ["/privacy", join(appRoot, "privacy/page.tsx")],
  ["/terms", join(appRoot, "terms/page.tsx")],
]);

const failures = [];
const warnings = [];

function walk(directory) {
  return readdirSync(directory).flatMap((name) => {
    const path = join(directory, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

function requireCondition(condition, message) {
  if (!condition) failures.push(message);
}

for (const [route, file] of routeFiles) {
  requireCondition(existsSync(file), `Missing route source: ${route} (${relative(siteRoot, file)})`);
}

const sourceFiles = [
  ...walk(appRoot).filter((file) => file.endsWith(".tsx")),
  ...walk(join(siteRoot, "components")).filter((file) => file.endsWith(".tsx")),
];
const source = sourceFiles.map((file) => readFileSync(file, "utf8")).join("\n");

requireCondition(!source.includes("VayuCred"), "Incorrect brand capitalization `VayuCred` appears in website source.");
requireCondition(!/\bfintech\b/i.test(source), "Prohibited fintech positioning appears in website source.");
requireCondition(!source.includes("<form"), "An active form exists before contact ownership and privacy approval.");
requireCondition(source.includes("hello@vayucred.com"), "The approved public contact email is missing.");
requireCondition(source.includes("RASYLONN TECHNOLOGIES PRIVATE LIMITED"), "The certificate-confirmed legal entity is missing.");
requireCondition(!source.includes("Raylonn Technologies Private Limited"), "The earlier incorrect legal spelling remains in website source.");
requireCondition(source.includes("Rishwan Reddy") && source.includes("Sai Puneeth Bandi"), "The confirmed founding team is missing.");
requireCondition(
  source.includes("Eligibility and outcomes remain subject to applicable requirements and independent processes."),
  "The project-pathway boundary disclosure is missing.",
);
requireCondition(
  source.includes("Carbon credits and I-RECs are distinct instruments."),
  "The carbon-credit / I-REC instrument-separation statement is missing.",
);
requireCondition(
  source.includes("Registration, validation, verification, certification, and issuance decisions remain"),
  "The independent-role boundary is missing from the asset-owner path.",
);

const routeSet = new Set(routeFiles.keys());
const internalLinks = [...source.matchAll(/href=["'](\/[A-Za-z0-9\-\/#]*)["']/g)].map((match) => match[1]);
for (const href of new Set(internalLinks)) {
  const [path, fragment] = href.split("#");
  const route = path || "/";
  requireCondition(routeSet.has(route), `Internal link has no planned route source: ${href}`);
  if (fragment && routeSet.has(route)) {
    const targetSource = `${readFileSync(routeFiles.get(route), "utf8")}\n${readFileSync(join(appRoot, "layout.tsx"), "utf8")}`;
    requireCondition(
      targetSource.includes(`id="${fragment}"`) ||
        targetSource.includes(`id={'${fragment}'}`) ||
        targetSource.includes(`"${fragment}"`),
      `Internal link points to a missing fragment: ${href}`,
    );
  }
}
requireCondition(!source.includes("<button type=\"button\" disabled"), "A disabled button is presented as an available public action.");

const globals = readFileSync(join(appRoot, "globals.css"), "utf8");
requireCondition(globals.includes(":focus-visible"), "Global focus-visible treatment is missing.");
requireCondition(globals.includes("prefers-reduced-motion"), "Reduced-motion treatment is missing.");

warnings.push("The approved logo and Fraunces + DM Sans typography are installed. The social card remains a temporary brand-safe launch asset.");
requireCondition(!globals.includes("fonts.googleapis.com"), "Google Fonts is still referenced after local font approval.");
const tokens = readFileSync(join(appRoot, "brand-tokens.css"), "utf8");
requireCondition(tokens.includes("--background: var(--cream)") && tokens.includes("--cream: #F7F1E4"), "The cream canvas is missing.");
requireCondition(tokens.includes("--primary: var(--pine-900)") && tokens.includes("--pine-900: #184C3B"), "The pine anchor is missing.");
requireCondition(tokens.includes("--sky: #A8CBCD"), "The original Sky colour is missing.");

if (failures.length) {
  console.error(`Vayucred content QA failed (${failures.length}):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Vayucred content QA passed: ${routeFiles.size} routes and ${new Set(internalLinks).size} internal route targets checked.`);
for (const warning of warnings) console.log(`Release gate: ${warning}`);
