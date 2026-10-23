/**
 * The "where is your store leaking sales?" guide.
 *
 * Each entry names a symptom a merchant recognises, then links to the modules
 * and pages that actually address it. Every link resolves to something the app
 * ships — this is a way into the product, never a promise of a result.
 */

export type Symptom = {
  id: string;
  /** The symptom, in the merchant's own words. */
  title: string;
  /** One line of context. */
  text: string;
  /** Module page keys — their titles and routes come from the module catalogue. */
  modules?: string[];
  /** Destinations that are not a single module page. */
  pages?: { label: string; href: string }[];
};

export const symptoms: Symptom[] = [
  {
    id: "browse",
    title: "Visitors browse, then leave.",
    text: "Traffic arrives, but too few people decide to buy.",
    modules: ["countdown-timer", "exit-intent-offer", "low-stock-badge"],
  },
  {
    id: "carts",
    title: "Carts are abandoned.",
    text: "Shoppers add to cart and disappear before checkout.",
    modules: [
      "cart-reservation-timer",
      "free-shipping-bar",
      "abandoned-checkout-recovery",
    ],
  },
  {
    id: "aov",
    title: "The order value stays small.",
    text: "People buy one item, and never the second.",
    modules: [
      "cart-drawer-cross-sell",
      "volume-bundle-offers",
      "post-purchase-upsell",
    ],
    pages: [{ label: "Offers & discounts", href: "/offers" }],
  },
  {
    id: "trust",
    title: "Shoppers don't trust the store yet.",
    text: "A newer store has no reviews on the page and nothing to reassure a first-time buyer.",
    modules: ["trust-badge-strip", "guarantee-banner"],
  },
  {
    id: "proof",
    title: "You can't tell what actually worked.",
    text: "Changes get made, but nothing is measured, so the next decision is a guess.",
    modules: ["ab-testing"],
    pages: [{ label: "Analytics & Insights", href: "/analytics" }],
  },
  {
    id: "repeat",
    title: "One-time buyers never come back.",
    text: "Nothing brings a customer back for a second order.",
    pages: [
      { label: "Email marketing", href: "/email-marketing" },
      { label: "Subscriptions", href: "/subscriptions" },
    ],
  },
];
