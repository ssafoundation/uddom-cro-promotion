import FaqList from "@/components/sections/FaqList";
import SectionHeading from "@/components/ui/SectionHeading";

/** The home-page FAQ section: heading plus the shared accordion. */
export default function FaqSection() {
  return (
    <section className="section section--light" id="faq" aria-labelledby="faq-title">
      <div className="container">
        <SectionHeading
          eyebrow="FAQ"
          title={<span id="faq-title">Questions, answered.</span>}
          center
        />
        <FaqList />
      </div>
    </section>
  );
}
