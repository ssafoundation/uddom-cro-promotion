import OfferStack from "@/components/visuals/OfferStack";
import SectionHeading from "@/components/ui/SectionHeading";
import { offerTiers, offerTypes } from "@/data/features";

/** Offers section: the offer types available, and an animated volume ladder. */
export default function OffersSection() {
  return (
    <section className="section section--alt" id="offers" aria-labelledby="offers-title">
      <div className="container">
        <SectionHeading
          eyebrow="Offers &amp; discounts"
          title={<span id="offers-title">Make the right offer at the right moment.</span>}
          lead="Create offers that apply automatically at checkout — no code for the shopper, no manual discount juggling for you."
        />

        <div className="offerGrid">
          <div className="reveal" data-reveal>
            <ul className="chipRow" style={{ marginBottom: 22 }}>
              {offerTypes.map((t) => (
                <li className="pill" key={t}>
                  {t}
                </li>
              ))}
            </ul>
            <p className="lead">
              Volume breaks and tiers reward buying more, bundles and Mix &amp; Match shape
              the basket, and free gifts sweeten the moment. Offers apply at checkout, so the
              shopper sees the saving exactly where it matters.
            </p>
          </div>

          <div className="reveal" data-reveal data-delay="1">
            <OfferStack tiers={offerTiers} />
            <p className="small" style={{ color: "var(--faint)", marginTop: 14 }}>
              Illustrative example — buying three lowers the effective unit price.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
