/**
 * Feature content for the landing page.
 *
 * Everything here reflects features that exist in the current Uddom app
 * (see the sibling developer docs). No capability is advertised that is not
 * implemented. Where a number appears it is illustrative demo data and is
 * labelled as such in the UI.
 */

/* -------------------------------------------------------------------------- */
/* Trust bar — statements only. No invented logos, counts or testimonials.     */
/* -------------------------------------------------------------------------- */
export const trustStatements: string[] = [
  "Built for Shopify",
  "Theme-aware implementation",
  "Native Shopify integrations",
  "Conversion-focused by design",
  "Built for growing stores",
  "One dashboard, fewer tools",
];

/* -------------------------------------------------------------------------- */
/* Problem section                                                             */
/* -------------------------------------------------------------------------- */
export const problemItems: string[] = [
  "Visitors leave product pages without buying",
  "Carts are abandoned at checkout",
  "Offers are the same for every shopper",
  "Upsell and bundle moments are missed",
  "It is hard to see which change actually converted",
  "Growth tools live in disconnected systems",
];

export const journey = {
  without: ["Visitor", "Product page", "Exit"],
  withUddom: [
    "Visitor",
    "Relevant offer",
    "Confidence",
    "Upsell",
    "Purchase",
    "Retention",
  ],
};

/* -------------------------------------------------------------------------- */
/* CRO feature grid (12 modules that exist in the app)                         */
/* -------------------------------------------------------------------------- */
export type CroFeature = {
  name: string;
  value: string;
  /** Which lightweight preview to render inside the card. */
  visual:
    | "stock"
    | "countdown"
    | "reserve"
    | "sales"
    | "viewers"
    | "reviews"
    | "shipping"
    | "exit"
    | "crosssell"
    | "trust"
    | "guarantee"
    | "postpurchase";
  wide?: boolean;
};

export const croFeatures: CroFeature[] = [
  {
    name: "Low Stock Badge",
    value: "Show honest scarcity on products that are actually running low.",
    visual: "stock",
  },
  {
    name: "Countdown Timer",
    value: "Give a sale a visible deadline so shoppers decide today.",
    visual: "countdown",
  },
  {
    name: "Cart Reservation Timer",
    value: "Hold the cart for a set window and keep the momentum going.",
    visual: "reserve",
  },
  {
    name: "Recent Sales Popup",
    value: "Surface real purchase activity to build trust at a glance.",
    visual: "sales",
  },
  {
    name: "Live Viewer Count",
    value: "Show how many shoppers are looking at a product right now.",
    visual: "viewers",
  },
  {
    name: "Review Widget",
    value: "Put star ratings and photo reviews on the product page.",
    visual: "reviews",
  },
  {
    name: "Free Shipping Bar",
    value: "Show how close a shopper is to free shipping, a discount and a gift.",
    visual: "shipping",
    wide: true,
  },
  {
    name: "Exit-Intent Offer",
    value: "Catch the shopper who is about to leave with the right offer.",
    visual: "exit",
  },
  {
    name: "Cart Drawer Cross-Sell",
    value: "Suggest one more relevant product inside the cart drawer.",
    visual: "crosssell",
  },
  {
    name: "Trust Badge Strip",
    value: "Reassure buyers with your own badges and wording.",
    visual: "trust",
  },
  {
    name: "Guarantee Banner",
    value: "Say your return policy plainly, right where it matters.",
    visual: "guarantee",
  },
  {
    name: "Post-Purchase Upsell",
    value: "Offer one more item right after payment, in a single click.",
    visual: "postpurchase",
  },
];

/* -------------------------------------------------------------------------- */
/* CRO interactive simulator                                                   */
/* -------------------------------------------------------------------------- */
export type SimModule = {
  id: string;
  label: string;
  tone: "urgency" | "trust" | "ship" | "cross";
  text: string;
  defaultOn: boolean;
};

export const simModules: SimModule[] = [
  {
    id: "low_stock",
    label: "Low stock badge",
    tone: "urgency",
    text: "Only 3 left",
    defaultOn: true,
  },
  {
    id: "trust",
    label: "Trust badge strip",
    tone: "trust",
    text: "Secure checkout · 30-day returns",
    defaultOn: true,
  },
  {
    id: "free_shipping",
    label: "Free shipping bar",
    tone: "ship",
    text: "You're $12 away from free shipping",
    defaultOn: true,
  },
  {
    id: "guarantee",
    label: "Guarantee banner",
    tone: "trust",
    text: "Backed by a 30-day money-back guarantee",
    defaultOn: false,
  },
  {
    id: "exit_intent",
    label: "Exit-intent offer",
    tone: "urgency",
    text: "Wait — here's 10% before you go",
    defaultOn: false,
  },
  {
    id: "cross_sell",
    label: "Cart drawer cross-sell",
    tone: "cross",
    text: "You may also like: matching accessory",
    defaultOn: false,
  },
];

/* -------------------------------------------------------------------------- */
/* Offers                                                                       */
/* -------------------------------------------------------------------------- */
export const offerTypes: string[] = [
  "Volume discounts",
  "Tiered offers",
  "Bundles",
  "Free gifts",
  "Product-specific offers",
  "Discount offers",
];

/** Illustrative ladder: buying more lowers the unit price. */
export const offerTiers: { qty: number; label: string; total: string; save: string }[] = [
  { qty: 1, label: "1 item", total: "$29", save: "" },
  { qty: 2, label: "2 items", total: "$52", save: "Save $6" },
  { qty: 3, label: "3 items", total: "$69", save: "Save $18" },
];

/* -------------------------------------------------------------------------- */
/* Analytics (illustrative dashboard)                                           */
/* -------------------------------------------------------------------------- */
export const analyticsMetrics: { label: string; value: string; delta?: string }[] = [
  { label: "Impressions", value: "128,400", delta: "+6.2%" },
  { label: "Clicks", value: "9,860", delta: "+4.1%" },
  { label: "Add to cart", value: "2,410", delta: "+3.4%" },
  { label: "CTR", value: "7.7%", delta: "+0.5pt" },
  { label: "Purchases", value: "684", delta: "+8.9%" },
  { label: "Conversion rate", value: "0.53%", delta: "+0.06pt" },
];

export const modulePerformance: { module: string; ctr: number; share: number; amber?: boolean }[] = [
  { module: "Free shipping bar", ctr: 9.4, share: 92 },
  { module: "Cart drawer cross-sell", ctr: 7.1, share: 71, amber: true },
  { module: "Exit-intent offer", ctr: 6.2, share: 62 },
  { module: "Recent sales popup", ctr: 4.8, share: 48 },
];

/* -------------------------------------------------------------------------- */
/* A/B testing                                                                  */
/* -------------------------------------------------------------------------- */
export const abVariants: {
  name: string;
  weight: number;
  impressions: string;
  clicks: string;
  purchases: string;
  highlight?: boolean;
}[] = [
  { name: "Control", weight: 34, impressions: "41,200", clicks: "2,965", purchases: "212" },
  { name: "Variant A", weight: 33, impressions: "40,880", clicks: "3,382", purchases: "258", highlight: true },
  { name: "Variant B", weight: 33, impressions: "40,540", clicks: "3,104", purchases: "231" },
];

/* -------------------------------------------------------------------------- */
/* The loop                                                                     */
/* -------------------------------------------------------------------------- */
export const loopSteps: { name: string; text: string }[] = [
  { name: "Launch", text: "Switch on a module and configure it in the app." },
  { name: "Measure", text: "Watch impressions, clicks, add-to-cart and attributed revenue." },
  { name: "Test", text: "Split a module between variants and record what each one did." },
  { name: "Improve", text: "Keep what works, change what does not — then launch again." },
];

/* -------------------------------------------------------------------------- */
/* Email + recovery                                                             */
/* -------------------------------------------------------------------------- */
export const emailCapabilities: string[] = [
  "Contacts and reusable lists",
  "CSV import with consent confirmation",
  "Reusable email templates with a live preview",
  "Send to subscribed contacts (100 per run)",
  "Product-focused marketing emails",
  "Abandoned checkout recovery",
  "Automatic recovery on a delay you choose",
  "SMTP delivery with sender verification",
];

export const recoveryTimeline: { name: string; text: string }[] = [
  { name: "Checkout abandoned", text: "A shopper leaves before completing their order." },
  { name: "Uddom detects the opportunity", text: "Eligible checkouts are picked up on your schedule." },
  { name: "Recovery email sent", text: "Your chosen template goes out after the delay you set." },
  { name: "Customer returns", text: "They come back to the store from the email." },
  { name: "Purchase recovered", text: "The order completes, and recovery performance is reported." },
];

/* -------------------------------------------------------------------------- */
/* Subscriptions                                                                */
/* -------------------------------------------------------------------------- */
export const subscriptionPoints: string[] = [
  "Selling plan groups",
  "Subscription purchase options",
  "Product and variant subscription support",
  "Subscriber discounts",
  "Read-only view of the contracts Shopify creates",
];

/* -------------------------------------------------------------------------- */
/* Theme compatibility                                                          */
/* -------------------------------------------------------------------------- */
export const themeFrames: { name: string; note: string }[] = [
  { name: "Dawn", note: "Shopify's reference theme" },
  { name: "Official Shopify themes", note: "Built on the same app-embed model" },
  { name: "Third-party themes", note: "Adapter-based storefront integration" },
  { name: "Custom themes", note: "Fail-safe: no host, no injection" },
];

/* -------------------------------------------------------------------------- */
/* Ecosystem ("one app, many systems")                                          */
/* -------------------------------------------------------------------------- */
export const ecosystemNodes: string[] = [
  "CRO",
  "Offers",
  "Bundles",
  "Upsells",
  "Analytics",
  "A/B Testing",
  "Email",
  "Recovery",
  "Subscriptions",
];

/* -------------------------------------------------------------------------- */
/* Comparison                                                                   */
/* -------------------------------------------------------------------------- */
export const compareFragmented: string[] = [
  "CRO app",
  "Upsell app",
  "Analytics app",
  "Email app",
  "Recovery app",
  "Subscription app",
];

export const compareUddom: string[] = [
  "One platform for every growth lever",
  "Unified CRO across the journey",
  "Unified experimentation",
  "Centralized configuration",
  "One place to read the results",
];

/* -------------------------------------------------------------------------- */
/* How it works                                                                 */
/* -------------------------------------------------------------------------- */
export const howItWorks: { title: string; text: string }[] = [
  { title: "Install Uddom", text: "Add Uddom to your Shopify store and open it from your admin." },
  { title: "Activate growth modules", text: "Switch on the CRO tools, offers and email features you want." },
  { title: "Configure your strategy", text: "Set thresholds, messages, layouts and targeting in the app." },
  { title: "Measure and optimize", text: "Read the results, run a test, and improve what converts." },
];
