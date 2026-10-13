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

        <p className="exampleTag exampleTag--mb">
          Example data for illustration
        </p>

        <div className="reveal" data-reveal>
          <figure className="analyticsArt">
            <img
              src="/images/analytics-dashboard.webp"
              alt="Uddom analytics dashboard — impressions, clicks, add-to-cart, purchases and attributed revenue with module performance bars"
              width={1707}
              height={813}
              loading="lazy"
              decoding="async"
            />
            <figcaption className="shotFrame__caption">
              Illustrative dashboard render — your real metrics, module performance and attribution live inside the app.
            </figcaption>
          </figure>
        </div>

        <div className="dashGrid dashGrid--mt">
          {analyticsMetrics.slice(3).map((m, i) => (
            <div
              className="card reveal"
              key={m.label}
              data-reveal
              data-delay={String(i + 1)}
            >
              <p className="kpi__label">{m.label}</p>
              <p className="kpi__value kpi__value--fg">
                {m.value}
              </p>
              {m.delta ? (
                <span className="accentText small accentText--bold">
                  {m.delta}
                </span>
              ) : null}
            </div>
          ))}

          <div className="card reveal" data-reveal data-delay="4">
            <p className="kpi__label">Module performance</p>
            <div className="barRow barRow--mt">
              {modulePerformance.map((r) => (
                <div className="barRow__line" key={r.module}>
                  <span className="barRow__module">{r.module}</span>
                  <span className="barRow__track">
                    <span
                      className={["barRow__fill", r.amber ? "barRow__fill--amber" : ""]
                        .join(" ")
                        .trim()}
                      style={{ width: `${r.share}%` }}
                    />
                  </span>
                  <span className="barRow__ctr">{r.ctr}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="priceNote">
          <strong>How Uddom reports:</strong> metrics are shown for the modules that
          support them. Where a metric has no data source, Uddom shows it as
          &ldquo;not measured&rdquo; rather than as a misleading zero, and attribution
          covers order lines Uddom can identify.
        </aside>
      </div>
    </section>
  );
}
