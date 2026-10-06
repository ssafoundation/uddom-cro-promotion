import type { Metadata } from "next";

import { site } from "@/data/site";

/**
 * Central SEO metadata.
 *
 * `metadataBase` and `alternates.canonical` are only emitted when a real site
 * URL is configured in data/site.ts — no fake domain is ever published.
 * Open Graph / Twitter images are intentionally omitted until real brand art
 * exists (we do not ship invented assets).
 */
export function buildMetadata(): Metadata {
  const hasUrl = site.url.trim().length > 0;

  return {
    title: site.seo.title,
    description: site.seo.description,
    keywords: [...site.seo.keywords],
    applicationName: site.name,
    ...(hasUrl ? { metadataBase: new URL(site.url) } : {}),
    alternates: hasUrl ? { canonical: "/" } : undefined,
    openGraph: {
      type: "website",
      siteName: site.name,
      title: site.seo.title,
      description: site.seo.description,
      ...(hasUrl ? { url: site.url } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: site.seo.title,
      description: site.seo.description,
    },
    robots: {
      index: true,
      follow: true,
    },
    category: "business",
  };
}

/**
 * Structured data for the product. Deliberately omits aggregateRating and any
 * review count, because no verified ratings exist — inventing them would be
 * false structured data.
 */
export function buildJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: site.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Shopify",
    description: site.seo.description,
    ...(site.url.trim().length > 0 ? { url: site.url } : {}),
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "A free plan is available.",
    },
  };
}
