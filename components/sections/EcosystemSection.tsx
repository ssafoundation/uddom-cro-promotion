import SectionHeading from "@/components/ui/SectionHeading";
import { ecosystemNodes } from "@/data/features";

/**
 * "One app, many systems": the platform moment. Node positions and spoke
 * angles are computed deterministically so the layout is stable (no random
 * layout, no hydration mismatch).
 */
export default function EcosystemSection() {
  const radiusX = 38; // percent
  const radiusY = 34;

  return (
    <section className="section" id="ecosystem" aria-labelledby="eco-title">
      <div className="container">
        <SectionHeading
          eyebrow="One app, many systems"
          title={<span id="eco-title">Every growth system, under one roof.</span>}
          lead="Fewer disconnected tools. One place to configure, measure and improve."
          center
        />

        <div className="eco reveal" data-reveal>
          <div className="eco__nodes" aria-hidden="true">
            {ecosystemNodes.map((node, i) => {
              const angle = (i / ecosystemNodes.length) * Math.PI * 2 - Math.PI / 2;
              const x = 50 + radiusX * Math.cos(angle);
              const y = 50 + radiusY * Math.sin(angle);
              const deg = (angle * 180) / Math.PI;
              return (
                <span key={node}>
                  <span
                    className="eco__spoke"
                    style={{ transform: `rotate(${deg}deg)` }}
                  />
                  <span
                    className="eco__node"
                    style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
                  >
                    {node}
                  </span>
                </span>
              );
            })}
          </div>
          <div className="eco__center">UDDOM</div>
        </div>

        <ul className="visually-hidden">
          {ecosystemNodes.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
