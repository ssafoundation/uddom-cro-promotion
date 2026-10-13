/**
 * Offer content for the /offers page.
 *
 * The offer models, reward types, product sources and statuses are copied from
 * the app's own offer builder constants (`app/modules/offers/offers.constants.ts`)
 * so the site can never describe an offer the builder cannot create.
 */

export type OfferModel = {
  key: string;
  label: string;
  description: string;
  /** Small glyph shown in the card — the same one the builder uses. */
  icon: string;
};

export const offerModels: OfferModel[] = [
  {
    key: "quantity_break",
    label: "Quantity Break",
    description: "Give customers a better price when they buy more.",
    icon: "▥",
  },
  {
    key: "buy_x_get_y",
    label: "Buy X Get Y",
    description: "Reward customers when they buy a qualifying quantity.",
    icon: "🎁",
  },
  {
    key: "bundle",
    label: "Bundle",
    description: "Combine qualifying products into a discounted bundle.",
    icon: "▦",
  },
  {
    key: "mix_match",
    label: "Mix & Match",
    description: "Let customers choose products to build their own offer.",
    icon: "⊞",
  },
  {
    key: "spend_reward",
    label: "Spend & Reward",
    description: "Unlock a reward when customers reach a spending amount.",
    icon: "✦",
  },
  {
    key: "subscription",
    label: "Subscription",
    description: "Create an offer around recurring purchases.",
    icon: "↻",
  },
  {
    key: "bundle_subscription",
    label: "Bundle + Subscription",
    description: "Combine a bundle offer with recurring subscription pricing.",
    icon: "⟳▦",
  },
];

export type OfferReward = { label: string; description: string };

export const rewardTypes: OfferReward[] = [
  { label: "Percentage off", description: "Reduce the eligible price by a percentage." },
  { label: "Fixed amount off", description: "Take a fixed amount off the eligible purchase." },
  { label: "Fixed price", description: "Set a fixed price for the eligible purchase." },
  { label: "Free gift", description: "Give the customer one or more qualifying products." },
  { label: "Free shipping", description: "Remove the eligible shipping cost." },
];

export type ProductSource = { label: string; description: string };

export const productSources: ProductSource[] = [
  { label: "Specific products", description: "Choose individual products for this offer." },
  { label: "Collection", description: "Apply the offer to products from a collection." },
  { label: "All products", description: "Make the offer available across the store." },
];

/** An offer moves through these states while you build and run it. */
export const offerStatuses: string[] = [
  "Draft",
  "Active",
  "Scheduled",
  "Paused",
  "Expired",
];
