import type { Metadata } from "next";
import Link from "next/link";

import FeatureCard from "@/components/sections/FeatureCard";
import Footer from "@/components/sections/Footer";
import SymptomGuide from "@/components/sections/SymptomGuide";
import PageHero from "@/components/ui/PageHero";
import Shot from "@/components/ui/Shot";
import { moduleCategories, modules, modulesInCategory } from "@/data/modules";
import { resolveInstallHref, site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/features",
  title: "Features — every Uddom CRO module",
  description:
    "Every conversion module in Uddom, grouped by what it fixes: urgency, social proof, cart recovery, average order value and trust. Each entry shows the plan it belongs to.",
});

/**
 * The features hub. Groups the shipped CRO modules by the category the Uddom app
 * itself uses, so a visitor can find the tool for the problem they have.
 */
export default function FeaturesIndex() {
  const installHref = resolveInstallHref(site.installUrl, site.installFallbackAnchor);

  return (
    <div id="top">
      <PageHero
        eyebrow="Features"
        title="Every module, in one place."
        lead="Uddom ships a set of storefront conversion modules you switch on per store. Each one belongs to a plan, and each has its own page here."
        crumbs={[{ label: "Home", href: "/" }, { label: "Features" }]}
        meta={
          <p className="pageHero__count">
            {modules.length} storefront modules · grouped by the problem they solve
          </p>
        }
      />

      <SymptomGuide />

      <section className="section">
        <div className="container">
          {moduleCategories.map((category) => {
            const list = modulesInCategory(category.id);
            if (list.length === 0) return null;

            return (
              <div className="featureGroup" key={category.id} id={category.id}>
                <div className="featureGroup__head reveal" data-reveal>
                  <h2 className="h3 featureGroup__title">{category.title}</h2>
                  <p className="featureGroup__blurb">{category.blurb}</p>
                </div>
                <div className="featureGrid">
                  {list.map((module) => (
                    <FeatureCard key={module.key} module={module} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section section--alt section--tight">
        <div className="container">
          <div className="featureSplit">
            <div className="featureSplit__body reveal" data-reveal>
              <h2 className="h3">Every module card shows its plan.</h2>
              <ul className="featureBullets">
                <li className="featureBullets__item">
                  Each module belongs to exactly one plan, and the card says which.
                </li>
                <li className="featureBullets__item">
                  Modules are switched on individually, so you only ever run what you chose.
                </li>
                <li className="featureBullets__item">
                  The plan gate is enforced by the app — this site only mirrors it.
                </li>
              </ul>
            </div>
            <div className="featureSplit__shot reveal" data-reveal data-delay="1">
              <Shot
                shot={{
                  file: "cro-modules-plan-labels.webp",
                  alt: "The CRO module grid in the Uddom app, with the plan label shown on each module card.",
                  width: 1008,
                  height: 855,
                  caption: "The CRO grid in the app: one card per module, each carrying its plan.",
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
              <h2 className="h3">Not sure which modules you need?</h2>
              <p className="pageCta__text">
                Start free with trust and scarcity tools, then add the rest as your store
                grows. Each module is switched on individually in the app.
              </p>
            </div>
            <div className="pageCta__actions">
              <a className="btn btn--primary" href={installHref}>
                {site.ctas.primary}
              </a>
              <Link className="btn btn--ghost" href="/#pricing">
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
