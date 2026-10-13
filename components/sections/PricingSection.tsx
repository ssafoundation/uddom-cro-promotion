import SectionHeading from "@/components/ui/SectionHeading";
import {
  billingCycle,
  catalogTotal,
  plans,
  pricingNotes,
  pricingVerified,
} from "@/data/pricing";
import { resolveInstallHref, site } from "@/data/site";

/**
 * Pricing. Prices come from data/pricing.ts so they can be changed centrally.
 * While `pricingVerified` is false the section shows a clear notice and does not
 * advertise a trial — Uddom's billing is not configured yet.
 */
export default function PricingSection() {
  const installHref = resolveInstallHref(site.installUrl, site.installFallbackAnchor);

  return (
    <section className="section section--light" id="pricing" aria-labelledby="pricing-title">
      <div className="container">
        <SectionHeading
          eyebrow="Pricing"
          title={<span id="pricing-title">A plan for every stage of growth.</span>}
          lead="Start free, then add offers, analytics, experimentation and email as your store grows. Monthly billing."
          center
        />

        <p
          className="visually-hidden visually-hidden--center"
        >
          Billing cycle: {billingCycle}.
        </p>

        <div className="priceLayers">
          {plans.map((plan, i) => (
            <article
              className={["priceCard", plan.featured ? "priceCard--featured" : "", "reveal"]
                .join(" ")
                .trim()}
              key={plan.id}
              data-reveal
              data-delay={String(i + 1)}
              aria-labelledby={`plan-${plan.id}`}
            >
              <div className="priceCard__tier">
                <span className="priceCard__name" id={`plan-${plan.id}`}>
                  {plan.name}
                </span>
                {plan.featured ? (
                  <span className="priceCard__badge">Most Popular</span>
                ) : null}
              </div>

              <p className="priceCard__price">
                {plan.price}
                {plan.period ? (
                  <span className="priceCard__period">{plan.period}</span>
                ) : (
                  <span className="priceCard__period">forever</span>
                )}
              </p>
              <p className="priceCard__note">{plan.blurb}</p>

              <p className="priceCard__count">
                Includes <strong>{plan.includedCount}</strong> of {catalogTotal} modules
              </p>

              {plan.inherits ? (
                <p className="priceCard__inherits">Everything in {plan.inherits}, plus:</p>
              ) : null}

              <ul className="priceCard__features">
                {plan.features.map((f) => (
                  <li className="priceCard__feature" key={f}>
                    {f}
                  </li>
                ))}
              </ul>

              <a className="btn btn--primary priceCard__cta" href={installHref}>
                {plan.cta}
              </a>
            </article>
          ))}
        </div>

        <div className="priceNote priceNote--mt-lg">
          {!pricingVerified ? (
            <p className="priceNote__lead">
              <strong>Pricing is being finalised.</strong> These plans and prices are the
              planned launch pricing. Uddom&rsquo;s billing is not configured yet, so nothing
              here starts a paid subscription today. A free plan is available.
            </p>
          ) : null}
          <ul className="priceNote__list">
            {pricingNotes.map((note) => (
              <li key={note}>
                • {note}
              </li>
            ))}
            <li>
              • Plans map to module labels (Free, Grow, Convert, Scale) shown on each
              module card in the app.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
