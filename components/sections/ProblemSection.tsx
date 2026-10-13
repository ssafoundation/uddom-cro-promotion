import BrandFigure from "@/components/ui/BrandFigure";
import SectionHeading from "@/components/ui/SectionHeading";
import { problemItems } from "@/data/features";

/**
 * Problem section: the common leaks merchants hit, next to the supplied
 * journey render (a visitor who exits vs. an Uddom-assisted path to purchase).
 */
export default function ProblemSection() {
  return (
    <section className="section" id="problem" aria-labelledby="problem-title">
      <div className="container">
        <SectionHeading
          eyebrow="The real problem"
          title={
            <span id="problem-title">
              Your store doesn&rsquo;t need more traffic. It needs more from the traffic you
              already have.
            </span>
          }
          lead="Visitors arrive, browse, and leave. The gap is rarely at the top of the funnel — it is in the small moments between interest and purchase."
        />

        <div className="problemGrid">
          <ul className="problemList reveal" data-reveal>
            {problemItems.map((item) => (
              <li className="problemItem" key={item}>
                <span className="problemItem__x" aria-hidden="true">
                  ✕
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="reveal" data-reveal data-delay="1">
            <BrandFigure
              src="/images/journey.webp"
              width={1774}
              height={887}
              sizes="(max-width: 980px) 100vw, 760px"
              alt="Two customer journeys: on the left a visitor reaches a product page and exits; on the right an Uddom-assisted path from visitor to engage, offer, confidence and purchase."
              caption="Illustrative journey — example products."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
