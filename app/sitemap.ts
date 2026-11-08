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
  }));
}
