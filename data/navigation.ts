/** Navigation: top bar, the Platform dropdown, and footer columns. */

export type NavLink = { label: string; href: string };
export type PlatformItem = {
  label: string;
  href: string;
  description: string;
};

export const primaryNav: NavLink[] = [
  { label: "Features", href: "#cro" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

/** The "Platform" dropdown. Anchors only — every target exists on the page. */
export const platformMenu: PlatformItem[] = [
  { label: "CRO modules", href: "#cro", description: "Urgency, proof, trust and cart tools." },
  { label: "Offers & discounts", href: "#offers", description: "Volume breaks, bundles and free gifts." },
  { label: "Analytics", href: "#analytics", description: "See what actually converts." },
  { label: "A/B testing", href: "#ab-testing", description: "Test experiences, read the results." },
  { label: "Email marketing", href: "#email", description: "Lists, templates and recovery." },
  { label: "Subscriptions", href: "#subscriptions", description: "Selling plans and purchase options." },
];

export const footerColumns: {
  title: string;
  links: NavLink[];
  /** Items with no live destination yet are rendered as non-links. */
  unavailable?: { label: string; note: string }[];
}[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#cro" },
      { label: "Offers", href: "#offers" },
      { label: "Analytics", href: "#analytics" },
      { label: "A/B Testing", href: "#ab-testing" },
      { label: "Email", href: "#email" },
      { label: "Subscriptions", href: "#subscriptions" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "Resources",
    links: [{ label: "FAQ", href: "#faq" }],
    unavailable: [
      { label: "Documentation", note: "soon" },
      { label: "Developer docs", note: "soon" },
    ],
  },
  {
    title: "Company",
    links: [],
    unavailable: [
      { label: "About", note: "soon" },
      { label: "Contact", note: "soon" },
      { label: "Privacy", note: "soon" },
      { label: "Terms", note: "soon" },
    ],
  },
];
