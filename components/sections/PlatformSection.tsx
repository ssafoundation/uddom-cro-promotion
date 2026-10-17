"use client";

import { useState } from "react";

import GrowthOrbit from "@/components/visuals/GrowthOrbit";
import SectionHeading from "@/components/ui/SectionHeading";
import { ecosystemNodes } from "@/data/features";
import { platformPillars } from "@/data/platform";

/**
 * The platform explorer: pick a growth lever and the description + orbit respond.
 * Uses buttons with aria-pressed so it works with a keyboard and on touch
 * (not hover-only).
 */
export default function PlatformSection() {
  const [activeId, setActiveId] = useState(platformPillars[0].id);
  const active =
    platformPillars.find((p) => p.id === activeId) ?? platformPillars[0];

  return (
    <section className="section section--alt" id="platform" aria-labelledby="platform-title">
      <div className="container">
        <SectionHeading
          eyebrow="The platform"
          title={<span id="platform-title">One platform. Every growth lever.</span>}
          lead="Uddom is not one tool with one job. It is a single Shopify app where each part of the growth loop shares the same configuration and the same reporting."
        />

        <div className="platformGrid">
          <div className="reveal" data-reveal>
            <div className="explorer__list" role="group" aria-label="Platform areas">
              {platformPillars.map((p) => {
                const isActive = p.id === activeId;
                return (
                  <button
                    type="button"
                    key={p.id}
                    className={["explorer__btn", isActive ? "explorer__btn--active" : ""]
                      .join(" ")
                      .trim()}
                    aria-pressed={isActive}
                    onClick={() => setActiveId(p.id)}
                  >
                    <span className="explorer__dot" aria-hidden="true" />
                    {p.name}
                  </button>
                );
              })}
            </div>

            <div className="explorer__panel" aria-live="polite">
              <p className="explorer__panelTitle">{active.headline}</p>
              <p className="explorer__panelText">{active.text}</p>
              <ul>
                {active.bullets.map((b) => (
                  <li className="explorer__bullet" key={b}>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="reveal" data-reveal data-delay="1">
            <GrowthOrbit items={ecosystemNodes} />
          </div>
        </div>
      </div>
    </section>
  );
}
