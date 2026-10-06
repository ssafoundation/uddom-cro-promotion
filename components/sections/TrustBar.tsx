import { trustStatements } from "@/data/features";

/**
 * Trust bar.
 *
 * No customer logos, counts, testimonials, awards or revenue claims are
 * invented. Until verified proof is available, this bar carries positioning
 * statements only. A duplicated set is rendered for the marquee loop and
 * hidden from assistive tech.
 */
export default function TrustBar() {
  const items = [...trustStatements, ...trustStatements];

  return (
    <section className="trustbar" aria-label="Why merchants can trust Uddom">
      <div className="container container--wide">
        <ul className="trustbar__track" aria-hidden="true">
          {items.map((s, i) => (
            <li className="trustItem" key={`${s}-${i}`}>
              <span className="trustItem__dot" />
              {s}
            </li>
          ))}
        </ul>
        <ul className="visually-hidden">
          {trustStatements.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
