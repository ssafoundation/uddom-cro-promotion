import type { ReactNode } from "react";

type Kpi = { label: string; value: string; delta?: string };

type Props = {
  title?: string;
  kpis?: Kpi[];
  /** Bar heights (0–100). */
  bars?: number[];
  rows?: { label: string; value: string; pct: number; amber?: boolean }[];
  footer?: ReactNode;
  className?: string;
};

/**
 * The floating product interface used in the hero and the showcase.
 * A light "product surface" on the dark stage, with 3D depth applied by the
 * surrounding <PerspectivePanel>.
 */
export default function FloatingDashboard({
  title = "uddom · dashboard",
  kpis = [
    { label: "Modules active", value: "12", delta: "+2" },
    { label: "Conversion rate", value: "0.53%", delta: "+0.06pt" },
    { label: "Attributed revenue", value: "$18.4k", delta: "+8.9%" },
  ],
  bars = [42, 58, 46, 70, 62, 84, 76, 92, 70, 88, 96, 82],
  rows,
  footer,
  className,
}: Props) {
  return (
    <div className={["fpanel", className ?? ""].filter(Boolean).join(" ")}>
      <div className="fpanel__top">
        <span className="dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
        <span className="fpanel__title">{title}</span>
      </div>
      <div className="fpanel__body">
        <div className="fpanel__kpis">
          {kpis.map((k) => (
            <div className="kpi" key={k.label}>
              <p className="kpi__label">{k.label}</p>
              <p className="kpi__value">{k.value}</p>
              {k.delta ? <span className="kpi__delta">{k.delta}</span> : null}
            </div>
          ))}
        </div>

        {bars.length > 0 ? (
          <div className="chart" aria-hidden="true">
            {bars.map((h, i) => (
              <i key={i} style={{ height: `${h}%` }} />
            ))}
          </div>
        ) : null}

        {rows && rows.length > 0 ? (
          <div className="barRow">
            {rows.map((r) => (
              <div className="barRow__line" key={r.label}>
                <span style={{ minWidth: 132 }}>{r.label}</span>
                <span className="barRow__track">
                  <span
                    className={[
                      "barRow__fill",
                      r.amber ? "barRow__fill--amber" : "",
                    ]
                      .join(" ")
                      .trim()}
                    style={{ width: `${r.pct}%` }}
                  />
                </span>
                <span style={{ minWidth: 46, textAlign: "right" }}>{r.value}</span>
              </div>
            ))}
          </div>
        ) : null}

        {footer}
      </div>
    </div>
  );
}
