import BrandLogo from "@/components/ui/BrandLogo";
import { footerColumns } from "@/data/navigation";
import { site } from "@/data/site";

/**
 * Footer. Links only ever point at sections that exist on this page; anything
 * without a live destination yet is rendered as plain text with a "soon" tag
 * rather than a broken link.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container container--wide">
        <div className="footer__grid">
          <div>
            <a className="nav__brand" href="#top" aria-label={`${site.name} home`}>
              <span className="nav__mark">
                <BrandLogo sizes="32px" />
              </span>
              <span className="brand__wordmark">{site.name}</span>
            </a>
            <p className="footer__brandText">
              One Shopify growth platform for CRO, offers, upsells, analytics, A/B testing,
              email marketing and subscriptions.
            </p>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <h2 className="footer__colTitle">{col.title}</h2>
              <ul>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a className="footer__link" href={link.href}>
                      {link.label}
                    </a>
                  </li>
                ))}
                {col.unavailable?.map((item) => (
                  <li key={item.label}>
                    <span className="footer__soon">
                      {item.label}
                      <span className="footer__soonTag">{item.note}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer__bottom">
          <span>
            © {year} {site.name}. All rights reserved.
          </span>
          <span>{site.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
