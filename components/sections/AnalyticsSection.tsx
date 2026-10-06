import FloatingDashboard from "@/components/visuals/FloatingDashboard";
import PerspectivePanel from "@/components/visuals/PerspectivePanel";
import SectionHeading from "@/components/ui/SectionHeading";
import { analyticsMetrics, modulePerformance } from "@/data/features";

/**
 * Analytics section. All figures are a clearly labelled illustrative example,
 * never presented as real performance for a store.
 */
export default function AnalyticsSection() {
  return (
    <section className="section section--alt" id="analytics" aria-labelledby="analytics-title">
      <div className="container">
        <SectionHeading
          eyebrow="Analytics"
          title={<span id="analytics-title">Don&rsquo;t guess. Know what converts.</span>}
          lead="See how each module performed across the funnel — impressions, clicks, add to cart, purchases and attributed revenue — in one place."
        />

        <p className="exampleTag" style={{ marginBottom: 18 }}>
          Example data for illustration
        </p>

        <div className="reveal" data-reveal>
          <PerspectivePanel angle="flat">
            <FloatingDashboard
              title="uddom · analytics"
              kpis={analyticsMetrics.slice(0, 3).map((m) => ({
                label: m.label,
                value: m.value,
                delta: m.delta,
              }))}
              bars={[38, 46, 52, 61, 58, 70, 66, 78, 74, 86, 90, 96]}
            />
          </PerspectivePanel>
        </div>

        <div className="dashGrid" style={{ marginTop: 18 }}>
          {analyticsMetrics.slice(3).map((m, i) => (
            <div
              className="card reveal"
              key={m.label}
              data-reveal
              data-delay={String(i + 1)}
            >
              <p className="kpi__label">{m.label}</p>
              <p className="kpi__value" style={{ color: "var(--foreground)" }}>
                {m.value}
              </p>
              {m.delta ? (
                <span className="accentText small" style={{ fontWeight: 700 }}>
                  {m.delta}
                </span>
              ) : null}
            </div>
          ))}

          <div className="card reveal" data-reveal data-delay="4">
            <p className="kpi__label">Module performance</p>
            <div className="barRow" style={{ marginTop: 12 }}>
              {modulePerformance.map((r) => (
                <div className="barRow__line" key={r.module}>
                  <span style={{ minWidth: 118 }}>{r.module}</span>
                  <span className="barRow__track">
                    <span
                      className={["barRow__fill", r.amber ? "barRow__fill--amber" : ""]
                        .join(" ")
                        .trim()}
                      style={{ width: `${r.share}%` }}
                    />
                  </span>
                  <span style={{ minWidth: 40, textAlign: "right" }}>{r.ctr}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="priceNote" style={{ marginTop: 20 }}>
          <strong>How Uddom reports:</strong> metrics are shown for the modules that
          support them. Where a metric has no data source, Uddom shows it as
          &ldquo;not measured&rdquo; rather than as a misleading zero, and attribution
          covers order lines Uddom can identify.
        </aside>
      </div>
    </section>
  );
}
