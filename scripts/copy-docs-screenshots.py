"""Copy the Uddom user-docs screenshots into the presentation site.

The source images are the merchant's own in-app screenshots (no third-party
media), so reusing them here carries no licensing question. Each is converted to
WebP and capped at 1600px wide, which is plenty for the sizes the marketing site
renders, and keeps the repository and the page weight down. Dimensions are
printed so the data files can carry real width/height and avoid layout shift.
"""

from pathlib import Path

from PIL import Image

SRC = Path(r"E:/shopifyAppsFolder/Apps for store/Uddom-User-Docs/assets/images")
DEST = Path(r"E:/shopifyAppsFolder/Apps for store/Uddom-Presentation/public/screenshots")
MAX_W = 1600
QUALITY = 82

# (source file, destination file)
PAIRS = [
    # --- CRO module pages: settings + storefront ---
    ("count-sown-settings.png", "countdown-timer-settings.webp"),
    ("countdown-front.png", "countdown-timer-storefront.webp"),
    ("low-stok.png", "low-stock-badge-settings.webp"),
    ("low-stock-front.png", "low-stock-badge-storefront.webp"),
    ("card-reminder-settings.png", "cart-reminder-settings.webp"),
    ("card-reminder-front.png", "cart-reminder-storefront.webp"),
    ("recent-sale-settings.png", "recent-sales-popup-settings.webp"),
    ("recent-sale-front.png", "recent-sales-popup-storefront.webp"),
    ("live-view-conut-settings.png", "live-viewer-count-settings.webp"),
    ("live-viewer-front.png", "live-viewer-count-storefront.webp"),
    ("review-settings.png", "review-widget-settings.webp"),
    ("review-dtorefront.png", "review-widget-storefront.webp"),
    ("review-list.png", "review-widget-list.webp"),
    ("free-shipping-bar.png", "free-shipping-bar-settings.webp"),
    ("free-shipping-bar-storefront.png", "free-shipping-bar-storefront.webp"),
    ("Exit-itent-offer-settings.png", "exit-intent-offer-settings.webp"),
    ("Exit-itent-offer-storefront.png", "exit-intent-offer-storefront.webp"),
    ("Abandoned Checkout Recovery.png", "abandoned-checkout-recovery.webp"),
    ("cart-drawer-cross-sell-settings.png", "cart-drawer-cross-sell-settings.webp"),
    ("cart-drawer-cross-sell-storefront.png", "cart-drawer-cross-sell-storefront.webp"),
    ("offers-list.png", "volume-bundle-offers.webp"),
    ("offer-biulder.png", "offer-builder.webp"),
    ("post-purchase-upsell-settings.png", "post-purchase-upsell-settings.webp"),
    ("post-parchace.png", "post-purchase-upsell-storefront.webp"),
    ("Trust Badge Strip.png", "trust-badge-strip-settings.webp"),
    ("Trust Badge Strip front.png", "trust-badge-strip-storefront.webp"),
    ("Guarantee banner settings.png", "guarantee-banner-settings.webp"),
    ("Guarantee banner front.png", "guarantee-banner-storefront.webp"),
    ("ab-tesT.png", "ab-testing-results.webp"),
    ("ab-test-details.png", "ab-testing-details.webp"),
    # --- Platform / showcase / section images ---
    ("dashboard.png", "dashboard.webp"),
    ("cro-module.png", "cro-modules.webp"),
    ("cro-module-cards-plan-labels.png", "cro-modules-plan-labels.webp"),
    ("insights-overview.png", "analytics-overview.webp"),
    ("insights-module-performance.png", "insights-module-performance.webp"),
    ("email-marketing-overview.png", "email-overview.webp"),
    ("email-templates-list.png", "email-templates.webp"),
    ("email-template-editor.png", "email-template-editor.webp"),
    ("subscriptions-list.png", "subscriptions-list.webp"),
    ("subscription-settings.png", "subscription-settings.webp"),
    ("subscription-contract-detail.png", "subscription-contract-detail.webp"),
    ("offer-type-selector.png", "offer-type-selector.webp"),
    ("plans-and-billing.png", "plans-and-billing.webp"),
    ("embed.png", "app-embed.webp"),
    ("store health.png", "store-health.webp"),
]


def main() -> None:
    DEST.mkdir(parents=True, exist_ok=True)
    missing: list[str] = []
    rows: list[tuple[str, int, int, int, int]] = []

    for source_name, dest_name in PAIRS:
        source = SRC / source_name
        if not source.exists():
            missing.append(source_name)
            continue

        image = Image.open(source)
        width, height = image.size
        if image.mode not in ("RGB", "RGBA"):
            image = image.convert("RGBA" if "A" in image.getbands() else "RGB")
        if width > MAX_W:
            new_h = round(height * MAX_W / width)
            image = image.resize((MAX_W, new_h), Image.LANCZOS)
            width, height = image.size

        target = DEST / dest_name
        image.save(target, "WEBP", quality=QUALITY, method=6)
        rows.append(
            (dest_name, width, height, source.stat().st_size, target.stat().st_size)
        )

    for dest_name, width, height, src_bytes, dest_bytes in rows:
        print(
            f"{dest_name:44s} {width:5d}x{height:<5d} "
            f"{src_bytes // 1024:6d}KB -> {dest_bytes // 1024:5d}KB"
        )

    total = sum(r[4] for r in rows)
    print(f"\n{len(rows)} written, total {total / 1024 / 1024:.2f} MB")
    if missing:
        print("MISSING:", missing)


if __name__ == "__main__":
    main()
