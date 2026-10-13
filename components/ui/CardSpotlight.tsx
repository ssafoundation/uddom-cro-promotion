"use client";

import { useEffect } from "react";

/**
 * Cards catch a light that follows the pointer.
 *
 * One delegated listener on the document — not one per card — resolves the card
 * under the pointer, then writes the pointer position into the element's
 * `--mx` / `--my` custom properties on the next animation frame. The CSS
 * spotlight reads those. With no JavaScript (or on touch, or with reduced
 * motion) nothing is written and the gradient simply stays at its centre
 * default, so this is purely additive.
 */
const CARD_SELECTOR = ".card, .croCard, .featureCard, .priceCard, .pageCta, .heroStat";

export default function CardSpotlight() {
  useEffect(() => {
    /* A coarse pointer has no hover to follow, and reduced motion asks us not to
       animate at all — in both cases leave the default in place. */
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    let raf = 0;
    let target: HTMLElement | null = null;
    let pointerX = 0;
    let pointerY = 0;

    const paint = () => {
      raf = 0;
      if (!target) return;
      const rect = target.getBoundingClientRect();
      target.style.setProperty("--mx", `${pointerX - rect.left}px`);
      target.style.setProperty("--my", `${pointerY - rect.top}px`);
    };

    const onMove = (event: PointerEvent) => {
      const source = event.target;
      const element =
        source instanceof Element ? source.closest<HTMLElement>(CARD_SELECTOR) : null;

      if (!element) {
        target = null;
        return;
      }

      target = element;
      pointerX = event.clientX;
      pointerY = event.clientY;
      if (!raf) raf = requestAnimationFrame(paint);
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      document.removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
