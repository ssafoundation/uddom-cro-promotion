import Image from "next/image";

type Variant = "mark" | "lockup";

type Props = {
  /**
   * `mark` — the logo glyph only (for compact brand chips).
   * `lockup` — the full Uddom CRO lockup (for light plates / social cards).
   */
  variant?: Variant;
  /** Decorative by default; the surrounding element carries the accessible name. */
  alt?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

/**
 * The Uddom brand logo, served through next/image so the browser receives an
 * optimised, correctly sized variant rather than the source artwork.
 *
 * `lockup` is a transparent RGBA export, so it sits on any background. The
 * `mark` glyph still has a white background (8-bit truecolour RGB, no alpha)
 * and is therefore presented on a white chip/plate to keep its colours exact.
 */
export default function BrandLogo({
  variant = "mark",
  alt = "",
  className,
  sizes = "40px",
  priority = false,
}: Props) {
  if (variant === "lockup") {
    return (
      <Image
        src="/images/uddom-logo.webp"
        alt={alt}
        width={1200}
        height={366}
        className={className}
        sizes={sizes}
        priority={priority}
      />
    );
  }

  return (
    <Image
      src="/images/uddom-mark.webp"
      alt={alt}
      width={512}
      height={346}
      className={className}
      sizes={sizes}
      priority={priority}
    />
  );
}
