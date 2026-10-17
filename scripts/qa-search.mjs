import { access, readFile, stat } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const read = (path) => readFile(resolve(root, path), "utf8");

function requireCondition(condition, message) {
  if (!condition) throw new Error(message);
}

const routes = [
  ["/", "app/layout.tsx"],
  ["/asset-owners", "app/asset-owners/page.tsx"],
  ["/buyers", "app/buyers/page.tsx"],
  ["/evidence-infrastructure", "app/evidence-infrastructure/page.tsx"],
  ["/methodology", "app/methodology/page.tsx"],
  ["/about", "app/about/page.tsx"],
  ["/contact", "app/contact/page.tsx"],
  ["/privacy", "app/privacy/page.tsx"],
  ["/terms", "app/terms/page.tsx"],
];

const [layout, homepage, site, sitemap, robots, llms, manifest, styles, privacy, terms, htaccess] = await Promise.all([
  read("app/layout.tsx"),
  read("app/page.tsx"),
  read("lib/site.ts"),
  read("app/sitemap.ts"),
  read("app/robots.ts"),
  read("public/llms.txt"),
  read("app/manifest.ts"),
  read("app/globals.css"),
  read("app/privacy/page.tsx"),
  read("app/terms/page.tsx"),
  read("public/.htaccess"),
]);

requireCondition(layout.includes("metadataBase: new URL(siteUrl)"), "Metadata base is missing.");
requireCondition(site.includes('"https://vayucred.com"'), "Canonical production origin fallback is missing.");
requireCondition(site.includes("NEXT_PUBLIC_ALLOW_INDEXING"), "Environment-controlled indexing gate is missing.");
requireCondition(site.includes('legalName: "RASYLONN TECHNOLOGIES PRIVATE LIMITED"'), "Correct legal entity is missing from schema.");
requireCondition(site.includes('"@type": "Organization"'), "Organization schema is missing.");
requireCondition(site.includes('"@type": "WebSite"'), "WebSite schema is missing.");
requireCondition(site.includes("sameAs"), "Organization identity links are missing.");
requireCondition(site.includes('url: "/social/vayucred-social.png"'), "Social image URL is not safe for repository-scoped staging metadata.");
requireCondition(homepage.includes('type="application/ld+json"'), "Homepage JSON-LD output is missing.");
requireCondition(robots.includes('disallow: "/"'), "Staging crawl block is missing.");
requireCondition(robots.includes('allow: "/"'), "Production crawl permission is missing.");
requireCondition(robots.includes("allowIndexing"), "Robots route is not tied to the indexing gate.");
requireCondition(llms.includes("## Confirmed scope"), "llms.txt is missing its confirmed-scope section.");
requireCondition(manifest.includes('theme_color: "#F7F1E4"'), "Manifest theme colour does not match the brand canvas.");
requireCondition(manifest.includes("basePath"), "Manifest is not safe for repository-scoped staging paths.");
requireCondition(styles.includes("Search-friendly responsive guardrails"), "Responsive readability guardrails are missing.");
requireCondition(styles.includes("overflow-wrap: anywhere"), "Narrow-viewport overflow protection is missing.");
requireCondition(layout.includes("NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION") && layout.includes("NEXT_PUBLIC_BING_SITE_VERIFICATION"), "Search-engine ownership verification hooks are missing.");
requireCondition(htaccess.includes("^www\\.vayucred\\.com$") && htaccess.includes("https://vayucred.com"), "Canonical www redirect is missing from Hostinger configuration.");
requireCondition(htaccess.includes("Content-Security-Policy") && htaccess.includes("X-Content-Type-Options") && htaccess.includes("Referrer-Policy"), "Production security headers are incomplete.");

for (const [route, file] of routes) {
  requireCondition(sitemap.includes(`"${route}"`), `Sitemap source is missing ${route}.`);
  if (route !== "/") {
    const source = await read(file);
    requireCondition(source.includes(`path: "${route}"`), `${file} is missing its canonical path.`);
  }
}

requireCondition(!privacy.includes("index: false"), "Privacy notice remains noindex in source.");
requireCondition(!terms.includes("index: false"), "Terms remain noindex in source.");
requireCondition(privacy.includes("8 October 2026"), "Privacy notice update date is missing.");
requireCondition(terms.includes("8 October 2026"), "Terms update date is missing.");

await Promise.all([
  access(resolve(root, "public/icon.svg")),
  access(resolve(root, "public/social/vayucred-social.png")),
]);

const socialImage = await stat(resolve(root, "public/social/vayucred-social.png"));
requireCondition(socialImage.size > 10_000, "Social preview image appears incomplete.");

console.log("Search QA passed: canonicals, environment indexing, schema, crawl routes, legal metadata, AI summary, social assets and responsive guardrails are present.");
