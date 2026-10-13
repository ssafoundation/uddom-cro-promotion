import type { Metadata } from "next";
import Link from "next/link";

import FaqList from "@/components/sections/FaqList";
import Footer from "@/components/sections/Footer";
import PageHero from "@/components/ui/PageHero";
import { resolveInstallHref, site } from "@/data/site";

export const metadata: Metadata = {
  title: "FAQ — Uddom",
  description:
    "Answers about Uddom: themes, CRO modules, bundles and free gifts, A/B testing, analytics, abandoned checkout recovery, email sending, subscriptions and plans.",
};

export default function FaqPage() {
  const installHref = resolveInstallHref(site.installUrl, site.installFallbackAnchor);

  return (
    <div id="top">
      <PageHero
        eyebrow="FAQ"
        title="Questions, answered."
        lead="Short answers about what Uddom does and how it fits a Shopify store. If something is still unclear, the user documentation goes deeper."
        crumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
        meta={
          <p className="pageHero__docsLink">
            <a href="https://docs.uddomcro.com/" rel="noreferrer">
              Browse the user documentation →
            </a>
          </p>
        }
      />

      <section className="section">
        <div className="container">
          <FaqList />
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="pageCta">
            <div>
              <h2 className="h3">Still deciding?</h2>
              <p className="pageCta__text">
                Start on the free plan and add modules as you need them — nothing to configure
                before you install.
              </p>
            </div>
            <div className="pageCta__actions">
              <a className="btn btn--primary" href={installHref}>
                {site.ctas.primary}
              </a>
              <Link className="btn btn--ghost" href="/pricing">
                See pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
