import { Fragment } from "react";

import SectionHeading from "@/components/ui/SectionHeading";
import { journey, problemItems } from "@/data/features";

/** Problem section: the leaky journey without Uddom, and the guided one with it. */
export default function ProblemSection() {
  return (
    <section className="section" id="problem" aria-labelledby="problem-title">
      <div className="container">
        <SectionHeading
          eyebrow="The real problem"
          title={
            <span id="problem-title">
              Your store doesn&rsquo;t need more traffic. It needs more from the traffic you
              already have.
            </span>
          }
          lead="Visitors arrive, browse, and leave. The gap is rarely at the top of the funnel — it is in the small moments between interest and purchase."
        />

        <div className="problemGrid">
          <ul className="problemList reveal" data-reveal>
            {problemItems.map((item) => (
              <li className="problemItem" key={item}>
                <span className="problemItem__x" aria-hidden="true">
                  ✕
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="journey reveal" data-reveal data-delay="1">
            <div className="journey__row">
              <p className="journey__label">Without Uddom</p>
              <div className="journey__steps">
                {journey.without.map((step, i) => (
                  <Fragment key={step}>
                    <span className="journey__step">{step}</span>
                    {i < journey.without.length - 1 ? (
                      <span className="journey__arrow" aria-hidden="true">
                        →
                      </span>
                    ) : null}
                  </Fragment>
                ))}
              </div>
            </div>

            <div className="journey__row journey__row--good">
              <p className="journey__label">With Uddom</p>
              <div className="journey__steps">
                {journey.withUddom.map((step, i) => (
                  <Fragment key={step}>
                    <span className="journey__step">{step}</span>
                    {i < journey.withUddom.length - 1 ? (
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
      </div>
    </section>
  );
}
