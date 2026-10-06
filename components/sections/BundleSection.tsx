import ProductScene from "@/components/visuals/ProductScene";
import SectionHeading from "@/components/ui/SectionHeading";

/** Bundle + free gift reveal. Abstract product tiles — no copyrighted imagery. */
export default function BundleSection() {
  return (
    <section className="section" id="bundles" aria-labelledby="bundles-title">
      <div className="container">
        <SectionHeading
          eyebrow="Bundles &amp; free gifts"
          title={<span id="bundles-title">Build the bundle. Unlock the gift.</span>}
          lead="Pair products into a bundle, or add a free gift when a shopper qualifies. The bundle price and the gift are handled at checkout by Uddom's discount function."
        />

        <div className="reveal" data-reveal>
          <ProductScene
            items={[
              { name: "Product A" },
              { name: "Product B" },
              { name: "Free gift", kind: "gift" },
            ]}
          />
        </div>

        <p className="small" style={{ color: "var(--faint)", marginTop: 16 }}>
          Abstract product representations — replace with your own product imagery.
        </p>
      </div>
    </section>
  );
}
