import SectionHeading from "@/components/ui/SectionHeading";
import { recoveryTimeline } from "@/data/features";

/** Abandoned checkout recovery, shown as an animated timeline. */
export default function RecoverySection() {
  return (
    <section
      className="section section--alt"
      id="recovery"
      aria-labelledby="recovery-title"
    >
      <div className="container">
        <SectionHeading
          eyebrow="Abandoned checkout recovery"
          title={
            <span id="recovery-title">Recover sales that were about to disappear.</span>
          }
          lead="When a shopper leaves checkout unfinished, Uddom can send a recovery email automatically after a delay you choose — or you can send one yourself."
        />

        <ol className="timeline reveal" data-reveal>
          {recoveryTimeline.map((step, i) => (
            <li className="tlStep" key={step.name}>
              <span className="tlStep__dot" aria-hidden="true">
                {i + 1}
              </span>
              <div>
                <p className="tlStep__name">{step.name}</p>
                <p className="tlStep__text">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="small" style={{ color: "var(--faint)" }}>
          Automatic recovery runs on the schedule you configure; you can also send a
          recovery email manually from the abandoned checkouts list.
        </p>
      </div>
    </section>
  );
}
