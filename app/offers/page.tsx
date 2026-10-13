import type { Metadata } from "next";
import Link from "next/link";

import Footer from "@/components/sections/Footer";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Shot from "@/components/ui/Shot";
import { offerModels, offerStatuses, productSources, rewardTypes } from "@/data/offers";
import { resolveInstallHref, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Offers & discounts — Uddom",
  description:
    "Build automatic discounts in Uddom: quantity breaks, bundles, Mix & Match, spend & reward, free gifts and subscription offers — applied at checkout by Shopify.",
};

/**
 * The offers page. Every model, reward and product source below is one the app's
 * offer builder can actually create.
 */
export default function OffersPage() {
  const installHref = resolveInstallHref(site.installUrl, site.installFallbackAnchor);

  return (
    <div id="top">
      <PageHero
        eyebrow="Offers & discounts"
        title="Make the right offer at the right moment."
        lead="Uddom builds automatic discounts that apply at checkout — volume breaks, bundles, Mix & Match, spend & reward and free gifts — so you never depend on the shopper finding a code."
        crumbs={[{ label: "Home", href: "/" }, { label: "Offers" }]}
        meta={
          <p className="pageHero__count">
            {offerModels.length} offer models · {rewardTypes.length} reward types ·{" "}
            {productSources.length} ways to choose products
          </p>
        }
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Offer models"
            title="Seven ways to structure a discount."
            lead="Pick the model that matches the behaviour you want, then set the tiers, products and reward inside the app."
            center
          />
          <div className="grid3">
            {offerModels.map((model, i) => (
              <article
                className="card reveal"
                data-reveal
                data-delay={i < 4 ? String(i + 1) : undefined}
                key={model.key}
              >
                <span className="card__icon" aria-hidden="true">
                  {model.icon}
                </span>
                <h3 className="card__title">{model.label}</h3>
                <p className="card__text">{model.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="featureSplit">
            <div className="featureSplit__body reveal" data-reveal>
              <h2 className="h3">Start from a model, then shape it.</h2>
              <p className="card__text" style={{ marginTop: 16 }}>
                Choosing the model is the first step in the offer builder. Everything after it —
                the products, the rules and the reward — hangs off that choice, and you can
                leave an offer as a draft until it is ready.
              </p>
            </div>
            <div className="featureSplit__shot reveal" data-reveal data-delay="1">
              <Shot
                shot={{
                  file: "offer-type-selector.webp",
                  alt: "The offer type selector in the Uddom offer builder, listing every offer model.",
                  width: 1074,
                  height: 923,
                  caption: "The offer builder: pick a model, then set the products, rules and reward.",
                  ready: true,
                }}
                sizes="(max-width: 920px) 100vw, 640px"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt section--tight">
        <div className="container">
          <SectionHeading
            eyebrow="Rewards"
            title="Attach the reward that fits."
            lead="Each offer takes one reward type. The same five are available whichever model you start from."
          />
          <div className="grid3">
            {rewardTypes.map((reward) => (
              <article className="card reveal" data-reveal key={reward.label}>
                <h3 className="card__title">{reward.label}</h3>
                <p className="card__text">{reward.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="featureSplit">
            <div className="featureSplit__body reveal" data-reveal>
              <h2 className="h3">Choose what the offer applies to</h2>
              <ul className="featureBullets">
                {productSources.map((source) => (
                  <li className="featureBullets__item" key={source.label}>
                    <strong>{source.label}</strong> — {source.description}
                  </li>
                ))}
              </ul>
              <p className="featureSplit__note">
                An offer moves through {offerStatuses.join(", ").toLowerCase()} states, so you
                can build it as a draft and schedule it to start and end when you want.
              </p>
            </div>

            <div className="featureSplit__body reveal" data-reveal data-delay="1">
              <h2 className="h3">Applied at checkout, not on the page</h2>
              <p className="card__text" style={{ marginTop: 16 }}>
                The discount is applied by a Shopify Function at checkout, so the shopper gets
                the right price on the order itself — whatever theme or cart they use. Uddom
                creates and keeps the discount in step with the offer you configured.
              </p>
              <p className="featureSplit__docs">
                The full builder walkthrough is in the{" "}
                <a
                  href="https://docs.uddomcro.com/offers/index.html"
                  rel="noreferrer"
                >
                  user documentation
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="pageCta">
            <div>
              <h2 className="h3">Build your first offer.</h2>
              <p className="pageCta__text">
                Offers are part of the Convert plan. Build one in the app and it starts
                applying at checkout.
              </p>
            </div>
            <div className="pageCta__actions">
              <a className="btn btn--primary" href={installHref}>
                {site.ctas.primary}
              </a>
              <Link className="btn btn--ghost" href="/features/volume-bundle-offers">
                Volume &amp; Bundle Offers
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
