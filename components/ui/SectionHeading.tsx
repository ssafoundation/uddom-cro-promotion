import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  center?: boolean;
  className?: string;
};

/** Consistent section header: eyebrow, headline and supporting lead. */
export default function SectionHeading({
  eyebrow,
  title,
  lead,
  center,
  className,
}: Props) {
  return (
    <div
      className={[
        "sectionHead",
        center ? "sectionHead--center" : "",
        "reveal",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
      data-reveal
    >
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2 className="h2 sectionHead__title">{title}</h2>
      {lead ? <p className="lead sectionHead__lead">{lead}</p> : null}
    </div>
  );
}
