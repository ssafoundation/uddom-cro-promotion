/** FAQ content. Answers describe only features that exist in the current app. */

export type FaqItem = { q: string; a: string };

export const faqItems: FaqItem[] = [
  {
    q: "What is Uddom?",
    a: "Uddom is an all-in-one Shopify growth platform. It brings conversion-rate optimisation modules, offers and bundles, upsells, analytics, A/B testing, email marketing, abandoned checkout recovery and subscription selling plans together in one app.",
  },
  {
    q: "Is Uddom built for Shopify?",
    a: "Yes. Uddom is an embedded Shopify app that runs inside your Shopify admin, and it delivers its storefront features through a Shopify theme app extension.",
  },
  {
    q: "Does Uddom work with different Shopify themes?",
    a: "Uddom is designed to work across storefronts rather than depend on one theme's markup: it does not rely on Dawn-only selectors and fails safe when a host element is missing. Most features are delivered through the Uddom app embed. Some cart-focused features need a cart drawer, so they will not appear on a theme that uses a cart page instead.",
  },
  {
    q: "Do I need coding knowledge?",
    a: "No. You install the app, enable the Uddom app embed in your theme once, and configure modules, offers and email from the Uddom dashboard. No code is required for normal setup and use.",
  },
  {
    q: "What CRO features are included?",
    a: "Uddom includes Low Stock Badge, Countdown Timer, Cart Reservation Timer, Recent Sales Popup, Live Viewer Count, Free Shipping Bar, Exit-Intent Offer, Cart Drawer Cross-Sell, Trust Badge Strip, Guarantee Banner and Post-Purchase Upsell.",
  },
  {
    q: "Can I create bundles and free gifts?",
    a: "Yes. The offer builder supports bundle-style offers, including Mix & Match, and free-gift offers that discount a gift product at checkout. The free shipping bar also supports a free gift once a shopper reaches a spend threshold.",
  },
  {
    q: "Does Uddom support A/B testing?",
    a: "Yes. You can split one CRO module between variants with your own traffic weights and compare how each variant performed. Uddom reports the results descriptively — it does not declare a winner for you.",
  },
  {
    q: "Can Uddom track conversion performance?",
    a: "Yes. Uddom reports impressions, clicks, add-to-cart, purchases, conversion rate and attributed revenue, plus a per-module performance table. Where a metric has no data source for a module, Uddom shows it as not measured rather than as a misleading zero.",
  },
  {
    q: "Does Uddom support abandoned checkout recovery?",
    a: "Yes. Uddom can detect eligible abandoned checkouts and send a recovery email automatically after a delay you choose, or you can send a recovery email manually from the abandoned checkouts list. You can optionally include one of your Shopify discounts as an incentive.",
  },
  {
    q: "Can I send marketing emails?",
    a: "Yes. You can import contacts into lists, build reusable email templates, and send marketing emails to subscribed contacts. Emails go out through the SMTP sender you configure under Settings. Each send handles up to 100 recipients.",
  },
  {
    q: "Does Uddom support subscriptions?",
    a: "Yes. You create subscription selling plans and purchase options in the offer builder, and Uddom shows you the contracts Shopify creates for your store. Recurring billing and payment are handled by Shopify — Uddom does not run subscription billing.",
  },
  {
    q: "Is there a free plan?",
    a: "Yes. The Free plan includes the Trust Badge Strip, Guarantee Banner and Low Stock Badge.",
  },
  {
    q: "Can I upgrade later?",
    a: "Yes. Modules carry a plan label (Free, Grow, Convert or Scale) so you can see what belongs to each plan, and you can move to a higher plan as you grow. Plan pricing and billing are being finalised — see the pricing section for the current state.",
  },
];
