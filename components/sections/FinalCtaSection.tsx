import BrandLogo from "@/components/ui/BrandLogo";
import { resolveInstallHref, site } from "@/data/site";

/** Final CTA: the brand mark on a white plate and the two closing actions. */
export default function FinalCtaSection() {
  const installHref = resolveInstallHref(site.installUrl, site.installFallbackAnchor);

  return (
    <section className="finalCta" id="get-started" aria-labelledby="final-title">
      <div className="finalCta__bg" aria-hidden="true" />
      <div className="container">
        <div className="finalCta__mark float">
          <BrandLogo variant="lockup" sizes="108px" />
        </div>
        <h2 className="h2 reveal" id="final-title" data-reveal>
          Your store has more potential.
        </h2>
        <p className="lead lead--mt reveal" data-reveal data-delay="1">
          Turn more traffic into customers with one Shopify growth platform.
        </p>
        <div className="finalCta__ctas reveal" data-reveal data-delay="2">
          <a className="btn btn--primary btn--lg" href={installHref}>
            {site.ctas.primaryLong}
            <span className="btn__arrow" aria-hidden="true">
              →
            </span>
          </a>
          <a className="btn btn--ghost btn--lg" href="#cro">
            {site.ctas.secondaryAlt}
          </a>
        </div>
      </div>
    </section>
  );
}
