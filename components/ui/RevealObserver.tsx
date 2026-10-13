"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * One global IntersectionObserver that reveals every `[data-reveal]` element.
 *
 * Sections stay server components and simply mark elements with
 * `className="reveal" data-reveal`. Mounting this once avoids wrapper <div>s
 * that would break grid layouts. If JavaScript is disabled the <noscript>
 * style in the root layout keeps all content visible.
 *
 * Re-runs on route change so client-side navigation reveals the new page.
 */
export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    if (nodes.length === 0) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) {
      nodes.forEach((n) => n.classList.add("reveal--in"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal--in");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
