type Props = {
  /** File inside /public/illustrations. */
  src: string;
  alt: string;
  /** True intrinsic size of the SVG, so the space is reserved before it loads. */
  width: number;
  height: number;
  caption?: string;
  /** Rendered width cap in px. */
  maxWidth?: number;
  className?: string;
};

/**
 * A free unDraw illustration (see scripts/fetch-undraw.py for the source and
 * licence), recoloured to the brand green.
 *
 * It is always placed inside an opaque white panel: unDraw's palette is built
 * for a light surface, so on a dark section its dark shapes would disappear.
 *
 * A plain <img> is deliberate — these are SVG, so there is nothing for
 * next/image to optimise, and next/image would need `dangerouslyAllowSVG`.
 */
export default function Illustration({
  src,
  alt,
  width,
  height,
  caption,
  maxWidth = 420,
  className,
}: Props) {
  return (
    <figure
      className={["illusPanel", className ?? ""].filter(Boolean).join(" ")}
      style={{ maxWidth }}
    >
      <img src={src} alt={alt} width={width} height={height} loading="lazy" decoding="async" />
      {caption ? <figcaption className="illusPanel__caption">{caption}</figcaption> : null}
    </figure>
  );
}
