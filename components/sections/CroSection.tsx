import BrandFigure from "@/components/ui/BrandFigure";
import SectionHeading from "@/components/ui/SectionHeading";
import { croFeatures, type CroFeature } from "@/data/features";

/** A different, small preview per feature so no two cards look identical. */
function CroVisual({ visual }: { visual: CroFeature["visual"] }) {
  switch (visual) {
    case "stock":
      return (
        <div className="croCard__visual">
          <span className="miniBadge">Only 3 left</span>
          <p className="miniRow miniRow--mt">
            <span>In stock</span>
            <span>3 units</span>
          </p>
        </div>
      );
    case "countdown":
      return (
        <div className="croCard__visual">
          <p className="miniRow">
            <span>Sale ends in</span>
            <span>02:14:38</span>
          </p>
          <div className="miniProgress miniProgress--mt">
            <i style={{ width: "68%" }} />
          </div>
        </div>
      );
    case "reserve":
      return (
        <div className="croCard__visual">
          <span className="miniTicker">
            <span className="miniTicker__dot" />
            Cart reserved · 14:52
          </span>
        </div>
      );
    case "sales":
      return (
        <div className="croCard__visual">
          <span className="miniTicker">
            <span className="miniTicker__dot" />
            Someone just purchased this item
          </span>
        </div>
      );
    case "viewers":
      return (
        <div className="croCard__visual">
          <span className="miniTicker">
            <span className="miniTicker__dot" />
            18 people are viewing this product
          </span>
        </div>
      );
    case "reviews":
      return (
        <div className="croCard__visual">
          <p className="stars">★★★★★</p>
          <p className="miniRow miniRow--mt-sm">
            <span>4.8 average</span>
            <span>126 reviews</span>
          </p>
        </div>
      );
    case "shipping":
      return (
        <div className="croCard__visual">
          <p className="miniRow">
            <span>Add $12 more for free shipping</span>
            <span>$38 / $50</span>
          </p>
          <div className="miniProgress miniProgress--mt-md">
            <i style={{ width: "76%" }} />
          </div>
        </div>
      );
    case "exit":
      return (
        <div className="croCard__visual">
          <p className="croVisual__title">Wait — don&rsquo;t leave yet</p>
          <p className="miniRow miniRow--mt-xs">
            <span>Here is 10% off</span>
            <span>Claim</span>
          </p>
        </div>
      );
    case "crosssell":
      return (
        <div className="croCard__visual">
          <p className="miniRow">
            <span>You may also like</span>
            <span>Add</span>
          </p>
          <div className="miniProgress miniProgress--mt-md">
            <i style={{ width: "40%" }} />
          </div>
        </div>
      );
    case "trust":
      return (
        <div className="croCard__visual">
          <p className="miniRow">
            <span>Secure checkout</span>
            <span>30-day returns</span>
          </p>
        </div>
      );
    case "guarantee":
      return (
        <div className="croCard__visual">
          <p className="croVisual__title">
            Backed by a 30-day guarantee
          </p>
        </div>
      );
    case "postpurchase":
      return (
        <div className="croCard__visual">
          <p className="miniRow">
            <span>Special offer just for you</span>
            <span>Add</span>
          </p>
        </div>
      );
    default:
      return null;
  }
}

/** The 12 CRO modules that render on the storefront. */
export default function CroSection() {
  return (
    <section className="section section--light" id="cro" aria-labelledby="cro-title">
      <div className="container">
        <SectionHeading
          eyebrow="Conversion rate optimization"
          title={<span id="cro-title">Optimize every moment before the purchase.</span>}
          lead="Add conversion-focused experiences across the storefront. Each module is a switch in the app and a small, theme-aware widget on the storefront."
        />

        <div className="reveal croShowcase" data-reveal>
          <BrandFigure
            src="/images/cro-showcase-pastel.webp"
            width={1672}
            height={941}
            sizes="(max-width: 1360px) 100vw, 1360px"
            alt="A pastel product dashboard with Uddom CRO modules floating around it: low-stock badge, countdown timer, recent-sales popup, free-shipping bar, A/B testing and cart upsell cards."
            caption="Illustrative storefront preview — example products and figures."
          />
        </div>

        <div className="croGrid">
          {croFeatures.map((f, i) => (
            <article
              className={["croCard", f.wide ? "croCard--wide" : "", "reveal"]
                .join(" ")
                .trim()}
              key={f.name}
              data-reveal
              data-delay={String((i % 3) + 1)}
            >
              <h3 className="croCard__name">{f.name}</h3>
              <p className="croCard__text">{f.value}</p>
              <CroVisual visual={f.visual} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
