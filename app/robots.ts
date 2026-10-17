import type { MetadataRoute } from "next";

import { site } from "@/data/site";

/** robots.txt — the whole marketing site is public; point crawlers at the map. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    ...(site.url.trim().length > 0 ? { sitemap: `${site.url.replace(/\/$/, "")}/sitemap.xml` } : {}),
  };
}
