"use client";

import { useEffect, useState } from "react";

type Tier = { qty: number; label: string; total: string; save: string };

/**
 * Offer ladder: buying more lowers the effective unit price.
 * Cycles the highlighted tier so the "buy more, save more" idea animates
 * without any user interaction, and pauses on hover (via CSS state).
 */
export default function OfferStack({ tiers }: { tiers: Tier[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setActive(tiers.length - 1);
      return;
    }
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % tiers.length);
    }, 1900);
    return () => window.clearInterval(id);
  }, [tiers.length]);

  return (
    <div
      className="tierList"
      role="group"
      aria-label="Volume offer example"
      onMouseEnter={() => setActive(tiers.length - 1)}
    >
      {tiers.map((t, i) => (
        <div
          className={["tierRow", i === active ? "tierRow--active" : ""].join(" ").trim()}
          key={t.qty}
          aria-current={i === active}
        >
          <span className="tierRow__qty" aria-hidden="true">
            ×{t.qty}
          </span>
          <span>
            <span className="tierRow__label">{t.label}</span>
          </span>
          <span style={{ textAlign: "right" }}>
            <span className="tierRow__price">{t.total}</span>
            {t.save ? <div className="tierRow__save">{t.save}</div> : null}
          </span>
        </div>
      ))}
    </div>
  );
}
