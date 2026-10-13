import SectionHeading from "@/components/ui/SectionHeading";
import { howItWorks } from "@/data/features";

/** Four-step setup journey. */
export default function HowItWorksSection() {
  return (
    <section className="section section--light" id="how-it-works" aria-labelledby="how-title">
      <div className="container">
        <SectionHeading
          eyebrow="How it works"
          title={<span id="how-title">From install to optimization.</span>}
          lead="Uddom is built to be understandable on day one. Four steps, no code."
          center
        />

        <div className="howGrid">
          <div className="howGrid__left">
            <ol className="steps">
              {howItWorks.map((step, i) => (
                <li
                  className="step reveal"
                  key={step.title}
                  data-reveal
                  data-delay={String(i + 1)}
                >
                  <span className="step__num" aria-hidden="true">
                    {i + 1}
                  </span>
                  <h3 className="card__title">{step.title}</h3>
                  <p className="card__text">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="howGrid__right reveal" data-reveal data-delay="1">
            <figure className="howArt">
              <img
                src="/images/how-it-works.webp"
                alt="Isometric SaaS workflow: install, configure, measure and optimize — four connected panels"
                width={1219}
                height={954}
                loading="lazy"
                decoding="async"
              />
              <figcaption className="shotFrame__caption">
                From install to optimisation — four steps, no code.
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
