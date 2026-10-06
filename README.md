# Uddom — Presentation Website

The public-facing marketing site and landing page for **Uddom**, a Shopify growth
platform (CRO, offers, upsells, analytics, A/B testing, email marketing,
abandoned checkout recovery and subscriptions).

This is a **separate project** from the Uddom Shopify app. It is a purely
presentational website: it does not talk to the app's backend and it must never
be placed inside the app repository.

- Framework: **Next.js 16** (App Router) + **React 19** + **TypeScript**
- Styling: a single hand-written global stylesheet (`app/globals.css`) with CSS
  custom properties — no CSS framework
- 2D/3D: **CSS 3D transforms + SVG only**. No WebGL, no 3D runtime, no animation
  library (keeps the bundle small and the site fast on any device)
- Content lives in `data/*.ts`, separate from components

---

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run typecheck` | `tsc --noEmit` |

---

## Folder structure

```
Uddom-Presentation/
├─ app/
│  ├─ layout.tsx        Root layout: metadata, nav, scroll progress, reveal
│  ├─ page.tsx          The landing page (composes every section)
│  ├─ globals.css       Design system: tokens, base, components, responsive
│  └─ icon.svg          Favicon
├─ components/
│  ├─ navigation/       Navbar (sticky, compacting, mobile sheet, dropdown)
│  ├─ sections/         One component per page section
│  ├─ ui/               RevealObserver, CountUp, ScrollProgress,
│  │                    SectionHeading, ScreenshotFrame
│  └─ visuals/          Reusable 2D/3D primitives (dashboard, metrics, orbit,
│                       loop, offer stack, experiment flow, product scene,
│                       perspective panel)
├─ data/
│  ├─ site.ts           Brand, CTAs, SEO defaults, install URL
│  ├─ navigation.ts     Top nav, Platform dropdown, footer columns
│  ├─ features.ts       CRO features, problem/journey, offers, analytics,
│  │                    A/B, loop, email, recovery, subscriptions, themes,
│  │                    ecosystem, comparison, how-it-works
│  ├─ platform.ts       Platform pillars, showcase tabs, screenshot config
│  ├─ pricing.ts        Plans and prices (change prices here only)
│  └─ faq.ts            FAQ questions and answers
├─ lib/seo.ts           Metadata + JSON-LD builders
└─ public/
   ├─ screenshots/      Real product screenshots (see its README)
   ├─ images/
   └─ icons/
```

---

## Updating content

**Pricing** — edit `data/pricing.ts`. `pricingVerified` is `false` until the
live Shopify billing configuration has been checked; while it is false the
pricing section shows a "being finalised" notice. There is **no annual pricing**
and no advertised trial until that is verified.

**Features / copy** — edit `data/features.ts` (CRO list, offers, analytics,
A/B, email, etc.). Every string on the page comes from here or from the
component's own headings.

**FAQ** — edit `data/faq.ts`. Answers must describe only implemented features.

**Brand, CTAs, SEO** — edit `data/site.ts`. Set `installUrl` to the live Shopify
App Store URL once the listing is public; until then the primary CTA falls back
to the on-page pricing section, so no unverified URL is ever shipped.

**Navigation / footer** — edit `data/navigation.ts`. Footer links only point at
sections that exist; items without a destination render as non-links with a
"soon" tag.

---

## Brand assets

The brand artwork is the supplied **Uddom CRO gradient logo** and the
**futuristic Uddom dashboard render** (hero). Untouched sources live in `brand/`
(not served); derived, web-optimised files are:

| File | Size | Used by |
| --- | --- | --- |
| `public/images/uddom-mark.webp` | 512×346 | Navbar + footer brand chips |
| `public/images/uddom-logo.webp` | 1064×1063 | Full lockup (social cards / light plates) |
| `public/images/hero-dashboard.webp` | 1774×887 | Hero visual |
| `app/icon.png` | 512×512 | Favicon (served by Next from `app/`) |

**Important:** neither source has an alpha channel — both are 8-bit truecolour
RGB with a background. The logo is therefore always presented on a white
chip/plate (`BrandLogo`) so its colours stay exact; the hero render has a dark
background, so it sits directly on the dark page inside a rounded, glowing
frame. To drop the logo plate you need a **transparent** PNG or SVG version.

`components/ui/BrandLogo.tsx` is the single place that references the logo.
The hero image is referenced only from `components/sections/Hero.tsx`.

---

## Replacing screenshots

The product showcase uses **labelled placeholders** until real screenshots
exist. To swap one in:

1. Add the image to `public/screenshots/` (e.g. `dashboard.webp`).
2. Set `ready: true` for that key in `data/platform.ts`.

See `public/screenshots/README.md` for the full file list and sizing guidance.
No component code changes are required.

---

## Animation architecture

- **Scroll reveals**: one `IntersectionObserver` (`components/ui/RevealObserver`)
  reveals every element marked with `className="reveal" data-reveal`. Sections
  stay server components; there are no wrapper divs to break grid layouts.
  A `<noscript>` style keeps all content visible without JavaScript.
- **Counters**: `components/ui/CountUp` animates illustrative numbers in view.
- **Scroll progress**: `components/ui/ScrollProgress` updates a top bar with
  `requestAnimationFrame`.
- **Ambient motion**: CSS keyframes only (`float`, marquee, `popIn`, `faqOpen`).
- **3D depth**: CSS `perspective` / `rotateX` / `translateZ` in
  `components/visuals/*` and the `.persp*` / `.layer-*` / `.stage` utility
  classes. Perspective is **flattened on small screens** and for
  `prefers-reduced-motion`.

Everything motion-related is disabled under `prefers-reduced-motion: reduce`.

---

## Performance considerations

- No WebGL, no 3D runtime, no animation library.
- Only three runtime dependencies: `next`, `react`, `react-dom`.
- Client components are limited to the small interactive pieces (nav, reveal,
  counters, scroll progress, offer ladder, platform explorer, CRO simulator,
  showcase tabs, FAQ). Everything else is server-rendered.
- Illustrations are CSS/SVG, so there are no large image payloads. Screenshots
  load through `next/image` (AVIF/WebP) once added.
- Animations use GPU-friendly `transform`/`opacity` and respect reduced motion.

---

## Accessibility

Semantic landmarks (`header`/`main`/`footer`/`nav`), one `h1`, ordered heading
hierarchy, a skip link, visible focus rings, keyboard-operable navigation,
tabs (WAI-ARIA pattern with arrow keys) and FAQ accordion (`aria-expanded` /
`aria-controls` / labelled regions), `aria-pressed` toggles, non-hover
interactions, and a reduced-motion mode.

---

## SEO

`app/layout.tsx` sets title, meta description, Open Graph and Twitter metadata,
and a canonical URL **only when a real site URL is configured** (`data/site.ts`).
A JSON-LD `SoftwareApplication` block is emitted without ratings or review
counts (no invented structured data).

---

## Deploying

Any static/Node host that supports Next.js works (Vercel, Render, a Node
server). Build with `npm run build` and start with `npm run start`, or deploy
the repository to a Next-aware platform.

Set the public site URL in `data/site.ts` (`url`) and the App Store listing in
`installUrl` before going live.

---

## Content integrity rules (do not break these)

- **No fake social proof.** No invented testimonials, logos, merchant counts,
  revenue or conversion claims, awards, or "trusted by X" statements.
- **No fake screenshots.** Placeholders are labelled; real images replace them.
- **No unsupported product claims.** Only implemented features are advertised.
  Subscriptions do not include Uddom-run billing; cart-drawer features depend on
  the theme having a cart drawer.
- **Pricing is not final** until the billing configuration is verified.
