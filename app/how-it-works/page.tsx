import type { Metadata } from "next";
import Link from "next/link";

import Footer from "@/components/sections/Footer";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Shot from "@/components/ui/Shot";
import { howItWorks, loopSteps } from "@/data/features";
import { resolveInstallHref, site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/how-it-works",
  title: "How it works — Uddom",
  description:
    "From install to optimization in four steps: install Uddom, switch on the modules you want, configure them in the app, then measure and improve what converts.",
});

export default function HowItWorksPage() {
  const installHref = resolveInstallHref(site.installUrl, site.installFallbackAnchor);

  return (
    <div id="top">
      <PageHero
        eyebrow="How it works"
        title="From install to optimization."
        lead="Uddom is built to be understandable on day one. Install it, enable the app embed once, and configure everything from the dashboard — no code."
        crumbs={[{ label: "Home", href: "/" }, { label: "How it works" }]}
        meta={<p className="pageHero__count">Four steps to your first module</p>}
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Setup"
            title="Four steps, no code."
            center
          />
          <ol className="steps">
            {howItWorks.map((step, i) => (
              <li className="step reveal" key={step.title} data-reveal data-delay={String(i + 1)}>
                <span className="step__num" aria-hidden="true">
                  {i + 1}
                </span>
                <h3 className="card__title">{step.title}</h3>
                <p className="card__text">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--alt section--tight">
        <div className="container">
          <SectionHeading
            eyebrow="The loop"
            title="Launch. Measure. Test. Improve."
            lead="Once a module is running, the same loop decides what stays: read the numbers, test a change, and keep what converts."
          />
          <div className="grid4">
            {loopSteps.map((step, i) => (
              <article className="card reveal" data-reveal data-delay={String(i + 1)} key={step.name}>
                <span className="card__icon" aria-hidden="true">
                  {i + 1}
                </span>
                <h3 className="card__title">{step.name}</h3>
                <p className="card__text">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="featureSplit">
            <div className="featureSplit__body reveal" data-reveal>
              <h2 className="h3">Enable the app embed once.</h2>
              <p className="card__text" style={{ marginTop: 16 }}>
                Storefront features reach your theme through the Uddom app embed, which you
                switch on a single time in the theme editor. After that, each module you turn on
                in the app appears on the storefront without another theme change.
              </p>
              <p className="featureSplit__docs">
                Step-by-step in the{" "}
                <a href="https://docs.uddomcro.com/getting-started/app-embed.html" rel="noreferrer">
                  app embed guide
                </a>
                .
              </p>
            </div>
            <div className="featureSplit__shot reveal" data-reveal data-delay="1">
              <Shot
                shot={{
                  file: "app-embed.webp",
                  alt: "The Uddom app embed enabled in the Shopify theme editor.",
                  width: 812,
                  height: 671,
                  caption: "The Uddom app embed, switched on in the theme editor.",
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
              <h2 className="h3">Start the loop.</h2>
              <p className="pageCta__text">
                Install Uddom, enable the app embed, and switch on your first free module.
              </p>
            </div>
            <div className="pageCta__actions">
              <a className="btn btn--primary" href={installHref}>
                {site.ctas.primary}
              </a>
              <Link className="btn btn--ghost" href="/features">
                Browse features
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
