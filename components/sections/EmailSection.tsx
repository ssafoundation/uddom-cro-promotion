import { Fragment } from "react";

import SectionHeading from "@/components/ui/SectionHeading";
import { emailCapabilities } from "@/data/features";

const journey = ["Browse", "Abandon", "Recovery email", "Return", "Purchase"];

/** Email marketing section, with a compact mail interface mock. */
export default function EmailSection() {
  return (
    <section className="section" id="email" aria-labelledby="email-title">
      <div className="container">
        <SectionHeading
          eyebrow="Email marketing"
          title={<span id="email-title">Turn one-time buyers into returning customers.</span>}
          lead="Build lists, import contacts with consent, design reusable templates and send marketing email — then recover the checkouts that did not finish."
        />

        <div className="emailGrid">
          <div className="reveal" data-reveal>
            <ul className="problemList">
              {emailCapabilities.map((c) => (
                <li className="problemItem" key={c}>
                  <span
                    className="problemItem__x"
                    aria-hidden="true"
                    style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
                  >
                    ✓
                  </span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal" data-reveal data-delay="1">
            <div className="fpanel">
              <div className="fpanel__top">
                <span className="dots" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </span>
                <span className="fpanel__title">uddom · email</span>
              </div>
              <div className="fpanel__body">
                <div className="mailList">
                  {[
                    { name: "Newsletter subscribers", meta: "1,240" },
                    { name: "VIP customers", meta: "86" },
                    { name: "Abandoned checkouts", meta: "Due: 12" },
                  ].map((row) => (
                    <div className="mailRow" key={row.name}>
                      <span className="mailRow__avatar" aria-hidden="true" />
                      <span>{row.name}</span>
                      <span className="mailRow__meta">{row.meta}</span>
                    </div>
                  ))}
                </div>

                <div className="chart" aria-hidden="true" style={{ height: 86 }}>
                  {[34, 42, 50, 58, 66, 74, 82, 90].map((h, i) => (
                    <i key={i} style={{ height: `${h}%` }} />
                  ))}
                </div>

                <p className="small" style={{ color: "var(--panel-muted)" }}>
                  Send to subscribed contacts only — up to 100 recipients per run.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="journey reveal" data-reveal style={{ marginTop: 26 }}>
          <div className="journey__row journey__row--good">
            <p className="journey__label">The journey Uddom covers</p>
            <div className="journey__steps">
              {journey.map((step, i) => (
                <Fragment key={step}>
                  <span className="journey__step">{step}</span>
                  {i < journey.length - 1 ? (
                    <span className="journey__arrow" aria-hidden="true">
                      →
                    </span>
                  ) : null}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
