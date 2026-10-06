"use client";

import { useState } from "react";

import SectionHeading from "@/components/ui/SectionHeading";
import { faqItems } from "@/data/faq";

/**
 * FAQ accordion. Buttons carry aria-expanded / aria-controls and each answer is
 * a labelled region, so it is fully keyboard accessible. The open/close
 * animation is a CSS grid-row transition and is disabled under reduced motion.
 */
export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section section--alt" id="faq" aria-labelledby="faq-title">
      <div className="container">
        <SectionHeading
          eyebrow="FAQ"
          title={<span id="faq-title">Questions, answered.</span>}
          center
        />

        <div className="faq">
          {faqItems.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                className={["faqItem", isOpen ? "faqItem--open" : ""].join(" ").trim()}
                key={item.q}
              >
                <h3 style={{ margin: 0 }}>
                  <button
                    type="button"
                    className="faqItem__q"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                    id={`faq-question-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span>{item.q}</span>
                    <span className="faqItem__icon" aria-hidden="true" />
                  </button>
                </h3>
                <div className="faqItem__answerWrap">
                  <div
                    className="faqItem__answer"
                    id={`faq-answer-${i}`}
                    role="region"
                    aria-labelledby={`faq-question-${i}`}
                    hidden={!isOpen}
                  >
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
