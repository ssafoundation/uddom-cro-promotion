import type { ReactNode } from "react";
import Link from "next/link";

export type Crumb = { label: string; href?: string };

type Props = {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  /** Breadcrumb trail; the last item is the current page (no href). */
  crumbs?: Crumb[];
  /** Badges, meta or any extra node rendered under the lead. */
  meta?: ReactNode;
};

/**
 * The header for a sub-page. Keeps the eyebrow / headline / lead rhythm of the
 * landing sections while adding a breadcrumb trail back to the home page, so a
 * visitor always knows where they are.
 */
export default function PageHero({ eyebrow, title, lead, crumbs, meta }: Props) {
  return (
    <header className="pageHero">
      <div className="container">
        {crumbs && crumbs.length > 0 ? (
          <nav className="crumbs" aria-label="Breadcrumb">
            <ol>
              {crumbs.map((crumb, i) => (
                <li key={`${crumb.label}-${i}`}>
                  {crumb.href ? (
                    <Link className="crumb" href={crumb.href}>
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="crumb crumb--current" aria-current="page">
                      {crumb.label}
                    </span>
                  )}
                  {i < crumbs.length - 1 ? (
                    <span className="crumb__sep" aria-hidden="true">
                      /
                    </span>
                  ) : null}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}

        <div className="pageHero__body reveal" data-reveal>
          {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
          <h1 className="h1 pageHero__title">{title}</h1>
          {lead ? <p className="lead pageHero__lead">{lead}</p> : null}
          {meta ? <div className="pageHero__meta">{meta}</div> : null}
        </div>
      </div>
    </header>
  );
}
