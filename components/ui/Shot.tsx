import Image from "next/image";

/**
 * A real product screenshot in a light panel.
 *
 * Every screenshot here is the merchant's own in-app capture (they ship in the
 * user documentation), so there is no third-party media and no licensing
 * question. The image keeps its true aspect ratio — nothing is cropped — and a
 * portrait capture is narrowed so a tall settings panel does not dominate the
 * page. When `ready` is false the component falls back to an obvious labelled
 * placeholder rather than showing anything invented.
 */
export type ShotData = {
  /** File inside /public/screenshots. */
  file: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  ready: boolean;
  /** Aspect ratio used for the placeholder frame only. */
  ratio?: string;
};

type Props = {
  shot: ShotData;
  className?: string;
  sizes?: string;
};

export default function Shot({
  shot,
  className,
  sizes = "(max-width: 920px) 100vw, 720px",
}: Props) {
  if (shot.ready) {
    return (
      <figure
        className={[
          "shotFrame",
          "shotFrame--ready",
          shot.height > shot.width ? "shotFrame--portrait" : "",
          className ?? "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <Image
          src={`/screenshots/${shot.file}`}
          alt={shot.alt}
          width={shot.width}
          height={shot.height}
          sizes={sizes}
        />
        {shot.caption ? (
          <figcaption className="shotFrame__caption">{shot.caption}</figcaption>
        ) : null}
      </figure>
    );
  }

  return (
    <figure
      className={["shotFrame", className ?? ""].filter(Boolean).join(" ")}
      style={{ aspectRatio: shot.ratio ?? "16 / 10" }}
      role="img"
      aria-label={`${shot.alt} (screenshot placeholder)`}
    >
      <span className="shotFrame__label">Product screenshot placeholder</span>
      <span className="shotFrame__hint">{shot.alt}</span>
      <span className="shotFrame__ratio">
        {shot.file} · {(shot.ratio ?? "16 / 10").replace(" / ", ":")}
      </span>
    </figure>
  );
}
