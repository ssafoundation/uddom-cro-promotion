type Props = {
  items: string[];
  center?: string;
};

/**
 * Growth orbit: the Uddom mark at the centre with feature nodes arranged on a
 * circle, connected by spokes. Pure CSS 3D (rotateX on the rings) — no WebGL.
 */
export default function GrowthOrbit({ items, center = "UDDOM" }: Props) {
  const radius = 42; // percent of the container

  return (
    <div className="orbit stage" role="img" aria-label={`Uddom platform: ${items.join(", ")}`}>
      <div className="orbit__ring" aria-hidden="true" />
      <div className="orbit__ring orbit__ring--2" aria-hidden="true" />

      <div className="orbit__nodes" aria-hidden="true">
        {items.map((item, i) => {
          const angle = (i / items.length) * Math.PI * 2 - Math.PI / 2;
          const x = 50 + radius * Math.cos(angle);
          const y = 50 + radius * Math.sin(angle);
          return (
            <span
              key={item}
              className="orbit__node"
              style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
            >
              {item}
            </span>
          );
        })}
      </div>

      <div className="orbit__center">{center}</div>
    </div>
  );
}
