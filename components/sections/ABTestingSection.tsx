import SectionHeading from "@/components/ui/SectionHeading";
import ExperimentFlow from "@/components/visuals/ExperimentFlow";
import { abVariants } from "@/data/features";

/** A/B testing section, with an honest note about how results are reported. */
export default function ABTestingSection() {
  const concepts = [
    "Deterministic assignment — a visitor keeps the same variant",
    "Traffic weights you set per variant",
    "A clear experiment lifecycle: draft, running, paused, completed",
    "Performance comparison across variants",
  ];

  return (
    <section className="section" id="ab-testing" aria-labelledby="ab-title">
      <div className="container">
        <SectionHeading
          eyebrow="A/B testing"
          title={
            <span id="ab-title">Stop guessing which experience wins.</span>
          }
          lead="Split one module between variants, give each its share of traffic, and see how they performed side by side."
        />

        <p className="exampleTag exampleTag--mb">
          Example data for illustration
        </p>

        <div className="reveal" data-reveal>
          <ExperimentFlow variants={abVariants} />
        </div>

        <div className="grid2 grid2--mt">
          <ul className="problemList reveal" data-reveal>
            {concepts.map((c) => (
              <li className="problemItem" key={c}>
                <span
                  className="problemItem__x problemItem__x--yes"
                  aria-hidden="true"
                >
                  ✓
                </span>
                <span>{c}</span>
              </li>
            ))}
          </ul>

          <div className="priceNote reveal" data-reveal data-delay="1">
            <strong>Uddom describes, it does not decide.</strong> The results
            show what each variant did, including a statistical comparison.
            Uddom does not declare a winner or automatically promote one variant
            — the decision stays with you.
          </div>
        </div>
      </div>
    </section>
  );
}
