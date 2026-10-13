import type { Metadata } from "next";
import Link from "next/link";

import Footer from "@/components/sections/Footer";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Shot from "@/components/ui/Shot";
import { compareFragmented, compareUddom, ecosystemNodes, themeFrames } from "@/data/features";
import { resolveInstallHref, site } from "@/data/site";

export const metadata: Metadata = {
  title: "About — Uddom",
  description:
    "Why Uddom exists: one Shopify growth platform for CRO, offers, upsells, analytics, A/B testing, email and subscriptions — theme-aware, no code, and honest about what it measures.",
};

const principles: { title: string; text: string }[] = [
  {
    title: "One dashboard, fewer tools",
    text: "CRO, offers, upsells, analytics, A/B testing, email and subscriptions configured in one place, instead of one tab per app.",
  },
  {
    title: "Theme-aware and fail-safe",
    text: "Built on the app-embed model rather than Dawn-only selectors. If a host element is missing, the module renders nothing instead of breaking the page.",
  },
  {
    title: "Honest measurement",
    text: "A metric with too little data reads as not measured, never as a misleading zero. Attributed revenue is reported net of refunds.",
  },
  {
    title: "Native to Shopify",
    text: "Discounts run as Shopify Functions at checkout and plans and billing belong to Shopify — Uddom never holds a card or charges a customer.",
  },
  {
    title: "No code required",
    text: "Install the app, enable the embed once, and everything after that is a toggle and a field in the admin.",
  },
  {
    title: "Built to be understood",
    text: "Every module is switched on individually, with its own settings and its own plan label, so nothing is a black box.",
  },
];

export default function AboutPage() {
  const installHref = resolveInstallHref(site.installUrl, site.installFallbackAnchor);

  return (
    <div id="top">
      <PageHero
        eyebrow="About"
        title="One platform, fewer tools."
        lead="Uddom exists because growing a Shopify store should not mean stitching together five apps that never talk to each other."
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        meta={<p className="pageHero__count">{ecosystemNodes.length} growth systems, under one roof</p>}
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Why we built Uddom"
            title="The sprawl problem."
            lead="Merchants usually end up with a separate app for conversion, upsells, analytics, email and subscriptions. Each one has its own dashboard, its own data and its own bill — and none of them can see what the others did."
          />
          <div className="grid2">
            <article className="card reveal" data-reveal>
              <h3 className="card__title">Fragmented today</h3>
              <ul className="featureBullets" style={{ marginTop: 16 }}>
                {compareFragmented.map((item) => (
                  <li className="featureBullets__item" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
            <article className="card reveal" data-reveal data-delay="1">
              <h3 className="card__title">With Uddom</h3>
              <ul className="featureBullets" style={{ marginTop: 16 }}>
                {compareUddom.map((item) => (
                  <li className="featureBullets__item" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--alt section--tight">
        <div className="container">
          <SectionHeading
            eyebrow="What we stand for"
            title="Principles, not slogans."
            lead="These are the constraints Uddom is built to, and the reasons a few features behave more conservatively than you might expect."
          />
          <div className="grid3">
            {principles.map((principle, i) => (
              <article
                className="card reveal"
                data-reveal
                data-delay={i < 3 ? String(i + 1) : undefined}
                key={principle.title}
              >
                <h3 className="card__title">{principle.title}</h3>
                <p className="card__text">{principle.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <SectionHeading
            eyebrow="Theme compatibility"
            title="Built for Shopify themes. Not just one."
          />
          <div className="grid4">
            {themeFrames.map((frame) => (
              <article className="card reveal" data-reveal key={frame.name}>
                <h3 className="card__title" style={{ fontSize: "0.98rem" }}>
                  {frame.name}
                </h3>
                <p className="card__text">{frame.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="featureSplit">
            <div className="featureSplit__body reveal" data-reveal>
              <h2 className="h3">Onboarding shows you the state of the store.</h2>
              <p className="card__text" style={{ marginTop: 16 }}>
                The dashboard reports what is connected and what still needs doing — the app
                embed, the modules that are live, and the health of the store&rsquo;s setup — so
                a new store is not a blank page.
              </p>
            </div>
            <div className="featureSplit__shot reveal" data-reveal data-delay="1">
              <Shot
                shot={{
                  file: "store-health.webp",
                  alt: "The store health card in the Uddom dashboard.",
                  width: 525,
                  height: 345,
                  caption: "Store health, from the dashboard.",
                  ready: true,
                }}
                sizes="(max-width: 920px) 100vw, 640px"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="pageCta">
            <div>
              <h2 className="h3">See the platform for yourself.</h2>
              <p className="pageCta__text">
                Browse every module, or start on the free plan and add what you need.
              </p>
            </div>
            <div className="pageCta__actions">
              <a className="btn btn--primary" href={installHref}>
                {site.ctas.primary}
              </a>
              <Link className="btn btn--ghost" href="/features">
                All features
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
