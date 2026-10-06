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
  /** Expected file inside /public/screenshots. */
  file: string;
  /** Placeholder label shown until the real image is dropped in. */
  label: string;
  /** Optional caption / alt text. */
  alt: string;
  /** Recommended aspect ratio for the placeholder frame. */
  ratio: string;
};

/**
 * Central screenshot configuration. Drop the real image into
 * /public/screenshots with the exact file name below and set `ready: true`
 * on that entry (or leave `ready` false to keep the labelled placeholder).
 * No component code needs to change.
 */
export const screenshots: Record<
  ScreenshotKey,
  ScreenshotEntry & { ready: boolean }
> = {
  dashboard: {
    file: "dashboard.webp",
    label: "Product screenshot placeholder",
    alt: "Uddom dashboard",
    ratio: "16 / 10",
    ready: false,
  },
  cro: {
    file: "cro.webp",
    label: "Product screenshot placeholder",
    alt: "Uddom CRO module grid",
    ratio: "16 / 10",
    ready: false,
  },
  offers: {
    file: "offers.webp",
    label: "Product screenshot placeholder",
    alt: "Uddom offer builder",
    ratio: "16 / 10",
    ready: false,
  },
  analytics: {
    file: "analytics.webp",
    label: "Product screenshot placeholder",
    alt: "Uddom analytics",
    ratio: "16 / 10",
    ready: false,
  },
  "ab-testing": {
    file: "ab-testing.webp",
    label: "Product screenshot placeholder",
    alt: "Uddom A/B testing",
    ratio: "16 / 10",
    ready: false,
  },
  email: {
    file: "email.webp",
    label: "Product screenshot placeholder",
    alt: "Uddom email marketing",
    ratio: "16 / 10",
    ready: false,
  },
  subscriptions: {
    file: "subscriptions.webp",
    label: "Product screenshot placeholder",
    alt: "Uddom subscriptions",
    ratio: "16 / 10",
    ready: false,
  },
};
