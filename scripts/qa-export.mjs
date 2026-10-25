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
assert(text.split(/\s+/).length >= 1200, "Homepage project guidance is missing from the initial HTML");
const schemas = [...homepage.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((match) => JSON.parse(match[1]));
const faq = schemas.find((schema) => schema["@type"] === "FAQPage");
assert(faq && faq.mainEntity.length === 6, "Expected all six visible FAQs in structured data");
for (const question of faq.mainEntity) {
  assert(text.includes(question.name), `FAQ question missing from rendered HTML: ${question.name}`);
  assert(text.includes(question.acceptedAnswer.text), `FAQ answer missing from rendered HTML: ${question.name}`);
}
for (const number of ["3+", "100%", "4", "2"]) {
  assert(homepage.includes(`<span class="sr-only">${number}</span>`), `Missing accessible statistic: ${number}`);
}
const robots = await read("robots.txt");
assert(robots.includes(indexable ? "Allow: /" : "Disallow: /"), "Wrong crawler permission in robots.txt");
if (indexable) assert(robots.includes(`${origin}/sitemap.xml`), "Missing production sitemap discovery");
console.log(`Export QA passed: ${routes.length} canonical routes, indexing controls, crawlable guidance, FAQ parity and accessible statistics.`);
