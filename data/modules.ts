/**
 * The CRO module catalogue behind /features.
 *
 * One entry per storefront CRO module that ships in the Uddom app. Nothing is
 * listed here that is not implemented: the keys, titles, categories and — most
 * importantly — the owning plan all come from the app's own billing matrix
 * (`app/modules/cro/definitions.ts` → `planPresentation.ts`), so the website can
 * never advertise a plan the app does not honour.
 *
 * The internal module tier (Free / Basic / Pro / Growth) is never shown to a
 * visitor; `plan` below is already the merchant-facing label (Free / Grow /
 * Convert / Scale).
 *
 * `docsUrl` points at the live user documentation for that module.
 *
 * `shot` and `shotFront` are the module's own screenshots, copied out of the
 * user documentation into /public/screenshots. They are the merchant's real
 * in-app captures — never invented or stock imagery — and carry their true
 * pixel size so the page reserves the right space and never crops them.
 */

export type UddomPlan = "Free" | "Grow" | "Convert" | "Scale";

export type ModuleCategoryId =
  | "urgency"
  | "social-proof"
  | "cart-recovery"
  | "aov"
  | "trust";

export type ModuleCategory = {
  id: ModuleCategoryId;
  title: string;
  blurb: string;
};

/** The category titles the Uddom app itself groups its CRO modules under. */
export const moduleCategories: ModuleCategory[] = [
  {
    id: "urgency",
    title: "Urgency",
    blurb: "Give shoppers a concrete reason to decide now rather than later.",
  },
  {
    id: "social-proof",
    title: "Social proof",
    blurb: "Show real activity from your own store.",
  },
  {
    id: "cart-recovery",
    title: "Cart recovery",
    blurb: "Save the carts and checkouts that would otherwise be abandoned.",
  },
  {
    id: "aov",
    title: "AOV booster",
    blurb: "Grow the order before, inside and right after the cart.",
  },
  {
    id: "trust",
    title: "Trust",
    blurb: "Remove doubt at the moment of purchase.",
  },
];

export type ModuleShot = {
  /** File inside /public/screenshots. */
  file: string;
  alt: string;
  /** True pixel size of the image, so the layout reserves the right space. */
  width: number;
  height: number;
  caption?: string;
  /** Heading for this figure on the module page (the second figure only). */
  label?: string;
  /** false renders a labelled placeholder instead of the image. */
  ready: boolean;
};

export type UddomModule = {
  /** Route slug: /features/<key>. */
  key: string;
  title: string;
  category: ModuleCategoryId;
  /** The merchant-facing plan that carries this module. */
  plan: UddomPlan;
  /** One-line summary, used on the card and as the page lead. */
  blurb: string;
  /** What the module actually does — short, factual lines. */
  bullets: string[];
  /** Live user documentation for this module. */
  docsUrl: string;
  /** The module's own settings screen in the Uddom app. */
  shot: ModuleShot;
  /** The module as it appears on a storefront, when a capture exists. */
  shotFront?: ModuleShot;
};

const DOCS = "https://docs.uddomcro.com";

export const modules: UddomModule[] = [
  {
    key: "countdown-timer",
    title: "Countdown timer",
    category: "urgency",
    plan: "Grow",
    blurb: "A ticking clock on sale products before the offer ends.",
    bullets: [
      "A live countdown shown on the products you choose",
      "Deadline, message and styling set in the app",
      "Renders through the theme app embed — no theme code",
    ],
    docsUrl: `${DOCS}/cro/countdown-timer.html`,
    shot: {
      file: "countdown-timer-settings.webp",
      alt: "The Countdown timer settings screen in the Uddom app.",
      width: 659,
      height: 662,
      caption: "The Countdown timer settings in the Uddom app.",
      ready: true,
    },
    shotFront: {
      file: "countdown-timer-storefront.webp",
      alt: "A countdown timer shown on a storefront product page.",
      width: 806,
      height: 688,
      caption: "The timer as a shopper sees it on the product page.",
      label: "On the storefront",
      ready: true,
    },
  },
  {
    key: "low-stock-badge",
    title: "Low stock badge",
    category: "urgency",
    plan: "Free",
    blurb: "Flag products that are running low so shoppers see “only a few left”.",
    bullets: [
      "A badge on any product at or below your stock threshold",
      "Reads your store's real Shopify inventory levels",
      "Your own wording, with the count filled in automatically",
    ],
    docsUrl: `${DOCS}/cro/low-stock-badge.html`,
    shot: {
      file: "low-stock-badge-settings.webp",
      alt: "The Low stock badge settings screen in the Uddom app.",
      width: 645,
      height: 505,
      caption: "The Low stock badge settings in the Uddom app.",
      ready: true,
    },
    shotFront: {
      file: "low-stock-badge-storefront.webp",
      alt: "A low stock badge shown on a storefront product page.",
      width: 1572,
      height: 757,
      caption: "The badge beside the buy area on the storefront.",
      label: "On the storefront",
      ready: true,
    },
  },
  {
    key: "cart-reservation-timer",
    title: "Cart reminder",
    category: "urgency",
    plan: "Convert",
    blurb: "A draggable countdown nudge while items sit in the cart.",
    bullets: [
      "A countdown nudge that appears while items sit in the cart",
      "Window, message and position set in the app",
      "Adds a reason to finish the order without discounting",
    ],
    docsUrl: `${DOCS}/cro/cart-reservation-timer.html`,
    shot: {
      file: "cart-reminder-settings.webp",
      alt: "The Cart reminder settings screen in the Uddom app.",
      width: 666,
      height: 625,
      caption: "The Cart reminder settings in the Uddom app.",
      ready: true,
    },
    shotFront: {
      file: "cart-reminder-storefront.webp",
      alt: "A cart reminder countdown shown on a storefront.",
      width: 1203,
      height: 935,
      caption: "The reminder as a shopper sees it while the cart is open.",
      label: "On the storefront",
      ready: true,
    },
  },
  {
    key: "recent-sales-popup",
    title: "Recent sales popup",
    category: "social-proof",
    plan: "Free",
    blurb: "A quick notification when someone completes a purchase.",
    bullets: [
      "A brief popup when a purchase completes in your store",
      "Driven by your store's own recent orders — nothing invented",
      "Timing and placement set in the app",
    ],
    docsUrl: `${DOCS}/cro/recent-sales-popup.html`,
    shot: {
      file: "recent-sales-popup-settings.webp",
      alt: "The Recent sales popup settings screen in the Uddom app.",
      width: 654,
      height: 852,
      caption: "The Recent sales popup settings in the Uddom app.",
      ready: true,
    },
    shotFront: {
      file: "recent-sales-popup-storefront.webp",
      alt: "A recent sales popup shown on a storefront.",
      width: 665,
      height: 354,
      caption: "The popup as it appears to a shopper.",
      label: "On the storefront",
      ready: true,
    },
  },
  {
    key: "live-viewer-count",
    title: "Live viewer count",
    category: "social-proof",
    plan: "Grow",
    blurb: "Show how many shoppers are viewing a product right now.",
    bullets: [
      "A live viewer count on the product page",
      "Wording and placement set in the app",
      "Adds social proof at the moment of decision",
    ],
    docsUrl: `${DOCS}/cro/live-viewer-count.html`,
    shot: {
      file: "live-viewer-count-settings.webp",
      alt: "The Live viewer count settings screen in the Uddom app.",
      width: 651,
      height: 753,
      caption: "The Live viewer count settings in the Uddom app.",
      ready: true,
    },
    shotFront: {
      file: "live-viewer-count-storefront.webp",
      alt: "A live viewer count shown on a storefront product page.",
      width: 819,
      height: 596,
      caption: "The viewer count as a shopper sees it.",
      label: "On the storefront",
      ready: true,
    },
  },
  {
    key: "free-shipping-bar",
    title: "Free shipping & gift bar",
    category: "cart-recovery",
    plan: "Free",
    blurb: "Progress toward free shipping, a discount and a free gift.",
    bullets: [
      "A progress bar toward free shipping, a discount and a free gift",
      "Spend tiers that create and maintain their own Shopify discounts",
      "Thresholds, wording and styling set in the app",
    ],
    docsUrl: `${DOCS}/cro/free-shipping-bar.html`,
    shot: {
      file: "free-shipping-bar-settings.webp",
      alt: "The Free shipping bar settings screen in the Uddom app.",
      width: 1600,
      height: 1893,
      caption: "The Free shipping bar settings in the Uddom app.",
      ready: true,
    },
    shotFront: {
      file: "free-shipping-bar-storefront.webp",
      alt: "A free shipping progress bar shown on a storefront.",
      width: 534,
      height: 469,
      caption: "The bar as a shopper sees it.",
      label: "On the storefront",
      ready: true,
    },
  },
  {
    key: "exit-intent-offer",
    title: "Exit-intent offer",
    category: "cart-recovery",
    plan: "Grow",
    blurb: "Catch the shopper who is about to leave, with the right offer.",
    bullets: [
      "Detects exit intent and presents your offer before they go",
      "Your own message and incentive",
      "Renders through the theme app embed",
    ],
    docsUrl: `${DOCS}/cro/exit-intent-offer.html`,
    shot: {
      file: "exit-intent-offer-settings.webp",
      alt: "The Exit-intent offer settings screen in the Uddom app.",
      width: 676,
      height: 869,
      caption: "The Exit-intent offer settings in the Uddom app.",
      ready: true,
    },
    shotFront: {
      file: "exit-intent-offer-storefront.webp",
      alt: "An exit-intent offer shown on a storefront.",
      width: 835,
      height: 635,
      caption: "The offer as a shopper sees it before leaving.",
      label: "On the storefront",
      ready: true,
    },
  },
  {
    key: "abandoned-checkout-recovery",
    title: "Abandoned Checkout Recovery",
    category: "cart-recovery",
    plan: "Convert",
    blurb: "Recover unfinished checkouts with timely follow-up messages.",
    bullets: [
      "Detects abandoned checkouts on your own schedule",
      "Sends your chosen template after a delay you set",
      "Automatic or manual sending over a real SMTP connection",
    ],
    docsUrl: `${DOCS}/email-marketing/abandoned-checkout-recovery.html`,
    shot: {
      file: "abandoned-checkout-recovery.webp",
      alt: "The Abandoned Checkout Recovery settings in the Uddom app.",
      width: 1600,
      height: 2280,
      caption: "The Abandoned Checkout Recovery settings in the Uddom app.",
      ready: true,
    },
  },
  {
    key: "cart-drawer-cross-sell",
    title: "Cart drawer cross-sell",
    category: "aov",
    plan: "Grow",
    blurb: "Suggest one more relevant product inside the cart drawer.",
    bullets: [
      "A relevant product suggestion inside the cart drawer",
      "Choose the products yourself or use the theme's recommendations",
      "Uses real variant prices from your store",
    ],
    docsUrl: `${DOCS}/cro/cart-drawer-cross-sell.html`,
    shot: {
      file: "cart-drawer-cross-sell-settings.webp",
      alt: "The Cart drawer cross-sell settings screen in the Uddom app.",
      width: 658,
      height: 860,
      caption: "The Cart drawer cross-sell settings in the Uddom app.",
      ready: true,
    },
    shotFront: {
      file: "cart-drawer-cross-sell-storefront.webp",
      alt: "A cross-sell suggestion inside a storefront cart drawer.",
      width: 515,
      height: 943,
      caption: "The suggestion inside the cart drawer.",
      label: "On the storefront",
      ready: true,
    },
  },
  {
    key: "volume-bundle-offers",
    title: "Volume & Bundle Offers",
    category: "aov",
    plan: "Convert",
    blurb: "Quantity breaks, bundles, Mix & Match, free gifts and more.",
    bullets: [
      "Quantity breaks, bundles, Mix & Match, spend-and-reward and free gifts",
      "Discounts applied automatically at checkout by a Shopify Function",
      "Targets the products you choose, or a whole collection",
    ],
    docsUrl: `${DOCS}/cro/volume-bundle-offers.html`,
    shot: {
      file: "offer-builder.webp",
      alt: "Building an offer in the Uddom offer builder.",
      width: 1600,
      height: 1500,
      caption: "Building an offer in the Uddom offer builder.",
      ready: true,
    },
    shotFront: {
      file: "volume-bundle-offers.webp",
      alt: "The list of offers in the Uddom app.",
      width: 1438,
      height: 674,
      caption: "Your offers, with their status and schedule.",
      label: "Your offers",
      ready: true,
    },
  },
  {
    key: "post-purchase-upsell",
    title: "Post-purchase upsell",
    category: "aov",
    plan: "Convert",
    blurb: "Offer one more item right after payment, in a single click.",
    bullets: [
      "A one-click offer on the order confirmation page",
      "Shown after payment, so it never interrupts checkout",
      "Needs the post-purchase step enabled in your store's checkout settings",
    ],
    docsUrl: `${DOCS}/cro/post-purchase-upsell.html`,
    shot: {
      file: "post-purchase-upsell-settings.webp",
      alt: "The Post-purchase upsell settings screen in the Uddom app.",
      width: 672,
      height: 858,
      caption: "The Post-purchase upsell settings in the Uddom app.",
      ready: true,
    },
    shotFront: {
      file: "post-purchase-upsell-storefront.webp",
      alt: "A post-purchase upsell offer shown after checkout.",
      width: 1328,
      height: 907,
      caption: "The offer as a shopper sees it after payment.",
      label: "After payment",
      ready: true,
    },
  },
  {
    key: "trust-badge-strip",
    title: "Trust badge strip",
    category: "trust",
    plan: "Free",
    blurb: "Reassure buyers with your own badges and wording.",
    bullets: [
      "A strip of trust badges under the buy button",
      "Your own icons and wording",
      "Size, spacing and layout set in the app",
    ],
    docsUrl: `${DOCS}/cro/trust-badge-strip.html`,
    shot: {
      file: "trust-badge-strip-settings.webp",
      alt: "The Trust badge strip settings screen in the Uddom app.",
      width: 659,
      height: 761,
      caption: "The Trust badge strip settings in the Uddom app.",
      ready: true,
    },
    shotFront: {
      file: "trust-badge-strip-storefront.webp",
      alt: "A trust badge strip shown on a storefront product page.",
      width: 755,
      height: 556,
      caption: "The badge strip as a shopper sees it.",
      label: "On the storefront",
      ready: true,
    },
  },
  {
    key: "guarantee-banner",
    title: "Guarantee banner",
    category: "trust",
    plan: "Free",
    blurb: "State your return policy plainly, where it matters.",
    bullets: [
      "A short guarantee statement on the product page",
      "Your own wording and colours",
      "Placement set in the app",
    ],
    docsUrl: `${DOCS}/cro/guarantee-banner.html`,
    shot: {
      file: "guarantee-banner-settings.webp",
      alt: "The Guarantee banner settings screen in the Uddom app.",
      width: 686,
      height: 694,
      caption: "The Guarantee banner settings in the Uddom app.",
      ready: true,
    },
    shotFront: {
      file: "guarantee-banner-storefront.webp",
      alt: "A guarantee banner shown on a storefront product page.",
      width: 881,
      height: 696,
      caption: "The banner as a shopper sees it.",
      label: "On the storefront",
      ready: true,
    },
  },
  {
    key: "ab-testing",
    title: "A/B testing",
    category: "trust",
    plan: "Scale",
    blurb: "Split a module between variants and read how each one performed.",
    bullets: [
      "Deterministic, visitor-level assignment between variants",
      "Traffic weights you set",
      "Reports each variant's results — it describes them, it never picks a winner",
    ],
    docsUrl: `${DOCS}/cro/ab-testing.html`,
    shot: {
      file: "ab-testing-results.webp",
      alt: "A/B testing results in the Uddom app.",
      width: 1324,
      height: 736,
      caption: "How each variant performed, side by side.",
      ready: true,
    },
    shotFront: {
      file: "ab-testing-details.webp",
      alt: "The detail view of an A/B test in the Uddom app.",
      width: 1319,
      height: 654,
      caption: "The detail view of a single experiment.",
      label: "The experiment detail",
      ready: true,
    },
  },
];

/** Look up one module by its route slug. */
export function getModule(key: string): UddomModule | undefined {
  return modules.find((module) => module.key === key);
}

/** The modules in a category, in catalogue order. */
export function modulesInCategory(id: ModuleCategoryId): UddomModule[] {
  return modules.filter((module) => module.category === id);
}

/** The other modules in the same category, for the "related" row. */
export function relatedModules(module: UddomModule): UddomModule[] {
  return modulesInCategory(module.category).filter((m) => m.key !== module.key);
}
