import type { Metadata } from "next";
import Link from "next/link";

import Footer from "@/components/sections/Footer";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { resolveInstallHref, site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/contact",
  title: "Contact — Uddom",
  description:
    "Get help with Uddom: browse the user documentation, read the FAQ, or email support.",
});

/**
 * Support routes. `SUPPORT_EMAIL` is the address shown to merchants — update it
 * here (and make sure the mailbox exists) before the site goes live.
 */
const SUPPORT_EMAIL = "support@uddomcro.com";

export default function ContactPage() {
  const installHref = resolveInstallHref(site.installUrl, site.installFallbackAnchor);

  return (
    <div id="top">
      <PageHero
        eyebrow="Contact"
        title="Talk to us."
        lead="Most questions are answered in the documentation. If yours is not, support is one email away."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        meta={<p className="pageHero__count">Average reply within one business day</p>}
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Support"
            title="Three ways to get an answer."
            center
          />
          <div className="grid3">
            <article className="card reveal" data-reveal>
              <h3 className="card__title">Read the docs</h3>
              <p className="card__text">
                Setup, settings and troubleshooting for every module, offers, email and
                subscriptions.
              </p>
              <p className="featureSplit__docs" style={{ marginTop: 14 }}>
                <a href="https://docs.uddomcro.com/" rel="noreferrer">
                  docs.uddomcro.com →
                </a>
              </p>
            </article>

            <article className="card reveal" data-reveal data-delay="1">
              <h3 className="card__title">Email support</h3>
              <p className="card__text">
                Send us the store domain and a short description, and we will pick it up from
                there.
              </p>
              <p className="featureSplit__docs" style={{ marginTop: 14 }}>
                <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL} →</a>
              </p>
            </article>

            <article className="card reveal" data-reveal data-delay="2">
              <h3 className="card__title">Quick answers</h3>
              <p className="card__text">
                The most common questions — themes, plans, analytics and email — answered
                plainly.
              </p>
              <p className="featureSplit__docs" style={{ marginTop: 14 }}>
                <Link href="/faq">Read the FAQ →</Link>
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="pageCta">
            <div>
              <h2 className="h3">Already installed?</h2>
              <p className="pageCta__text">
                You can also reach support from inside the app, so we can see the store the
                question is about.
              </p>
            </div>
            <div className="pageCta__actions">
              <a className="btn btn--primary" href={installHref}>
                {site.ctas.primary}
              </a>
              <a className="btn btn--ghost" href={`mailto:${SUPPORT_EMAIL}`}>
                Email us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
