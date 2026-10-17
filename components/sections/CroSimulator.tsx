"use client";

import { useMemo, useState } from "react";

import SectionHeading from "@/components/ui/SectionHeading";
import { simModules } from "@/data/features";

const toneClass: Record<string, string> = {
  urgency: "overlayModule--urgency",
  trust: "overlayModule--trust",
  ship: "overlayModule--ship",
  cross: "overlayModule--cross",
};

/**
 * Interactive demonstration: layer Uddom CRO modules onto a simulated product
 * page and toggle them on and off. Shows that Uddom works across the shopping
 * journey without claiming a specific conversion outcome.
 */
export default function CroSimulator() {
  const [enabled, setEnabled] = useState<Record<string, boolean>>(
    () => Object.fromEntries(simModules.map((m) => [m.id, m.defaultOn])) as Record<string, boolean>,
  );

  const onCount = useMemo(
    () => simModules.filter((m) => enabled[m.id]).length,
    [enabled],
  );

  const toggle = (id: string) =>
    setEnabled((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <section className="section" id="cro-demo" aria-labelledby="cro-demo-title">
      <div className="container">
        <SectionHeading
          eyebrow="See it on a storefront"
          title={<span id="cro-demo-title">Uddom works across the shopping journey.</span>}
          lead="Toggle the modules to see how conversion elements stack on a product page. This is an interactive illustration, not a live store."
        />

        <div className="croSim">
          <div className="shopPage reveal" data-reveal>
            <p className="shopPage__crumb">Home / Products / Leather Tote</p>
            <div className="shopPage__media">
              <img src="/images/products/tote.webp" alt="Leather Tote product photo in the simulated storefront" loading="lazy" decoding="async" />
            </div>
            <div className="shopPage__row">
              <h3 className="shopPage__title">Leather Tote</h3>
              <span className="shopPage__price">$58.00</span>
            </div>
            <div className="shopPage__row">
              <span className="btn btn--primary" style={{ pointerEvents: "none" }}>
                Add to cart
              </span>
              <span className="pill">{onCount} modules active</span>
            </div>

            <div className="shopPage__modules">
              {simModules
                .filter((m) => enabled[m.id])
                .map((m) => (
                  <div
                    className={["overlayModule", toneClass[m.tone]].join(" ").trim()}
                    key={m.id}
                  >
                    <span aria-hidden="true">◆</span>
                    {m.text}
                  </div>
                ))}
            </div>
          </div>

          <div className="reveal" data-reveal data-delay="1">
            <p className="eyebrow eyebrow--mb">
              Modules
            </p>
            <div className="croSim__toggleList">
              {simModules.map((m) => (
                <button
                  type="button"
                  key={m.id}
                  className="croSim__toggle"
                  aria-pressed={Boolean(enabled[m.id])}
                  onClick={() => toggle(m.id)}
                >
                  {m.label}
                  <span className="croSim__switch" aria-hidden="true" />
                </button>
              ))}
            </div>
            <p className="small small--muted-mt">
              In the app, each module is switched on and configured individually, and
              several can run together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
