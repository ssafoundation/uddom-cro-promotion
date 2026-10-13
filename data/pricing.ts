/**
 * Pricing data.
 *
 * IMPORTANT — read before publishing.
 * These plans and prices are the *planned* launch pricing. Uddom's billing is
 * not yet configured in the Shopify Partner Dashboard, so this must not be
 * treated as final public pricing. `pricingVerified` is `false` until the live
 * billing configuration has been checked; while it is false the pricing section
 * shows a visible "pricing being finalised" notice and the CTAs do not start a
 * trial.
 *
 * The FEATURE LISTS are not written by hand: they are derived from `data/catalog`,
 * which mirrors the app's own pricing catalogue. A plan therefore lists exactly
 * what the app says it carries — the website cannot drift from the product.
 *
 * Annual pricing is deliberately absent — it is not available.
 * The 15-day trial is also not advertised until it is verified in billing.
 */

import {
  CATALOG_TOTAL,
  catalogAddedByPlan,
  catalogCountForPlan,
  type CatalogTier,
} from "./catalog";

export type Plan = {
  id: CatalogTier;
  name: string;
  price: string;
  period: string;
  blurb: string;
  /** The plan this one builds on, if any — its modules carry over. */
  inherits?: string;
  /** What this plan adds, straight from the catalogue. */
  features: string[];
  /** How many catalogue units this plan includes. */
  includedCount: number;
  featured?: boolean;
  cta: string;
};

/** Set to true only after verifying pricing against the live billing config. */
export const pricingVerified = false;

/** Monthly billing only. No annual option is offered. */
export const billingCycle = "Monthly" as const;

/** The denominator shown on each plan ("12 of 22 modules included"). */
export const catalogTotal = CATALOG_TOTAL;

function addedLabels(tier: CatalogTier): string[] {
  return catalogAddedByPlan(tier).map((unit) => unit.label);
}

export const plans: Plan[] = [
  {
    id: "free",
    name: "Free",
    price: "$0",
    period: "",
    blurb: "Start adding conversion essentials to your storefront.",
    features: addedLabels("free"),
    includedCount: catalogCountForPlan("free"),
    cta: "Get Started",
  },
  {
    id: "grow",
    name: "Grow",
    price: "$9.90",
    period: "/month",
    blurb: "Add urgency, social proof and the cart tools that recover orders.",
    inherits: "Free",
    features: addedLabels("grow"),
    includedCount: catalogCountForPlan("grow"),
    cta: "Choose Grow",
  },
  {
    id: "convert",
    name: "Convert",
    price: "$24.90",
    period: "/month",
    blurb: "Offers, upsells, reviews and the reporting that shows what worked.",
    inherits: "Grow",
    features: addedLabels("convert"),
    includedCount: catalogCountForPlan("convert"),
    featured: true,
    cta: "Choose Convert",
  },
  {
    id: "scale",
    name: "Scale",
    price: "$49.90",
    period: "/month",
    blurb: "Experimentation, email marketing and managed sending for growing stores.",
    inherits: "Convert",
    features: addedLabels("scale"),
    includedCount: catalogCountForPlan("scale"),
    cta: "Choose Scale",
  },
];

export const pricingNotes = [
  "Monthly billing only — annual plans are not offered.",
  "A free plan is available.",
  "Plans are cumulative: each adds to everything below it.",
  "Pricing shown is planned launch pricing and is being finalised before it goes live.",
];
