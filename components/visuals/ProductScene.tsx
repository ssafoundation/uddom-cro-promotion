import ProductGlyph from "@/components/visuals/ProductGlyph";

type Props = {
  items: { name: string; kind?: "gift" | "product"; image?: string; glyph?: "tote" | "cap" | "bottle" | "gift" }[];
  unlockLabel?: string;
};

/**
 * Bundle + free-gift product scene: the products arranged with 3D depth above an
 * "unlocked" bar. Each tile shows a real product photograph (a free Pexels photo
 * — see scripts/pexels-pick.py), on a white plate so a light-background photo
 * reads correctly. The photograph is decorative; the tile's name is the label.
 */
export default function ProductScene({
  items,
  unlockLabel = "Bundle unlocked",
}: Props) {
  return (
    <div className="bundleScene">
      <div className="stage__glow" aria-hidden="true" />
      <div className="bundleRow">
        {items.map((item) => (
          <div
            className={["productTile", item.kind === "gift" ? "productTile--gift" : ""]
              .join(" ")
              .trim()}
            key={item.name}
          >
            <span className="productTile__photo">
              {item.image ? (
                <img src={item.image} alt={item.name} loading="lazy" decoding="async" />
              ) : item.glyph ? (
                <ProductGlyph variant={item.glyph} />
              ) : null}
            </span>
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
