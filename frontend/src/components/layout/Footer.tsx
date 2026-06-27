import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faPhone, faStar } from "@fortawesome/free-solid-svg-icons";
import { Container } from "@/components/ui/Container";
import { Wordmark } from "@/components/ui/Wordmark";
import { ADDRESS, CONTACT, NAV_LINKS, SITE } from "@/lib/site";
import styles from "./Footer.module.scss";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <Wordmark size="lg" withTagline={false} />
            <p className={styles.blurb}>
              Wo der Abend ausatmet. Handgepackte Shishas, eine kurze, feine Karte und
              lange Partien Okey – mitten in {ADDRESS.city}.
            </p>
            <div className={styles.socials}>
              <a
                href={CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.social}
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>

          <nav className={styles.col} aria-label="Footer-Navigation">
            <h2 className={styles.colTitle}>Menü</h2>
            <ul className={styles.links}>
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={styles.link}>
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/reservierung" className={styles.link}>
                  Reservierung
                </Link>
              </li>
            </ul>
          </nav>

          <div className={styles.col}>
            <h2 className={styles.colTitle}>Kontakt</h2>
            <ul className={styles.contact}>
              <li>
                <FontAwesomeIcon icon={faLocationDot} className={styles.cIcon} />
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS.mapsQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  {ADDRESS.street}, {ADDRESS.postalCode} {ADDRESS.city}
                </a>
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} className={styles.cIcon} />
                <a href={`tel:${CONTACT.phoneHref}`} className={styles.link}>
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <FontAwesomeIcon icon={faInstagram} className={styles.cIcon} />
                <a
                  href={CONTACT.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  @{CONTACT.instagram}
                </a>
              </li>
              <li>
                <FontAwesomeIcon icon={faStar} className={styles.cIcon} />
                <a
                  href={CONTACT.googleReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Auf Google bewerten
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className={styles.bar}>
          <p>
            © {year} {SITE.legalName} — made by WebLabs
          </p>
          <nav className={styles.legal} aria-label="Rechtliches">
            <Link href="/impressum" className={styles.link}>
              Impressum
            </Link>
            <Link href="/datenschutz" className={styles.link}>
              Datenschutz
            </Link>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
