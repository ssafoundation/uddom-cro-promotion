import BrandFigure from "@/components/ui/BrandFigure";
import SectionHeading from "@/components/ui/SectionHeading";

/**
 * "One app, many systems" — the platform moment, using the supplied ecosystem
 * render (the Uddom mark at the centre of the growth systems).
 */
export default function EcosystemSection() {
  return (
    <section className="section" id="ecosystem" aria-labelledby="eco-title">
      <div className="container">
        <SectionHeading
          eyebrow="One app, many systems"
          title={<span id="eco-title">Every growth system, under one roof.</span>}
          lead="Fewer disconnected tools. One place to configure, measure and improve."
          center
        />

        <div className="reveal" data-reveal>
          <BrandFigure
            src="/images/ecosystem.webp"
            width={1774}
            height={887}
            sizes="(max-width: 1360px) 100vw, 1360px"
            alt="The Uddom platform at the centre of a connected network of systems: CRO, offers, upsells, analytics, A/B testing, email, recovery and subscriptions."
            caption="Illustrative platform illustration."
          />
        </div>
      </div>
    </section>
  );
}
