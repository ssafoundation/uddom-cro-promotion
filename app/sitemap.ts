import type { MetadataRoute } from "next";

import { modules } from "@/data/modules";
import { site } from "@/data/site";

/** Static routes, plus every module page generated from the catalogue. */
const STATIC_PATHS = [
  "/",
  "/features",
  "/offers",
  "/analytics",
  "/email-marketing",
  "/subscriptions",
  "/how-it-works",
  "/pricing",
  "/faq",
  "/about",
  "/contact",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const lastModified = new Date();

  return [
    ...STATIC_PATHS.map((path) => ({
      url: `${base}${path === "/" ? "" : path}`,
      lastModified,
      changeFrequency: (path === "/" ? "weekly" : "monthly") as "weekly" | "monthly",
      priority: path === "/" ? 1 : 0.7,
    })),
    ...modules.map((module) => ({
      url: `${base}/features/${module.key}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
