import type { Metadata } from "next";
import Link from "next/link";

import Footer from "@/components/sections/Footer";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Shot from "@/components/ui/Shot";
import { emailCapabilities, recoveryTimeline } from "@/data/features";
import { resolveInstallHref, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Email marketing — Uddom",
  description:
    "Build lists, import contacts with consent, design reusable templates, send product-focused marketing email, and recover abandoned checkouts automatically.",
};

export default function EmailMarketingPage() {
  const installHref = resolveInstallHref(site.installUrl, site.installFallbackAnchor);

  return (
    <div id="top">
      <PageHero
        eyebrow="Email marketing"
        title="Turn one-time buyers into returning customers."
        lead="Contacts, lists, reusable templates and product-focused sending — plus automatic recovery of the checkouts your store almost lost."
        crumbs={[{ label: "Home", href: "/" }, { label: "Email marketing" }]}
        meta={<p className="pageHero__count">Lists · templates · sending · recovery</p>}
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="What you get"
            title="Everything needed to send, and to be allowed to."
            lead="Consent is part of the workflow, not an afterthought: contacts arrive with a consent confirmation and every marketing send can be unsubscribed from."
            center
          />
          <div className="grid3">
            {emailCapabilities.map((capability) => (
              <article className="card reveal" data-reveal key={capability}>
                <h3 className="card__title" style={{ fontSize: "0.98rem" }}>
                  {capability}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <SectionHeading
            eyebrow="Inside the app"
            title="Lists, templates and sending in one place."
            center
          />
          <div className="grid2">
            <div className="reveal" data-reveal>
              <Shot
                shot={{
                  file: "email-overview.webp",
                  alt: "The Email Marketing overview in the Uddom app.",
                  width: 1081,
                  height: 879,
                  caption: "Email marketing: the overview.",
                  ready: true,
                }}
                sizes="(max-width: 920px) 100vw, 620px"
              />
            </div>
            <div className="reveal" data-reveal data-delay="1">
              <Shot
                shot={{
                  file: "email-templates.webp",
                  alt: "The list of reusable email templates in the Uddom app.",
                  width: 1382,
                  height: 573,
                  caption: "Reusable templates, ready to send.",
                  ready: true,
                }}
                sizes="(max-width: 920px) 100vw, 620px"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt section--tight">
        <div className="container">
          <SectionHeading
            eyebrow="Abandoned checkout recovery"
            title="Recover the sales that were about to disappear."
            lead="Uddom finds eligible abandoned checkouts on a schedule you control and sends your chosen template after the delay you set."
          />
          <div className="grid3">
            {recoveryTimeline.map((step, i) => (
              <article className="card reveal" data-reveal key={step.name}>
                <span className="card__icon" aria-hidden="true">
                  {i + 1}
                </span>
                <h3 className="card__title">{step.name}</h3>
                <p className="card__text">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <SectionHeading
            eyebrow="Delivery"
            title="Send through your own provider, or through ours."
            lead="Either way the email leaves from an address you control, with SPF, DKIM and DMARC checked before you send."
          />
          <div className="grid2">
            <article className="card reveal" data-reveal>
              <h3 className="card__title">Your own SMTP provider</h3>
              <p className="card__text">
                Connect your own sending account on every plan. Credentials are stored
                encrypted and never shown back in plain text.
              </p>
            </article>
            <article className="card reveal" data-reveal data-delay="1">
              <h3 className="card__title">Uddom-managed sending</h3>
              <p className="card__text">
                Let Uddom send on your behalf without a provider of your own. Available on the
                Scale plan.
              </p>
            </article>
          </div>
          <p className="featureSplit__docs" style={{ marginTop: 22 }}>
            Delivery setup, templates and importing are covered in the{" "}
            <a href="https://docs.uddomcro.com/email-marketing/index.html" rel="noreferrer">
              user documentation
            </a>
            .
          </p>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="pageCta">
            <div>
              <h2 className="h3">Start with a list.</h2>
              <p className="pageCta__text">
                Import your contacts with a consent confirmation, build a template, and send
                your first campaign — then let recovery run on its own.
              </p>
            </div>
            <div className="pageCta__actions">
              <a className="btn btn--primary" href={installHref}>
                {site.ctas.primary}
              </a>
              <Link className="btn btn--ghost" href="/features/abandoned-checkout-recovery">
                Abandoned Checkout Recovery
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
