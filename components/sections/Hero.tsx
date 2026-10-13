import BrandFigure from "@/components/ui/BrandFigure";
import CountUp from "@/components/ui/CountUp";
import PerspectivePanel from "@/components/visuals/PerspectivePanel";
import { resolveInstallHref, site } from "@/data/site";

/**
 * Hero: eyebrow, headline, supporting copy, CTAs, product facts and the
 * supplied brand hero render (a wide dashboard composition with floating
 * feature cards) presented with CSS 3D depth and a gentle float.
 *
 * The three figures are product facts (module and offer counts), not
 * performance claims. The render is an illustrative product preview and is
 * labelled as such.
 */
export default function Hero() {
  const installHref = resolveInstallHref(site.installUrl, site.installFallbackAnchor);

  const stats = [
    { to: 12, label: "CRO modules" },
    { to: 8, label: "Offer types" },
    { to: 6, label: "Core metrics" },
  ];

  return (
    <section className="hero" id="platform-intro" aria-labelledby="hero-title">
      <div className="hero__bg" aria-hidden="true" />
      <div className="container container--wide hero__inner">
        <div className="hero__copy">
          <span className="eyebrow hero__eyebrow reveal" data-reveal>
            Shopify Growth Platform
          </span>

          <h1 id="hero-title" className="h1 hero__title reveal" data-reveal data-delay="1">
            Turn more Shopify visitors into <span className="gradientText">customers</span>.
          </h1>

          <p className="lead hero__lead reveal" data-reveal data-delay="2">
            Uddom brings CRO, offers, upsells, analytics, A/B testing, email marketing and
            subscriptions together in one powerful growth platform.
          </p>

          <div className="hero__ctas reveal" data-reveal data-delay="3">
            <a className="btn btn--primary btn--lg" href={installHref}>
              {site.ctas.primary}
              <span className="btn__arrow" aria-hidden="true">
                →
              </span>
            </a>
            <a className="btn btn--ghost btn--lg" href="#platform">
              {site.ctas.secondary}
            </a>
          </div>

          <p className="hero__note reveal" data-reveal data-delay="4">
            <span className="pill pill--accent">Built for Shopify</span>
            Theme-aware · no code required
          </p>

          <div className="hero__stats reveal" data-reveal data-delay="4">
            {stats.map((s) => (
              <div className="heroStat" key={s.label}>
                <p className="heroStat__value">
                  <CountUp to={s.to} />
                </p>
                <p className="heroStat__label">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="hero__visual">
          {/* The render already contains its own 3D perspective, so it is not
              rotated in CSS — only floated. Rotating a full-width block also
              overflowed the viewport on wide screens. */}
          <PerspectivePanel angle="none" className="float">
            <BrandFigure
              src="/images/hero-dashboard.webp"
              width={1774}
              height={887}
              priority
              sizes="(max-width: 980px) 100vw, 720px"
              alt="The Uddom dashboard showing revenue, conversion, orders and average order value, with conversion, offers, analytics, A/B testing, upsell and email cards floating around it."
              caption="Illustrative product preview — figures shown are example data."
            />
          </PerspectivePanel>

          <div className="grid-floor" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
