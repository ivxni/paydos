import type { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faPhone, faEnvelope, faStar } from "@fortawesome/free-solid-svg-icons";
import { PageHeader } from "@/components/sections/PageHeader";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/contact/ContactForm";
import { OpeningHours } from "@/components/layout/OpeningHours";
import { MapEmbed } from "@/components/sections/MapEmbed";
import { ADDRESS, CONTACT } from "@/lib/site";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Kontakt & Anfahrt",
  description:
    "Kontakt zur Paydos Shisha & Okey Lounge: Grabenstraße 2, 71672 Marbach am Neckar. Adresse, Telefon, Instagram, Öffnungszeiten und Anfahrt auf der Karte.",
  alternates: { canonical: "/kontakt" },
  openGraph: {
    title: "Kontakt & Anfahrt – Paydos Lounge",
    description: "Adresse, Öffnungszeiten und Anfahrt zur Paydos Lounge in Marbach am Neckar.",
    url: "/kontakt",
  },
};

const directions = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  ADDRESS.mapsQuery,
)}`;

export default function KontaktPage() {
  return (
    <>
      <PageHeader
        eyebrow="Kontakt"
        title={
          <>
            Sag <em>Hallo.</em>
          </>
        }
        intro="Fragen, größere Runden oder einfach ein netter Gruß – schreib uns direkt per WhatsApp. Den Tisch buchst du am schnellsten über die Reservierung."
      />

      <Section>
        <div className={styles.layout}>
          <ContactForm />

          <div className={styles.aside}>
            <ul className={styles.details}>
              <li className={styles.row}>
                <span className={styles.icon}>
                  <FontAwesomeIcon icon={faLocationDot} />
                </span>
                <span>
                  <span className={styles.rowLabel}>Adresse</span>
                  <a
                    href={directions}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.rowValue}
                  >
                    {ADDRESS.street}, {ADDRESS.postalCode} {ADDRESS.city}
                  </a>
                </span>
              </li>
              <li className={styles.row}>
                <span className={styles.icon}>
                  <FontAwesomeIcon icon={faPhone} />
                </span>
                <span>
                  <span className={styles.rowLabel}>Telefon</span>
                  <a href={`tel:${CONTACT.phoneHref}`} className={styles.rowValue}>
                    {CONTACT.phoneDisplay}
                  </a>
                </span>
              </li>
              <li className={styles.row}>
                <span className={styles.icon}>
                  <FontAwesomeIcon icon={faInstagram} />
                </span>
                <span>
                  <span className={styles.rowLabel}>Instagram</span>
                  <a
                    href={CONTACT.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.rowValue}
                  >
                    @{CONTACT.instagram}
                  </a>
                </span>
              </li>
              <li className={styles.row}>
                <span className={styles.icon}>
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <span>
                  <span className={styles.rowLabel}>E-Mail</span>
                  <a href={`mailto:${CONTACT.email}`} className={styles.rowValue}>
                    {CONTACT.email}
                  </a>
                </span>
              </li>
              <li className={styles.row}>
                <span className={styles.icon}>
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span>
                  <span className={styles.rowLabel}>Bewertung</span>
                  <a
                    href={CONTACT.googleReviewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.rowValue}
                  >
                    Auf Google bewerten
                  </a>
                </span>
              </li>
            </ul>

            <div className={styles.hoursBlock}>
              <h2 className={styles.hoursTitle}>Öffnungszeiten</h2>
              <OpeningHours />
            </div>
          </div>
        </div>
      </Section>

      <Section tone="sunken">
        <div className={styles.mapTitle}>
          <SectionHeading
            eyebrow="Anfahrt"
            title={
              <>
                So findest du <em>uns.</em>
              </>
            }
          />
        </div>
        <MapEmbed ratio="16 / 9" />
      </Section>
    </>
  );
}
