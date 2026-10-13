import Link from "next/link";

import SectionHeading from "@/components/ui/SectionHeading";
import { getModule } from "@/data/modules";
import { symptoms } from "@/data/symptoms";

/**
 * The entry point for the features hub: name the symptom, then point at the
 * modules that answer it. Every link is a real page for a module the app ships.
 */
export default function SymptomGuide() {
  return (
    <section className="section section--light" id="find-your-modules">
      <div className="container">
        <SectionHeading
          eyebrow="Start here"
          title="Where is your store leaking sales?"
          lead="Find the symptom that matches your store, and jump straight to the modules that address it."
          center
        />

        <div className="symptoms">
          {symptoms.map((symptom, i) => {
            const modules = (symptom.modules ?? [])
              .map((key) => getModule(key))
              .filter((module): module is NonNullable<typeof module> => Boolean(module));

            return (
              <article
                className="symptom reveal"
                data-reveal
                data-delay={i < 3 ? String(i + 1) : undefined}
                key={symptom.id}
              >
                <span className="symptom__num" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="symptom__title">{symptom.title}</h3>
                <p className="symptom__text">{symptom.text}</p>

                <div className="chipRow symptom__links">
                  {modules.map((module) => (
                    <Link className="chip" href={`/features/${module.key}`} key={module.key}>
                      {module.title}
                    </Link>
                  ))}
                  {symptom.pages?.map((page) => (
                    <Link className="chip chip--page" href={page.href} key={page.href}>
                      {page.label}
                    </Link>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
