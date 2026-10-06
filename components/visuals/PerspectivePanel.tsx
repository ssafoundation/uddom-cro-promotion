import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Rotation preset. */
  angle?: "soft" | "flat" | "none";
  className?: string;
  /** Optional floating layer depth classes applied to children wrapper. */
  layer?: 0 | 1 | 2 | 3;
};

/**
 * Perspective wrapper for 2D/3D compositions. All depth is CSS transforms —
 * no WebGL — and it is flattened on small screens and for reduced motion by
 * the global stylesheet.
 */
export default function PerspectivePanel({
  children,
  angle = "soft",
  className,
  layer = 0,
}: Props) {
  const angleClass =
    angle === "soft" ? "persp--soft" : angle === "flat" ? "persp--flat" : "";
  const layerClass = layer > 0 ? `layer-${layer}` : "";

  return (
    <div className={["stage", className ?? ""].filter(Boolean).join(" ")}>
      <div className={["persp", angleClass, layerClass].filter(Boolean).join(" ")}>
        {children}
      </div>
    </div>
  );
}
