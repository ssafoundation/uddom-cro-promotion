import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import FeatureCard from "@/components/sections/FeatureCard";
import Footer from "@/components/sections/Footer";
import PageHero from "@/components/ui/PageHero";
import PlanBadge from "@/components/ui/PlanBadge";
import Shot from "@/components/ui/Shot";
import { getModule, moduleCategories, modules, relatedModules } from "@/data/modules";
import { resolveInstallHref, site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

/** Every module page is generated from the catalogue — nothing is hand-written. */
export const dynamicParams = false;

export function generateStaticParams() {
  return modules.map((module) => ({ key: module.key }));
}

type PageProps = { params: Promise<{ key: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { key } = await params;
  const module = getModule(key);

  if (!module) {
    return { title: "Feature not found — Uddom" };
  }

  return pageMetadata({
    path: `/features/${module.key}`,
    title: `${module.title} — Uddom`,
    description: module.blurb,
  });
}

export default async function ModulePage({ params }: PageProps) {
  const { key } = await params;
  const module = getModule(key);

  if (!module) {
    notFound();
  }

  const category = moduleCategories.find((entry) => entry.id === module.category);
  const related = relatedModules(module);
  const installHref = resolveInstallHref(site.installUrl, site.installFallbackAnchor);

  return (
    <div id="top">
      <PageHero
        eyebrow={category ? `${category.title} module` : "Module"}
        title={module.title}
        lead={module.blurb}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Features", href: "/features" },
          { label: module.title },
        ]}
        meta={
          <p className="pageHero__metaRow">
            <PlanBadge plan={module.plan} />
            <span className="pageHero__metaText">Included in the {module.plan} plan</span>
          </p>
        }
      />

      <section className="section">
        <div className="container">
          <div className="featureSplit">
            <div className="featureSplit__body reveal" data-reveal>
              <h2 className="h3">What it does</h2>
              <ul className="featureBullets">
                {module.bullets.map((bullet) => (
                  <li className="featureBullets__item" key={bullet}>
                    {bullet}
                  </li>
                ))}
              </ul>

              <p className="featureSplit__note">
                Configuration lives in the Uddom app: switch the module on, set it up in its
                own settings, and the storefront picks it up through the theme app embed.
              </p>

              <p className="featureSplit__docs">
                Full setup and settings are in the{" "}
                <a href={module.docsUrl} rel="noreferrer">
                  user documentation
                </a>
                .
              </p>
            </div>

            <div className="featureSplit__shot reveal" data-reveal data-delay="1">
              <Shot shot={module.shot} sizes="(max-width: 920px) 100vw, 640px" />
            </div>
          </div>
        </div>
      </section>

      {module.shotFront ? (
        <section className="section section--alt section--tight">
          <div className="container">
            <div className="featureGroup__head reveal" data-reveal>
              <h2 className="h3 featureGroup__title">
                {module.shotFront.label ?? "On the storefront"}
              </h2>
              <p className="featureGroup__blurb">
                The same module on the storefront, using the settings above.
              </p>
            </div>
            <div className="reveal" data-reveal>
              <Shot
                className="shotWide"
                shot={module.shotFront}
                sizes="(max-width: 920px) 100vw, 900px"
              />
            </div>
          </div>
        </section>
      ) : null}

      {related.length > 0 ? (
        <section className="section section--tight">
          <div className="container">
            <div className="featureGroup__head reveal" data-reveal>
              <h2 className="h3 featureGroup__title">
                More {category ? category.title.toLowerCase() : ""} modules
              </h2>
              <p className="featureGroup__blurb">
                {category ? category.blurb : "Other modules in the same group."}
              </p>
            </div>
            <div className="featureGrid">
              {related.map((item) => (
                <FeatureCard key={item.key} module={item} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section section--tight">
        <div className="container">
          <div className="pageCta">
            <div>
              <h2 className="h3">Ready to switch it on?</h2>
              <p className="pageCta__text">
                Install Uddom, enable the {module.title} module, and configure it in the app.
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
