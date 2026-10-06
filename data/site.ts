/**
 * Site-level configuration: brand, calls to action and SEO defaults.
 *
 * `installUrl` is intentionally empty. Uddom's Shopify App Store listing is not
 * public yet, so the primary CTA must not point at an unverified URL (see the
 * project README). Until it is set, CTAs fall back to an on-page anchor.
 * Set it to the live App Store URL when the listing is published.
 */
export const site = {
  name: "Uddom",
  tagline: "Shopify Growth Platform",
  description:
    "Turn more Shopify visitors into customers with CRO, offers, upsells, analytics, A/B testing, email marketing and subscriptions.",
  url: "", // e.g. "https://uddom.com" — set when the marketing domain is live

  ctas: {
    primary: "Get Started",
    primaryLong: "Get Started with Uddom",
    secondary: "Explore the Platform",
    secondaryAlt: "Explore Features",
    login: "Log in",
  },

  /** Live install target. Empty string = not published yet. */
  installUrl: "",

  /** Where the primary CTA lands until `installUrl` is set. */
  installFallbackAnchor: "#pricing",

  seo: {
    title: "Uddom — Shopify Growth Platform",
    description:
      "Turn more Shopify visitors into customers with CRO, offers, upsells, analytics, A/B testing, email marketing and subscriptions.",
    keywords: [
      "Shopify CRO",
      "Shopify upsell app",
      "Shopify bundles",
      "Shopify A/B testing",
      "abandoned checkout recovery",
      "Shopify growth platform",
    ],
  },
} as const;

export function resolveInstallHref(installUrl: string, fallback: string): string {
  return installUrl && installUrl.trim().length > 0 ? installUrl : fallback;
}
