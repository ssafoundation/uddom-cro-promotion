"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * One global IntersectionObserver that animates `[data-reveal]` elements.
 *
 * Content is visible by default (see globals.css). On mount, elements that are
 * already on screen are marked revealed immediately — they never wait for
 * hydration or a transition — and only the elements below the fold get the
 * `reveal-pending` class, then animate in as they scroll into view.
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

    const viewportHeight = window.innerHeight;
    const pending: HTMLElement[] = [];

    nodes.forEach((node) => {
      const { top } = node.getBoundingClientRect();
      if (top < viewportHeight) {
        /* Already on screen: show it now, with no animation delay. */
        node.classList.add("reveal--in");
        return;
      }
      node.classList.add("reveal-pending");
      pending.push(node);
    });

    if (pending.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal--in");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.05 },
    );

    pending.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
