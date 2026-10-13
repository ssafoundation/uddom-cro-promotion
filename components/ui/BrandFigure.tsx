import Image from "next/image";
import type { ReactNode } from "react";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Small honesty note rendered under the frame. */
  caption?: ReactNode;
  sizes?: string;
  priority?: boolean;
  className?: string;
};

/**
 * A brand render inside the shared rounded, glowing frame.
 *
 * Every supplied render is 8-bit truecolour RGB with an opaque, dark
 * background, so it sits directly on the dark page inside the frame — no
 * white plate is needed (unlike the logo).
 */
export default function BrandFigure({
  src,
  alt,
  width,
  height,
  caption,
  sizes = "100vw",
  priority = false,
  className,
}: Props) {
  return (
    <figure className={["brandFigure", className ?? ""].filter(Boolean).join(" ")}>
      <div className="brandFigure__frame">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          priority={priority}
        />
      </div>
      {caption ? <figcaption className="brandFigure__caption">{caption}</figcaption> : null}
    </figure>
  );
}
