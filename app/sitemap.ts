import type { MetadataRoute } from "next";

import { pageUrl } from "@/lib/site";

export const dynamic = "force-static";

const routes = [
  "/",
  "/asset-owners",
  "/buyers",
  "/evidence-infrastructure",
  "/methodology",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: pageUrl(route),
    lastModified: new Date("2026-10-25"),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route === "/asset-owners" || route === "/buyers" ? 0.9 : 0.7,
  }));
}
