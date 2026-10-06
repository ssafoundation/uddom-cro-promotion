type Props = {
  items: { name: string; kind?: "gift" | "product" }[];
  unlockLabel?: string;
};

/**
 * Bundle + free-gift product scene. Abstract product tiles (no copyrighted
 * imagery) arranged with 3D depth, and an "unlocked" bar.
 */
export default function ProductScene({
  items,
  unlockLabel = "Bundle unlocked",
}: Props) {
  return (
    <div className="bundleScene stage">
      <div className="stage__glow" aria-hidden="true" />
      <div className="bundleRow persp persp--flat">
        {items.map((item) => (
          <div
            className={["productTile", item.kind === "gift" ? "productTile--gift" : ""]
              .join(" ")
              .trim()}
            key={item.name}
          >
            <span className="productTile__glyph" aria-hidden="true" />
            <span className="productTile__name">{item.name}</span>
          </div>
        ))}
      </div>
      <div className="bundleUnlock">
        <span style={{ fontWeight: 720, letterSpacing: "-0.02em" }}>{unlockLabel}</span>
        <span className="pill pill--accent">Free gift added</span>
      </div>
    </div>
  );
}
