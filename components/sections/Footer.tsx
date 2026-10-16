import BrandLogo from "@/components/ui/BrandLogo";
import { footerColumns } from "@/data/navigation";
import { site } from "@/data/site";

/**
 * Footer. Links point at real destinations: the features hub is a route, and the
 * section links are written as `/#section` so they work from any page. Anything
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
            <a className="nav__brand" href="/" aria-label={`${site.name} home`}>
              <BrandLogo variant="lockup" sizes="110px" className="nav__logo" />
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
                {col.links.map((link) => {
                  const external = link.href.startsWith("http");
                  return (
                    <li key={link.label}>
                      <a
                        className="footer__link"
                        href={link.href}
                        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                })}
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
          <span>
            A product of{" "}
            <a
              className="footer__credit"
              href="https://akhtarlabs.com"
              target="_blank"
              rel="noreferrer"
            >
              Akhtar Labs
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
