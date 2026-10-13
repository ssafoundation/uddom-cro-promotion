import type { Metadata } from "next";
import Link from "next/link";

import Footer from "@/components/sections/Footer";
import Illustration from "@/components/ui/Illustration";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Shot from "@/components/ui/Shot";
import { subscriptionPoints } from "@/data/features";
import { resolveInstallHref, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Subscriptions — Uddom",
  description:
    "Create selling plans and subscription purchase options in the Uddom offer builder, and review the contracts Shopify creates from them.",
};

export default function SubscriptionsPage() {
  const installHref = resolveInstallHref(site.installUrl, site.installFallbackAnchor);

  return (
    <div id="top">
      <PageHero
        eyebrow="Subscriptions"
        title="Turn one purchase into a relationship."
        lead="Create subscription options in the offer builder so customers can subscribe instead of buying once — and see the contracts Shopify creates from them."
        crumbs={[{ label: "Home", href: "/" }, { label: "Subscriptions" }]}
        meta={<p className="pageHero__count">Selling plans · purchase options · contract view</p>}
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="What it does"
            title="Recurring options, built where you build offers."
            lead="A subscription is an offer with a recurring cadence. Uddom builds the option and hands the billing to Shopify."
            center
          />
          <div className="grid3">
            {subscriptionPoints.map((point) => (
              <article className="card reveal" data-reveal key={point}>
                <h3 className="card__title" style={{ fontSize: "0.98rem" }}>
                  {point}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt section--tight">
        <div className="container">
          <div className="featureSplit">
            <div className="featureSplit__body reveal" data-reveal>
              <h2 className="h3">Shopify owns the billing</h2>
              <ul className="featureBullets">
                <li className="featureBullets__item">
                  Uddom creates the selling plan and the purchase option; Shopify charges the
                  customer on each cycle.
                </li>
                <li className="featureBullets__item">
                  The recurring price is set in the offer, so a subscriber discount lives with
                  the offer it belongs to.
                </li>
                <li className="featureBullets__item">
                  The contracts Shopify creates are shown read-only, so you can see who is
                  subscribed without Uddom ever holding a card.
                </li>
              </ul>
            </div>
            <div className="featureSplit__body reveal" data-reveal data-delay="1">
              <h2 className="h3">Built into the offer builder</h2>
              <p className="card__text" style={{ marginTop: 16 }}>
                Subscription is one of the offer models, so the products, targeting and reward
                work the same way as any other offer — you simply add a recurring cadence.
              </p>
              <p className="featureSplit__docs">
                Create your first option with the{" "}
                <a href="https://docs.uddomcro.com/offers/offer-types.html" rel="noreferrer">
                  offer builder
                </a>{" "}
                guide.
              </p>
            </div>
          </div>

          <div className="reveal" data-reveal style={{ marginTop: 40 }}>
            <Illustration
              src="/illustrations/subscriptions.svg"
              alt="An illustration of a recurring invoice settling on a regular cycle."
              width={960}
              height={743}
              caption="One plan, charged on a cycle — Shopify handles the billing."
              maxWidth={400}
            />
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <SectionHeading
            eyebrow="In the app"
            title="Create the option, then read the contracts."
            center
          />
          <div className="grid2">
            <div className="reveal" data-reveal>
              <Shot
                shot={{
                  file: "subscription-settings.webp",
                  alt: "Subscription settings in the Uddom app.",
                  width: 869,
                  height: 877,
                  caption: "Creating a subscription option in the app.",
                  ready: true,
                }}
                sizes="(max-width: 920px) 100vw, 620px"
              />
            </div>
            <div className="reveal" data-reveal data-delay="1">
              <Shot
                shot={{
                  file: "subscription-contract-detail.webp",
                  alt: "A subscription contract in the Uddom app.",
                  width: 1375,
                  height: 504,
                  caption: "A contract Shopify created from your selling plan.",
                  ready: true,
                }}
                sizes="(max-width: 920px) 100vw, 620px"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="pageCta">
            <div>
              <h2 className="h3">Add a subscription option.</h2>
              <p className="pageCta__text">
                Subscriptions are built from the offers area. Configure a plan and it becomes a
                purchase option on the products you choose.
              </p>
            </div>
            <div className="pageCta__actions">
              <a className="btn btn--primary" href={installHref}>
                {site.ctas.primary}
              </a>
              <Link className="btn btn--ghost" href="/offers">
                Offers &amp; discounts
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
