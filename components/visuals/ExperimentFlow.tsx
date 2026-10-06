type Variant = {
  name: string;
  weight: number;
  impressions: string;
  clicks: string;
  purchases: string;
  highlight?: boolean;
};

/** A/B branching visual: one module split across weighted variants. */
export default function ExperimentFlow({ variants }: { variants: Variant[] }) {
  return (
    <div className="abFlow" role="img" aria-label="A/B test: one module split across variants">
      <div className="abSource">
        <p className="mono" style={{ color: "var(--faint)" }}>
          Module
        </p>
        <p style={{ fontWeight: 700, marginTop: 6 }}>Free shipping bar</p>
        <p className="small" style={{ color: "var(--muted)", marginTop: 4 }}>
          Visitors assigned by weight
        </p>
      </div>

      {variants.map((v) => (
        <div className="abBranch" key={v.name}>
          <div className={["abNode", v.highlight ? "abNode--winner" : ""].join(" ").trim()}>
            <div className="abNode__name">{v.name}</div>
            <div className="abNode__bar" aria-hidden="true">
              <i style={{ width: `${v.weight}%` }} />
            </div>
            <p className="abNode__meta">{v.weight}% of traffic</p>
            <dl className="abNode__meta" style={{ marginTop: 10 }}>
              <div>{v.impressions} impressions</div>
              <div>{v.clicks} clicks</div>
              <div>{v.purchases} purchases</div>
            </dl>
          </div>
        </div>
      ))}
    </div>
  );
}
