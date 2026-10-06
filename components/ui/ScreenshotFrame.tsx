import Image from "next/image";

import { screenshots, type ScreenshotKey } from "@/data/platform";

type Props = {
  shotKey: ScreenshotKey;
  className?: string;
};

/**
 * Central screenshot surface.
 *
 * Until a real screenshot is dropped into /public/screenshots and `ready` is set
 * to true in data/platform.ts, this renders an obvious, labelled placeholder.
 * No fake product UI is presented as a real screenshot.
 */
export default function ScreenshotFrame({ shotKey, className }: Props) {
  const shot = screenshots[shotKey];

  return (
    <figure
      className={["shotFrame", className ?? ""].filter(Boolean).join(" ")}
      style={shot.ready ? undefined : { aspectRatio: shot.ratio }}
      role={shot.ready ? undefined : "img"}
      aria-label={shot.ready ? undefined : `${shot.label}: ${shot.alt}`}
    >
      {shot.ready ? (
        <Image
          src={`/screenshots/${shot.file}`}
          alt={shot.alt}
          fill
          sizes="(max-width: 920px) 100vw, 720px"
          style={{ objectFit: "cover" }}
        />
      ) : (
        <>
          <span className="shotFrame__label">{shot.label}</span>
          <span className="shotFrame__hint">{shot.alt}</span>
          <span className="shotFrame__ratio">
            {shot.file} · {shot.ratio.replace(" / ", ":")}
          </span>
        </>
      )}
    </figure>
  );
}
