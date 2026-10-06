import SectionHeading from "@/components/ui/SectionHeading";
import { subscriptionPoints } from "@/data/features";

/** Subscriptions: one-time vs Subscribe & Save, with an honest billing note. */
export default function SubscriptionSection() {
  return (
    <section
      className="section"
      id="subscriptions"
      aria-labelledby="subscriptions-title"
    >
      <div className="container">
        <SectionHeading
          eyebrow="Subscriptions"
          title={<span id="subscriptions-title">Turn one purchase into a relationship.</span>}
          lead="Create selling plans and purchase options so customers can subscribe instead of buying once — with a subscriber discount you control."
        />

        <div className="subCompare">
          <div className="subCol reveal" data-reveal>
            <h3 className="subCol__title">One-time purchase</h3>
            <div className="recur">
              <div className="recur__row">
                <span>Paid once</span>
                <span>$58.00</span>
              </div>
              <div className="recur__row">
                <span>Reorder reminder</span>
                <span style={{ color: "var(--faint)" }}>None</span>
              </div>
              <div className="recur__row">
                <span>Relationship</span>
                <span style={{ color: "var(--faint)" }}>Ends at checkout</span>
              </div>
            </div>
          </div>

          <div className="subCol subCol--good reveal" data-reveal data-delay="1">
            <h3 className="subCol__title">Subscribe &amp; Save</h3>
            <div className="recur">
              <div className="recur__row">
                <span>Billed on a schedule</span>
                <span>$49.30</span>
              </div>
              <div className="recur__row">
                <span>Subscriber discount</span>
                <span className="recur__badge">Applied</span>
              </div>
              <div className="recur__row">
                <span>Relationship</span>
                <span className="recur__badge">Ongoing</span>
              </div>
            </div>
          </div>
        </div>

        <ul className="chipRow" style={{ marginTop: 22 }}>
          {subscriptionPoints.map((p) => (
            <li className="pill" key={p}>
              {p}
            </li>
          ))}
        </ul>

        <aside className="priceNote" style={{ marginTop: 18 }}>
          <strong>How billing works:</strong> subscription plans are Shopify purchase
          options. Recurring billing and payment are handled by Shopify — Uddom does not
          run subscription billing, and it stores no payment data. Uddom shows you a
          read-only view of the contracts Shopify creates.
        </aside>
      </div>
    </section>
  );
}
