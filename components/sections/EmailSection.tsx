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
                    className="problemItem__x problemItem__x--yes"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal" data-reveal data-delay="1">
            <figure className="emailArt">
              <img
                src="/images/email-dashboard.webp"
                alt="Uddom email marketing dashboard — subscriber lists, VIP segment, abandoned checkouts and send-volume chart"
                width={1536}
                height={1024}
                loading="lazy"
                decoding="async"
              />
              <figcaption className="shotFrame__caption">
                Illustrative dashboard render — your real lists, templates and send logs live inside the app.
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="journey journey--mt reveal" data-reveal>
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
