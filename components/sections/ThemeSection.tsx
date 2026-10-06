import SectionHeading from "@/components/ui/SectionHeading";
import { themeFrames } from "@/data/features";

/**
 * Theme compatibility. Deliberately does not claim 100% compatibility with
 * every custom theme — it explains the architecture and the one known
 * dependency (cart-drawer features need a cart drawer).
 */
export default function ThemeSection() {
  return (
    <section
      className="section section--alt"
      id="themes"
      aria-labelledby="themes-title"
    >
      <div className="container">
        <SectionHeading
          eyebrow="Theme compatibility"
          title={<span id="themes-title">Built for Shopify themes. Not just one.</span>}
          lead="Uddom is designed to work across Shopify storefronts without depending on a single theme's implementation — no theme-specific markup is required."
        />

        <div className="themeFrames">
          {themeFrames.map((frame, i) => (
            <article
              className="themeFrame reveal"
              key={frame.name}
              data-reveal
              data-delay={String((i % 4) + 1)}
            >
              <div className="themeFrame__bar" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <div className="themeFrame__body" aria-hidden="true">
                <div className="themeFrame__block" style={{ width: "70%" }} />
                <div className="themeFrame__block themeFrame__block--accent" style={{ width: "45%" }} />
                <div className="themeFrame__block" style={{ width: "86%" }} />
                <div className="themeFrame__block" style={{ width: "60%" }} />
              </div>
              <p className="themeFrame__name">{frame.name}</p>
              <p className="themeFrame__note">{frame.note}</p>
            </article>
          ))}
        </div>

        <div className="grid2" style={{ marginTop: 24 }}>
          <div className="priceNote reveal" data-reveal>
            <strong>How it works:</strong> Uddom renders through a Shopify theme app
            extension and uses a theme-aware integration layer that fails safe. If a
            feature cannot find the element it needs, it does nothing rather than inject
            something broken.
          </div>
          <div className="priceNote reveal" data-reveal data-delay="1">
            <strong>One honest caveat:</strong> cart-drawer features need your theme to
            have a cart drawer. On a theme that uses a cart page instead, those specific
            modules will not appear — everything else still works.
          </div>
        </div>
      </div>
    </section>
  );
}
