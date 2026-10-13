import type { Metadata } from "next";
import Link from "next/link";

import Footer from "@/components/sections/Footer";
import PricingSection from "@/components/sections/PricingSection";
import PageHero from "@/components/ui/PageHero";
import Shot from "@/components/ui/Shot";
import { resolveInstallHref, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Pricing — Uddom",
  description:
    "Uddom plans: start free with trust and scarcity tools, then add offers, analytics, experimentation and email as your store grows. Monthly billing.",
};

/**
 * The pricing page. The plan cards themselves are the home page's PricingSection,
 * rendered unchanged, so there is exactly one place where pricing is written.
 */
export default function PricingPage() {
  const installHref = resolveInstallHref(site.installUrl, site.installFallbackAnchor);

  return (
    <div id="top">
      <PageHero
        eyebrow="Pricing"
        title="A plan for every stage of growth."
        lead="Every module carries a plan label, and each plan includes everything below it. Start on Free and move up when you need more."
        crumbs={[{ label: "Home", href: "/" }, { label: "Pricing" }]}
        meta={<p className="pageHero__count">Free · Grow · Convert · Scale — monthly</p>}
      />

      <PricingSection />

      <section className="section section--tight">
        <div className="container">
          <div className="reveal" data-reveal>
            <Shot
              className="shotWide"
              shot={{
                file: "plans-and-billing.webp",
                alt: "The Plans & billing page in the Uddom app, showing the current plan and the list of plans.",
                width: 1386,
                height: 762,
                caption:
                  "Plans & billing inside the app: the current plan and what each plan carries.",
                ready: true,
              }}
              sizes="(max-width: 920px) 100vw, 900px"
            />
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="pageCta">
            <div>
              <h2 className="h3">See which module sits on which plan.</h2>
              <p className="pageCta__text">
                Every module page shows the plan it belongs to, and the features index groups
                them all in one place.
              </p>
            </div>
            <div className="pageCta__actions">
              <Link className="btn btn--ghost" href="/features">
                All features
              </Link>
              <a className="btn btn--primary" href={installHref}>
                {site.ctas.primary}
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
