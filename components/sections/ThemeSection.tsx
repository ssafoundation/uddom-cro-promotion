import SectionHeading from "@/components/ui/SectionHeading";
import { themeFrames } from "@/data/features";

const themeImages = [
  { src: "/images/theme-integration.webp", alt: "Secure theme integration: code editor connected to a storefront with a green shield" },
  { src: "/images/theme-plugin-hub.webp", alt: "Theme plugin hub: storefront connected via puzzle piece to product, bundle, cart and discount modules" },
  { src: "/images/theme-builder.webp", alt: "Theme builder dashboard with toggles for images, calendar, 3D, links and cart" },
  { src: "/images/theme-product-page.webp", alt: "Minimal product page with colour swatches, size options and add-to-cart" },
];

/**
 * Theme compatibility. Deliberately does not claim 100% compatibility with
 * every custom theme — it explains the architecture and the one known
 * dependency (cart-drawer features need a cart drawer).
 */
export default function ThemeSection() {
  return (
    <section
      className="section section--light"
      id="themes"
      aria-labelledby="themes-title"
    >
      <div className="container">
        <SectionHeading
          eyebrow="Theme compatibility"
          title={<span id="themes-title">Built for Shopify themes. Not just one.</span>}
          lead="Uddom is designed to work across Shopify storefronts without depending on a single theme's implementation — no theme-specific markup is required."
        />

        <div className="themeGrid">
          {themeImages.map((img, i) => (
            <figure
              className="themeCard reveal"
              key={img.src}
              data-reveal
              data-delay={String((i % 4) + 1)}
            >
              <div className="themeCard__imageWrap">
                <img
                  src={img.src}
                  alt={img.alt}
                  width={1200}
                  height={1200}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <figcaption className="themeCard__caption">
                {themeFrames[i].name}
                <span className="themeCard__note"> — {themeFrames[i].note}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="grid2 grid2--mt-lg">
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
