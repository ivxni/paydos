import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ReservationWidget } from "@/components/reservation/ReservationWidget";
import { ADDRESS, CONTACT } from "@/lib/site";
import styles from "./ReservationSection.module.scss";

type Props = {
  /** heading level — h1 on the dedicated page, h2 within the home page */
  headingLevel?: "h1" | "h2";
  tone?: "page" | "sunken";
};

// Online-Buchung vorerst deaktiviert. Das Widget + der /api/reservation-Flow
// bleiben erhalten — zum Wiederaktivieren einfach auf `true` setzen.
const RESERVATION_ENABLED = false;

const INFO: [string, string][] = [
  ["Öffnungszeiten", "Di–Do ab 18 · Fr & Sa ab 15 Uhr"],
  ["Telefon", CONTACT.phoneDisplay],
  ["Adresse", `${ADDRESS.street}, ${ADDRESS.city}`],
];

export function ReservationSection({ headingLevel = "h2", tone = "page" }: Props) {
  const Heading = headingLevel;
  return (
    <Section id="reservierung" tone={tone}>
      <div className={styles.layout}>
        <div className={styles.pitch}>
          <p className={styles.eyebrow}>
            <span className={styles.tick} aria-hidden />
            Reservierung
          </p>
          <Heading className={styles.title}>
            Sichere dir <em>deinen Abend.</em>
          </Heading>
          <p className={styles.lead}>
            {RESERVATION_ENABLED
              ? "Wähl Datum, Uhrzeit und Personen, gib deinen Namen ein – fertig. Kein Konto, kein Formular-Marathon. Wir bestätigen deinen Tisch direkt."
              : "Schreib uns einfach auf Instagram oder ruf kurz an – wir halten dir gern einen Tisch frei."}
          </p>

          <dl className={styles.info}>
            {INFO.map(([k, v]) => (
              <div key={k} className={styles.infoRow}>
                <dt className={styles.infoLabel}>{k}</dt>
                <dd className={styles.infoValue}>{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className={styles.form}>
          {RESERVATION_ENABLED ? (
            <ReservationWidget />
          ) : (
            <div className={styles.contactCard}>
              <p className={styles.contactLabel}>Tisch anfragen</p>
              <p className={styles.contactText}>
                Reservierungen nehmen wir aktuell direkt entgegen – ruf uns an oder
                schreib uns eine Nachricht auf Instagram. Wir melden uns schnell zurück.
              </p>
              <div className={styles.contactActions}>
                <Button
                  href={`tel:${CONTACT.phoneHref}`}
                  variant="primary"
                  size="lg"
                  iconLeft={faPhone}
                  fullWidth
                >
                  {CONTACT.phoneDisplay}
                </Button>
                <Button
                  href={CONTACT.instagramUrl}
                  external
                  variant="glass"
                  size="lg"
                  iconLeft={faInstagram}
                  fullWidth
                >
                  @{CONTACT.instagram}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
