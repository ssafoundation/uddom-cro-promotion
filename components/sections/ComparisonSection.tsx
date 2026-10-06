import SectionHeading from "@/components/ui/SectionHeading";
import { compareFragmented, compareUddom } from "@/data/features";

/** Fragmented tools vs one platform. No cost-saving claims. */
export default function ComparisonSection() {
  return (
    <section className="section" id="why-uddom" aria-labelledby="compare-title">
      <div className="container">
        <SectionHeading
          eyebrow="Why one platform"
          title={<span id="compare-title">Fewer tools. One source of truth.</span>}
          lead="Stitching together a separate app for every job means five dashboards, five settings panels and five versions of the truth. Uddom replaces that with one."
        />

        <div className="compare">
          <div className="compare__col reveal" data-reveal>
            <h3 className="compare__title">A stack of separate apps</h3>
            {compareFragmented.map((row) => (
              <div className="compare__row" key={row}>
                <span className="compare__mark compare__mark--no" aria-hidden="true">
                  ✕
                </span>
                {row}
              </div>
            ))}
          </div>

          <div className="compare__col compare__col--uddom reveal" data-reveal data-delay="1">
            <h3 className="compare__title">Uddom</h3>
            {compareUddom.map((row) => (
              <div className="compare__row" key={row}>
                <span className="compare__mark compare__mark--yes" aria-hidden="true">
                  ✓
                </span>
                {row}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
