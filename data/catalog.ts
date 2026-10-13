/**
 * The sellable catalogue — the ONE source for what each plan carries.
 *
 * This mirrors the app's own registry,
 * `app/modules/catalog/pricingCatalog.ts`, one entry per unit the merchant can
 * actually get. The site's plan cards, plan counts and module badges are all
 * derived from here, so the website can never claim a plan carries something the
 * app does not.
 *
 * `tier` is the plan that first includes the unit (plans are cumulative). The
 * module tier vocabulary (Free / Basic / Pro / Growth) is resolved in the app
 * before it reaches this file, so the values here are already the merchant-facing
 * plans (free / grow / convert / scale).
 *
 * Modules the app builds but defers past V1 (points & rewards, referral program,
 * VIP tiers, spin-to-win) are deliberately absent: they are not sellable, so they
 * are never advertised here.
 */

export type CatalogTier = "free" | "grow" | "convert" | "scale";
export type CatalogKind = "cro_widget" | "product" | "tool";

export type CatalogUnit = {
  /** The app's own key. */
  key: string;
  /** Merchant-facing name, as shown on the app's plans page. */
  label: string;
  kind: CatalogKind;
  /** The plan that first includes this unit. */
  tier: CatalogTier;
  /** The module page, where one exists. */
  href?: string;
};

export const catalog: CatalogUnit[] = [
  /* --- CRO widget modules (the fifteen with a storefront presence) --- */
  { key: "low_stock_badge", label: "Low stock badge", kind: "cro_widget", tier: "free", href: "/features/low-stock-badge" },
  { key: "recent_sales_popup", label: "Recent sales popup", kind: "cro_widget", tier: "free", href: "/features/recent-sales-popup" },
  { key: "free_shipping_bar", label: "Free shipping & gift bar", kind: "cro_widget", tier: "free", href: "/features/free-shipping-bar" },
  { key: "trust_badge_strip", label: "Trust badge strip", kind: "cro_widget", tier: "free", href: "/features/trust-badge-strip" },
  { key: "guarantee_banner", label: "Guarantee banner", kind: "cro_widget", tier: "free", href: "/features/guarantee-banner" },

  { key: "countdown_timer", label: "Countdown timer", kind: "cro_widget", tier: "grow", href: "/features/countdown-timer" },
  { key: "live_viewer_count", label: "Live viewer count", kind: "cro_widget", tier: "grow", href: "/features/live-viewer-count" },
  { key: "exit_intent_offer", label: "Exit-intent offer", kind: "cro_widget", tier: "grow", href: "/features/exit-intent-offer" },
  { key: "cart_drawer_cross_sell", label: "Cart drawer cross-sell", kind: "cro_widget", tier: "grow", href: "/features/cart-drawer-cross-sell" },
  { key: "discount_offers", label: "Discount Offers", kind: "tool", tier: "grow" },
  { key: "email_delivery", label: "Email delivery (your own provider)", kind: "tool", tier: "grow" },
  { key: "email_templates", label: "Email templates", kind: "tool", tier: "grow" },

  { key: "cart_reservation_timer", label: "Cart reminder", kind: "cro_widget", tier: "convert", href: "/features/cart-reservation-timer" },
  { key: "review_widget", label: "Reviews (moderation, importers & widget)", kind: "cro_widget", tier: "convert", href: "/features/review-widget" },
  { key: "abandoned_cart_emails", label: "Abandoned Checkout Recovery", kind: "cro_widget", tier: "convert", href: "/features/abandoned-checkout-recovery" },
  { key: "volume_discount", label: "Volume & Bundle Offers", kind: "cro_widget", tier: "convert", href: "/features/volume-bundle-offers" },
  { key: "post_purchase_upsell", label: "Post-purchase upsell", kind: "cro_widget", tier: "convert", href: "/features/post-purchase-upsell" },
  { key: "subscriptions", label: "Subscriptions (selling plans + contracts)", kind: "tool", tier: "convert" },

  { key: "ab_testing", label: "A/B testing", kind: "cro_widget", tier: "scale", href: "/features/ab-testing" },
  { key: "email_marketing", label: "Email Marketing (lists, import & bulk send)", kind: "product", tier: "scale" },
  { key: "insights", label: "Insights", kind: "product", tier: "scale" },
  { key: "managed_email", label: "Uddom-managed email sending", kind: "product", tier: "scale" },
];

/** How many units the catalogue holds in total — the denominator on the plans. */
export const CATALOG_TOTAL = catalog.length;

export const PLAN_ORDER: CatalogTier[] = ["free", "grow", "convert", "scale"];

/** What a plan ADDS over the one below it. */
export function catalogAddedByPlan(tier: CatalogTier): CatalogUnit[] {
  return catalog.filter((unit) => unit.tier === tier);
}

/** Everything a plan carries, by the same cumulative rule the app's gate uses. */
export function catalogForPlan(tier: CatalogTier): CatalogUnit[] {
  const rank = PLAN_ORDER.indexOf(tier);
  return catalog.filter((unit) => PLAN_ORDER.indexOf(unit.tier) <= rank);
}

/** How many units a plan includes. */
export function catalogCountForPlan(tier: CatalogTier): number {
  return catalogForPlan(tier).length;
}
