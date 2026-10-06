import ConversionLoop from "@/components/visuals/ConversionLoop";
import SectionHeading from "@/components/ui/SectionHeading";
import { loopSteps } from "@/data/features";

/** The signature "Launch → Measure → Test → Improve" loop. */
export default function LoopSection() {
  return (
    <section className="section section--alt" id="the-loop" aria-labelledby="loop-title">
      <div className="container">
        <SectionHeading
          eyebrow="The growth loop"
          title={<span id="loop-title">Launch. Measure. Test. Improve.</span>}
          lead="Uddom is built around one repeating loop. Every launch feeds the next decision, so the store keeps improving instead of standing still."
          center
        />

        <div className="reveal" data-reveal>
          <ConversionLoop steps={loopSteps} />
        </div>
      </div>
    </section>
  );
}
