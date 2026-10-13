"use client";

import { useRef, useState } from "react";

import ScreenshotFrame from "@/components/ui/ScreenshotFrame";
import SectionHeading from "@/components/ui/SectionHeading";
import { showcaseTabs } from "@/data/platform";

/**
 * Product showcase tabs. Follows the WAI-ARIA tabs pattern: roving tabindex,
 * arrow-key navigation, and panels wired with aria-controls / aria-labelledby.
 * Shows labelled screenshot placeholders until real product images are added.
 */
export default function ShowcaseSection() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    const last = showcaseTabs.length - 1;
    let next = active;
    if (e.key === "ArrowRight") next = active === last ? 0 : active + 1;
    else if (e.key === "ArrowLeft") next = active === 0 ? last : active - 1;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = last;
    else return;
    e.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  const current = showcaseTabs[active];

  return (
    <section
      className="section section--alt"
      id="showcase"
      aria-labelledby="showcase-title"
    >
      <div className="container">
        <SectionHeading
          eyebrow="Product showcase"
          title={<span id="showcase-title">See how Uddom looks inside your admin.</span>}
          lead="A focused interface for every part of the platform. Screenshots are placeholders until the real product images are added."
        />

        <div className="tabs" role="tablist" aria-label="Product areas" onKeyDown={onKeyDown}>
          {showcaseTabs.map((tab, i) => (
            <button
              key={tab.id}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              id={`tab-${tab.id}`}
              role="tab"
              type="button"
              aria-selected={i === active}
              aria-controls={`panel-${tab.id}`}
              tabIndex={i === active ? 0 : -1}
              className={["tab", i === active ? "tab--active" : ""].join(" ").trim()}
              onClick={() => setActive(i)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div
          className="showcaseGrid"
          id={`panel-${current.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${current.id}`}
          tabIndex={0}
        >
          <ScreenshotFrame shotKey={current.screenshot} />

          <div className="shotSide">
            <h3 className="shotSide__title">{current.title}</h3>
            <p className="shotSide__text">{current.text}</p>
            <div className="shotSide__metrics">
              {current.metrics.map((m) => (
                <div className="kpi kpi--surface" key={m.label}>
                  <p className="kpi__label">{m.label}</p>
                  <p className="kpi__value kpi__value--fg">
                    {m.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
