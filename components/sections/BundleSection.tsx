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
              { name: "Leather Tote", image: "/images/products/tote.webp" },
              { name: "Water Bottle", image: "/images/products/bottle.webp" },
              { name: "Free gift", kind: "gift", image: "/images/products/gift.webp" },
            ]}
          />
        </div>

        <p className="small small--faint-mt-md">
          Illustrative product photography — swap in your own product shots.
        </p>
      </div>
    </section>
  );
}
