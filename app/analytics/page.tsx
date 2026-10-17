import type { Metadata } from "next";
import Link from "next/link";

import Footer from "@/components/sections/Footer";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Shot from "@/components/ui/Shot";
import { resolveInstallHref, site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/analytics",
  title: "Analytics & Insights — Uddom",
  description:
    "See what actually converts: impressions, clicks, add to cart, purchases and attributed revenue per module — with coverage disclosed honestly and revenue reported net of refunds.",
});

/** The numbers Uddom records per module. No figures are shown here — only what each one means. */
const metrics: { name: string; text: string }[] = [
  { name: "Impressions", text: "How often a module was shown to a shopper." },
  { name: "Clicks", text: "How often a shopper interacted with a module." },
  { name: "Add to cart", text: "Add-to-cart events attributed to the module." },
  { name: "CTR", text: "Clicks divided by impressions." },
  { name: "Purchases", text: "Orders attributed to a module." },
  { name: "Conversion rate", text: "Purchases measured against impressions, with coverage disclosed." },
  { name: "Attributed revenue", text: "Order value attributed to a module, reported net of refunds and cancellations." },
];

const insightsAreas: { name: string; text: string; soon?: boolean }[] = [
  { name: "Overview", text: "The headline numbers for the whole store over the period you pick." },
  { name: "Module Performance", text: "A per-module table of what each module did, in the same period." },
  { name: "Experiments", text: "How each A/B test's variants performed, reported side by side." },
  { name: "AI Insights", text: "Plain-language summaries written from your own stored numbers.", soon: true },
];

export default function AnalyticsPage() {
  const installHref = resolveInstallHref(site.installUrl, site.installFallbackAnchor);

  return (
    <div id="top">
      <PageHero
        eyebrow="Analytics"
        title="Don't guess. Know what converts."
        lead="Uddom records what every module did on your storefront and reports it per module. Where there is not enough data to be honest, it says so instead of showing a zero."
        crumbs={[{ label: "Home", href: "/" }, { label: "Analytics" }]}
        meta={<p className="pageHero__count">7 measured numbers · reported per module</p>}
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="What is measured"
            title="Seven numbers, per module."
            lead="Each metric is measured on the storefront and attributed back to the module that produced it. Nothing is inferred from Shopify reports."
            center
          />
          <div className="grid3">
            {metrics.map((metric) => (
              <article className="card reveal" data-reveal key={metric.name}>
                <h3 className="card__title">{metric.name}</h3>
                <p className="card__text">{metric.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt section--tight">
        <div className="container">
          <SectionHeading
            eyebrow="Read honestly"
            title="Coverage is part of the answer."
            lead="A metric with too little data is not a zero — Uddom reports the coverage alongside the number so a small sample is never read as a real result."
          />
          <div className="grid2">
            <article className="card reveal" data-reveal>
              <h3 className="card__title">Attributed revenue is net</h3>
              <p className="card__text">
                Revenue attributed to a module is reported after refunds and cancellations, so
                it reflects money you kept.
              </p>
            </article>
            <article className="card reveal" data-reveal data-delay="1">
              <h3 className="card__title">Not measured, not a zero</h3>
              <p className="card__text">
                When a module has not accumulated enough traffic, the column reads “Not
                measured” rather than a misleading 0%.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <SectionHeading
            eyebrow="Insights"
            title="Four views over the same numbers."
            lead="Insights is a reporting surface built on top of the stored analytics: choose a period and read what happened."
          />
          <div className="grid2">
            {insightsAreas.map((area) => (
              <article className="card reveal" data-reveal key={area.name}>
                <div className="card__row">
                  <h3 className="card__title">{area.name}</h3>
                  {area.soon ? <span className="pill card__rowEnd">Coming soon</span> : null}
                </div>
                <p className="card__text">{area.text}</p>
              </article>
            ))}
          </div>
          <div className="reveal" data-reveal style={{ marginTop: 34 }}>
            <Shot
              className="shotWide"
              shot={{
                file: "insights-module-performance.webp",
                alt: "The Module Performance table in Uddom Insights, one row per module.",
                width: 962,
                height: 836,
                caption:
                  "Module Performance: what each module did, in the period you chose.",
                ready: true,
              }}
              sizes="(max-width: 920px) 100vw, 900px"
            />
          </div>

          <p className="featureSplit__docs" style={{ marginTop: 22 }}>
            More on the reporting views in the{" "}
            <a href="https://docs.uddomcro.com/analytics/index.html" rel="noreferrer">
              user documentation
            </a>
            .
          </p>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="pageCta">
            <div>
              <h2 className="h3">Turn the lights on first.</h2>
              <p className="pageCta__text">
                Analytics only has something to report once a module is running on your
                storefront. Start with a free module and watch the numbers come in.
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
