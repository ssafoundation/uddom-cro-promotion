import type { Metadata } from "next";

import { site } from "@/data/site";

/**
 * Central SEO metadata.
 *
 * `metadataBase` lets Next resolve the relative OG image to an absolute URL;
 * there is deliberately NO global `alternates.canonical`, because a canonical
 * emitted from the root layout would point every page at the home page.
 *
 * The Open Graph image is the supplied product render (16:9), not an invented
 * asset.
 */
const OG_IMAGE = {
  url: "/images/analytics-dashboard-neon-modules.webp",
  width: 1672,
  height: 941,
  alt: "The Uddom CRO dashboard with revenue, conversion, orders and AOV tiles, a revenue trend line and the CRO module row.",
};

export function buildMetadata(): Metadata {
  const hasUrl = site.url.trim().length > 0;

  return {
    title: site.seo.title,
    description: site.seo.description,
    keywords: [...site.seo.keywords],
    applicationName: site.name,
    ...(hasUrl ? { metadataBase: new URL(site.url) } : {}),
    openGraph: {
      type: "website",
      siteName: site.name,
      title: site.seo.title,
      description: site.seo.description,
      ...(hasUrl ? { url: site.url } : {}),
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: site.seo.title,
      description: site.seo.description,
      images: [OG_IMAGE.url],
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
 * false structured data. `publisher` names the company behind the app.
 */
export function buildJsonLd() {
  const absolute = (path: string) => `${site.url.replace(/\/$/, "")}${path}`;

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: site.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Shopify",
    description: site.seo.description,
    ...(site.url.trim().length > 0
      ? { url: site.url, image: absolute("/images/uddom-logo.webp") }
      : {}),
    publisher: site.url.trim().length
      ? {
          "@type": "Organization",
          name: "Akhtar Labs",
          url: "https://akhtarlabs.com",
        }
      : undefined,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "A free plan is available.",
    },
  };
}
