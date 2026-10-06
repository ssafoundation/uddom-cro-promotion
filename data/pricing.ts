/**
 * Pricing data.
 *
 * IMPORTANT — read before publishing.
 * These plans and prices are the *planned* launch pricing. Uddom's billing is
 * not yet configured in the Shopify Partner Dashboard, so this must not be
 * treated as final public pricing. `verified` is `false` until the live billing
 * configuration has been checked; while it is false the pricing section shows a
 * visible "pricing being finalised" notice and the CTAs do not start a trial.
 *
 * Annual pricing is deliberately absent — it is not available.
 * The 15-day trial is also not advertised until it is verified in billing.
 */

export type Plan = {
  id: "free" | "grow" | "convert" | "scale";
  name: string;
  price: string;
  period: string;
  blurb: string;
  features: string[];
  featured?: boolean;
  cta: string;
};

/** Set to true only after verifying pricing against the live billing config. */
export const pricingVerified = false;

/** Monthly billing only. No annual option is offered. */
export const billingCycle = "Monthly" as const;

export const plans: Plan[] = [
  {
    id: "free",
    name: "Free",
    price: "$0",
    period: "",
    blurb: "Start adding conversion essentials to your storefront.",
    features: ["Trust Badge Strip", "Guarantee Banner", "Low Stock Badge"],
    cta: "Get Started",
  },
  {
    id: "grow",
    name: "Grow",
    price: "$9.90",
    period: "/month",
    blurb: "Add urgency and social proof across the shopping journey.",
    features: [
      "Everything in Free",
      "Free Shipping Bar",
      "Countdown Timer",
      "Cart Reservation Timer",
      "Recent Sales Popup",
      "Live Viewer Count",
      "Cart Drawer Cross-Sell",
    ],
    cta: "Choose Grow",
  },
  {
    id: "convert",
    name: "Convert",
    price: "$24.90",
    period: "/month",
    blurb: "Offers, upsells and the reporting to see what works.",
    features: [
      "Everything in Grow",
      "Offers",
      "Bundles",
      "Volume Discounts",
      "Exit Intent",
      "Post-Purchase Upsell",
      "Review Widget",
      "Analytics",
      "CRO Dashboard",
      "Insights",
    ],
    featured: true,
    cta: "Choose Convert",
  },
  {
    id: "scale",
    name: "Scale",
    price: "$49.90",
    period: "/month",
    blurb: "Experimentation, email and subscriptions for growing stores.",
    features: [
      "Everything in Convert",
      "A/B Testing",
      "Email Marketing",
      "Abandoned Checkout Recovery",
      "Email Delivery",
      "Subscription selling plans",
    ],
    cta: "Choose Scale",
  },
];

export const pricingNotes = [
  "Monthly billing only — annual plans are not offered.",
  "A free plan is available.",
  "Pricing shown is planned launch pricing and is being finalised before it goes live.",
];
