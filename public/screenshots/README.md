# Screenshots

Real product screenshots go here. Until an image is present, the site renders an
explicit, labelled placeholder ("Product screenshot placeholder") — no fake
product UI is ever presented as a real screenshot.

## How to add a screenshot

1. Capture the screen at ~1600×1000 (16:10) for a clean fit.
2. Optimise it to WebP and drop it in this folder with the exact file name below.
3. Open `data/platform.ts` and set `ready: true` on that entry.

No component code needs to change — `components/ui/ScreenshotFrame.tsx` reads the
central config in `data/platform.ts`.

| Key | File | Used by |
| --- | --- | --- |
| dashboard | `dashboard.webp` | Product showcase → Dashboard |
| cro | `cro.webp` | Product showcase → CRO |
| offers | `offers.webp` | Product showcase → Offers |
| analytics | `analytics.webp` | Product showcase → Analytics |
| ab-testing | `ab-testing.webp` | Product showcase → A/B Testing |
| email | `email.webp` | Product showcase → Email |
| subscriptions | `subscriptions.webp` | Product showcase → Subscriptions |

Recommended: 16:10 aspect ratio, under ~300 KB each.
