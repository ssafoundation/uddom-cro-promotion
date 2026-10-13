/** Platform pillars, product-showcase tabs and the centralized screenshot map. */

export type PlatformPillar = {
  id: string;
  name: string;
  headline: string;
  text: string;
  bullets: string[];
};

export const platformPillars: PlatformPillar[] = [
  {
    id: "cro",
    name: "CRO",
    headline: "Optimize every moment before the purchase.",
    text: "Conversion modules you switch on per store — urgency, social proof, trust and cart tools that render across the shopping journey.",
    bullets: ["12 storefront modules", "Per-module settings", "Works across the journey"],
  },
  {
    id: "offers",
    name: "Offers",
    headline: "Make the right offer at the right moment.",
    text: "Automatic discounts that apply at checkout: volume breaks, bundles, Mix & Match and product-specific deals.",
    bullets: ["Quantity breaks", "Bundles and Mix & Match", "Automatic at checkout"],
  },
  {
    id: "upsells",
    name: "Upsells",
    headline: "Grow the order after the decision.",
    text: "Cross-sell inside the cart drawer and a one-click post-purchase offer right after payment.",
    bullets: ["Cart drawer cross-sell", "Post-purchase upsell", "Relevant add-ons"],
  },
  {
    id: "analytics",
    name: "Analytics",
    headline: "Don't guess. Know what converts.",
    text: "Impressions, clicks, add-to-cart, purchases and attributed revenue — with coverage disclosed honestly.",
    bullets: ["Module performance", "Attributed revenue", "Coverage you can trust"],
  },
  {
    id: "ab-testing",
    name: "A/B Testing",
    headline: "Test experiences, read the results.",
    text: "Split one module between variants with your own traffic weights and compare how each one performed.",
    bullets: ["Deterministic assignment", "Traffic weights", "Descriptive results"],
  },
  {
    id: "email",
    name: "Email",
    headline: "Turn one-time buyers into returning customers.",
    text: "Contacts, lists, CSV import, reusable templates and product-focused marketing emails.",
    bullets: ["Lists and contacts", "Reusable templates", "Consent-based sending"],
  },
  {
    id: "recovery",
    name: "Recovery",
    headline: "Recover sales that were about to disappear.",
    text: "Abandoned checkout detection with automatic recovery emails on a delay you choose.",
    bullets: ["Automatic recovery", "Your own template", "Optional incentive"],
  },
  {
    id: "subscriptions",
    name: "Subscriptions",
    headline: "Turn one purchase into a relationship.",
    text: "Create selling plans and purchase options so customers can subscribe instead of buying once.",
    bullets: ["Selling plans", "Subscriber discounts", "Shopify-owned billing"],
  },
];

/* -------------------------------------------------------------------------- */
/* Product showcase tabs                                                        */
/* -------------------------------------------------------------------------- */
export type ShowcaseTab = {
  id: string;
  label: string;
  title: string;
  text: string;
  metrics: { label: string; value: string }[];
  screenshot: ScreenshotKey;
};

export const showcaseTabs: ShowcaseTab[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    title: "Your growth home base",
    text: "Setup progress, store health and the headline numbers from one place.",
    metrics: [
      { label: "Modules active", value: "12 of 15" },
      { label: "App embed", value: "Active" },
    ],
    screenshot: "dashboard",
  },
  {
    id: "cro",
    label: "CRO",
    title: "Conversion modules in one grid",
    text: "Turn a module on, configure it, and it renders on the storefront.",
    metrics: [
      { label: "Modules", value: "12 available" },
      { label: "Layouts", value: "Per module" },
    ],
    screenshot: "cro",
  },
  {
    id: "offers",
    label: "Offers",
    title: "Build offers step by step",
    text: "Type, products, rules and rewards, customers, display, schedule — then review.",
    metrics: [
      { label: "Offer types", value: "8" },
      { label: "Applies at", value: "Checkout" },
    ],
    screenshot: "offers",
  },
  {
    id: "analytics",
    label: "Analytics",
    title: "See what actually converts",
    text: "A per-module table of impressions, clicks, add-to-cart and attributed revenue.",
    metrics: [
      { label: "Metrics", value: "6 core" },
      { label: "Coverage", value: "Disclosed" },
    ],
    screenshot: "analytics",
  },
  {
    id: "ab-testing",
    label: "A/B Testing",
    title: "Run experiments with control",
    text: "Pick a module, describe your variants, set traffic, and start when you're ready.",
    metrics: [
      { label: "Variants", value: "2+" },
      { label: "Assignment", value: "Deterministic" },
    ],
    screenshot: "ab-testing",
  },
  {
    id: "email",
    label: "Email",
    title: "Lists, templates and sending",
    text: "Import contacts with consent confirmation, build a template, and send to subscribers.",
    metrics: [
      { label: "Per run", value: "100 emails" },
      { label: "Templates", value: "Reusable" },
    ],
    screenshot: "email",
  },
  {
    id: "subscriptions",
    label: "Subscriptions",
    title: "Selling plans made simple",
    text: "Create purchase options and review the contracts Shopify creates for your store.",
    metrics: [
      { label: "Plans", value: "Groups" },
      { label: "Billing", value: "Shopify-owned" },
    ],
    screenshot: "subscriptions",
  },
];

/* -------------------------------------------------------------------------- */
/* Screenshot system                                                            */
/* -------------------------------------------------------------------------- */
export type ScreenshotKey =
  | "dashboard"
  | "cro"
  | "offers"
  | "analytics"
  | "ab-testing"
  | "email"
  | "subscriptions";

export type ScreenshotEntry = {
  /** File inside /public/screenshots. */
  file: string;
  /** Alt text / caption subject. */
  alt: string;
  /** True pixel size, so the layout reserves the right space. */
  width: number;
  height: number;
  /** Caption shown under the image. */
  caption?: string;
  /** false keeps the labelled placeholder instead of the image. */
  ready: boolean;
  /** Recommended aspect ratio for the placeholder frame. */
  ratio: string;
};

/**
 * Central screenshot configuration.
 *
 * Every image below is the merchant's own in-app capture, copied out of the
 * user documentation (`Uddom-User-Docs`) into /public/screenshots and converted
 * to WebP. Real product UI only — never stock or invented imagery.
 */
export const screenshots: Record<ScreenshotKey, ScreenshotEntry> = {
  dashboard: {
    file: "dashboard.webp",
    alt: "The Uddom dashboard, showing setup progress, store health and the headline metrics.",
    width: 1600,
    height: 1029,
    caption: "The dashboard: setup progress, store health and the headline numbers.",
    ready: true,
    ratio: "16 / 10",
  },
  cro: {
    file: "cro-modules.webp",
    alt: "The CRO module grid in the Uddom app, with each module and its plan.",
    width: 1600,
    height: 1406,
    caption: "The CRO module grid — every module in one place.",
    ready: true,
    ratio: "16 / 10",
  },
  offers: {
    file: "offer-builder.webp",
    alt: "Building an offer in the Uddom offer builder.",
    width: 1600,
    height: 1500,
    caption: "The offer builder: type, products, rules and reward.",
    ready: true,
    ratio: "16 / 10",
  },
  analytics: {
    file: "analytics-overview.webp",
    alt: "The Insights overview in the Uddom app.",
    width: 1359,
    height: 546,
    caption: "Insights: what the store did over the period you choose.",
    ready: true,
    ratio: "16 / 10",
  },
  "ab-testing": {
    file: "ab-testing-details.webp",
    alt: "A single A/B test and how each of its variants performed in the Uddom app.",
    width: 1319,
    height: 654,
    caption: "One experiment, with its variants reported side by side.",
    ready: true,
    ratio: "16 / 10",
  },
  email: {
    file: "email-overview.webp",
    alt: "The Email Marketing overview in the Uddom app.",
    width: 1081,
    height: 879,
    caption: "Email marketing: lists, templates and sending.",
    ready: true,
    ratio: "16 / 10",
  },
  subscriptions: {
    file: "subscriptions-list.webp",
    alt: "The subscriptions list showing the contracts Shopify created, in the Uddom app.",
    width: 1475,
    height: 771,
    caption: "Subscriptions: the contracts Shopify builds from your selling plans.",
    ready: true,
    ratio: "16 / 10",
  },
};
