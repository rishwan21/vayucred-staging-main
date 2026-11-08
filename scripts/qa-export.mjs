import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const output = resolve(import.meta.dirname, "../out");
const read = (path) => readFile(resolve(output, path), "utf8");
const origin = (process.env.NEXT_PUBLIC_SITE_URL || "https://vayucred.com").replace(/\/$/, "");
const indexable = process.env.NEXT_PUBLIC_ALLOW_INDEXING !== "false";
const routes = ["", "asset-owners", "buyers", "evidence-infrastructure", "methodology", "about", "contact", "privacy", "terms"];
const decode = (text) => text.replace(/&amp;/g, "&").replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"');
const visibleText = (html) => decode(html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ").replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ").replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();

const sitemap = await read("sitemap.xml");
const locations = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => decode(match[1]));
assert.equal(locations.length, routes.length, "Sitemap must list every public route once");
assert(!/<lastmod>|<changefreq>|<priority>/.test(sitemap), "Sitemap must not publish synthetic dates or ranking hints");

for (const route of routes) {
  const html = await read(route ? `${route}/index.html` : "index.html");
  const url = `${origin}/${route ? `${route}/` : ""}`;
  assert(locations.includes(url), `Missing canonical sitemap entry: ${url}`);
  assert(html.includes(`rel="canonical" href="${url}"`), `Incorrect canonical: ${route || "/"}`);
  assert(html.includes(`property="og:url" content="${url}"`), `Incorrect social URL: ${route || "/"}`);
  const robots = html.match(/<meta name="robots" content="([^"]+)"/);
  assert(robots, `Missing robots metadata: ${route || "/"}`);
  assert.equal(!robots[1].includes("noindex"), indexable, `Wrong indexing permission: ${route || "/"}`);
  assert.equal((html.match(/<h1\b/g) || []).length, 1, `Expected one H1: ${route || "/"}`);
}

const homepage = await read("index.html");
const text = visibleText(homepage);
assert(text.includes("Carbon project evidence and registration support · India"), "Updated homepage positioning is missing");
assert(!homepage.includes('name="keywords"'), "Meta keywords should not be emitted");
assert(!homepage.includes('class="stats-section"'), "Unverified impact statistics should not appear on the homepage");
assert(!text.includes("100%"), "Unverified percentage claims should not appear on the homepage");
for (const heading of ["Solar", "Biogas / CBG", "Biochar", "Assess", "Aggregate", "Monitor", "Connect"]) {
  assert(text.includes(heading), `Homepage project/service content is missing from the initial HTML: ${heading}`);
}
const schemas = [...homepage.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((match) => JSON.parse(match[1]));
const faq = schemas.find((schema) => schema["@type"] === "FAQPage");
assert(faq && faq.mainEntity.length === 6, "Expected all six visible FAQs in structured data");
for (const question of faq.mainEntity) {
  assert(text.includes(question.name), `FAQ question missing from rendered HTML: ${question.name}`);
  assert(text.includes(question.acceptedAnswer.text), `FAQ answer missing from rendered HTML: ${question.name}`);
}
const contact = await read("contact/index.html");
const contactDescription = contact.match(/<meta name="description" content="([^"]+)"/);
assert(contactDescription, "Contact description is missing");
assert(
  decode(contactDescription[1]).length >= 120 && decode(contactDescription[1]).length <= 160,
  "Contact description must be between 120 and 160 characters",
);
assert(contact.includes("<title>Contact Vayucred for Carbon Project Support</title>"), "Contact title is outdated");
const about = await read("about/index.html");
assert(!visibleText(about).includes("Founder portraits will replace the monograms"), "Internal founder-photo note should not appear");
const hostingerConfig = await read(".htaccess");
assert(hostingerConfig.includes('Header always set X-Robots-Tag "noindex, nofollow"'), "Generated text artifacts must receive noindex headers");
assert(hostingerConfig.includes("^brand(?:/.*)?$ - [G,L,NC]"), "Retired brand URLs must return 410");
const robots = await read("robots.txt");
assert(robots.includes(indexable ? "Allow: /" : "Disallow: /"), "Wrong crawler permission in robots.txt");
if (indexable) assert(robots.includes(`${origin}/sitemap.xml`), "Missing production sitemap discovery");
console.log(`Export QA passed: ${routes.length} canonical routes, indexing controls, crawlable guidance, FAQ parity and verified claim checks.`);
