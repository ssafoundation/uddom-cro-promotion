"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { platformMenu, primaryNav } from "@/data/navigation";
import { resolveInstallHref, site } from "@/data/site";
import BrandLogo from "@/components/ui/BrandLogo";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  const installHref = resolveInstallHref(site.installUrl, site.installFallbackAnchor);

  /* Compact the bar after a short scroll. */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll while the mobile sheet is open. */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /* Escape closes the mobile sheet. */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /* Active section highlight — home-page sections only. */
  useEffect(() => {
    const ids = ["platform", "cro", "offers", "analytics", "ab-testing", "email", "subscriptions", "pricing", "faq", "how-it-works"];
    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter((n): n is HTMLElement => Boolean(n));
    if (nodes.length === 0 || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`/#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  return (
    <header className={["nav", scrolled ? "nav--scrolled" : ""].join(" ").trim()}>
      <div className="container container--wide nav__inner">
        <a className="nav__brand" href="/" aria-label={`${site.name} home`}>
          <BrandLogo variant="lockup" priority sizes="110px" className="nav__logo" alt="Uddom" />
        </a>

        <nav aria-label="Primary">
          <ul className="nav__links">
            <li className="nav__item">
              <a className="nav__link" href="/#platform">
                Platform
                <span className="nav__caret" aria-hidden="true" />
              </a>
              <div className="nav__dropdown" role="group" aria-label="Platform areas">
                {platformMenu.map((item) => (
                  <a className="nav__dropdownItem" href={item.href} key={item.label}>
                    <span className="nav__dropdownDot" aria-hidden="true" />
                    <span>
                      <span className="nav__dropdownName">{item.label}</span>
                      <span className="nav__dropdownDesc">{item.description}</span>
                    </span>
                  </a>
                ))}
              </div>
            </li>
            {primaryNav.map((link) => (
              <li className="nav__item" key={link.href}>
                <a
                  className={[
                    "nav__link",
                    link.href.includes("#")
                      ? active === link.href
                        ? "nav__link--active"
                        : ""
                      : pathname === link.href
                        ? "nav__link--active"
                        : "",
                  ]
                    .filter(Boolean)
                    .join(" ")
                    .trim()}
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav__actions">
          <a className="btn btn--primary" href={installHref}>
            {site.ctas.primary}
          </a>
          <button
            type="button"
            className="nav__menuBtn"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="nav__menuBars" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={["nav__mobile", open ? "nav__mobileOpen" : ""].join(" ").trim()}
        hidden={!open}
      >
        <nav aria-label="Mobile">
          <div className="nav__mobileGroup">
            <p className="nav__mobileLabel">Platform</p>
            {platformMenu.map((item) => (
              <a
                className="nav__mobileLink"
                href={item.href}
                key={item.label}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="nav__mobileGroup">
            {primaryNav.map((link) => (
              <a
                className="nav__mobileLink"
                href={link.href}
                key={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="nav__mobileCtas">
            <a className="btn btn--primary" href={installHref} onClick={() => setOpen(false)}>
              {site.ctas.primary}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
