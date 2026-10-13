/**
 * Navigation: top bar, the Platform dropdown, and footer columns.
 *
 * The site is no longer one page, so every link is written as an absolute path
 * (`/#section`) rather than a bare fragment. A bare `#offers` would be a dead
 * link on a sub-page such as /features; `/#offers` scrolls the home page from
 * anywhere. The only route link is the features hub itself.
 */

export type NavLink = { label: string; href: string };
export type PlatformItem = {
  label: string;
  href: string;
  description: string;
};

export const primaryNav: NavLink[] = [
  { label: "Features", href: "/features" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
];

/** The "Platform" dropdown. Links to a page where one exists, home section otherwise. */
export const platformMenu: PlatformItem[] = [
  { label: "All features", href: "/features", description: "Every CRO module, in one index." },
  { label: "CRO modules", href: "/#cro", description: "Urgency, proof, trust and cart tools." },
  { label: "Offers & discounts", href: "/offers", description: "Volume breaks, bundles and free gifts." },
  { label: "Analytics", href: "/analytics", description: "See what actually converts." },
  { label: "A/B testing", href: "/#ab-testing", description: "Test experiences, read the results." },
  { label: "Email marketing", href: "/email-marketing", description: "Lists, templates and recovery." },
  { label: "Subscriptions", href: "/subscriptions", description: "Selling plans and purchase options." },
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
      { label: "Features", href: "/features" },
      { label: "Offers", href: "/offers" },
      { label: "Analytics", href: "/analytics" },
      { label: "A/B Testing", href: "/#ab-testing" },
      { label: "Email", href: "/email-marketing" },
      { label: "Subscriptions", href: "/subscriptions" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "FAQ", href: "/faq" },
      /* The user documentation is a live, public site. */
      { label: "Documentation", href: "https://docs.uddomcro.com/" },
    ],
    unavailable: [
      /* Internal and deliberately not indexed, so it is not linked publicly. */
      { label: "Developer docs", note: "internal" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      /* The live privacy policy lives on the documentation site. */
      { label: "Privacy", href: "https://docs.uddomcro.com/privacy/" },
      { label: "Terms", href: "/terms" },
    ],
  },
];
