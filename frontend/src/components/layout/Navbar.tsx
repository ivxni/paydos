"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/Button";
import { Wordmark } from "@/components/ui/Wordmark";
import { NAV_LINKS } from "@/lib/site";
import styles from "./Navbar.module.scss";

/** Floating frosted-pill header with a portal-rendered mobile drawer. */
export function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // One-time mount gate so the portal only renders client-side (SSR-safe).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the drawer is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.wrap}>
        <div className={styles.inner}>
          <Link href="/" className={styles.brand} aria-label="Paydos Lounge – Startseite">
            <Wordmark size="md" withTagline={false} />
          </Link>

          <nav className={styles.nav} aria-label="Hauptnavigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.navLink} ${isActive(link.href) ? styles.navLinkActive : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className={styles.actions}>
            <Button href="/reservierung" variant="primary" size="sm" className={styles.cta}>
              Tisch reservieren
            </Button>
            <button
              type="button"
              className={styles.burger}
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
            >
              <FontAwesomeIcon icon={mobileOpen ? faXmark : faBars} />
            </button>
          </div>
        </div>
      </div>

      {mounted &&
        createPortal(
          <div
            id="mobile-nav"
            className={`${styles.drawer} ${mobileOpen ? styles.drawerOpen : ""}`}
            aria-hidden={!mobileOpen}
          >
            <button
              type="button"
              className={styles.scrim}
              tabIndex={mobileOpen ? 0 : -1}
              aria-label="Menü schließen"
              onClick={() => setMobileOpen(false)}
            />
            <div className={styles.panel}>
              <div className={styles.panelHeader}>
                <span className={styles.panelTitle}>Menü</span>
                <button
                  type="button"
                  className={styles.panelClose}
                  onClick={() => setMobileOpen(false)}
                  aria-label="Menü schließen"
                >
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              </div>

              <nav className={styles.panelNav} aria-label="Mobile Navigation">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`${styles.panelLink} ${isActive(link.href) ? styles.panelLinkActive : ""}`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className={styles.panelActions}>
                <Button
                  href="/karte"
                  variant="glass"
                  size="md"
                  className={styles.panelBtn}
                  onClick={() => setMobileOpen(false)}
                >
                  Zur Karte
                </Button>
                <Button
                  href="/reservierung"
                  variant="primary"
                  size="md"
                  className={styles.panelBtn}
                  onClick={() => setMobileOpen(false)}
                >
                  Tisch reservieren
                </Button>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </header>
  );
}
