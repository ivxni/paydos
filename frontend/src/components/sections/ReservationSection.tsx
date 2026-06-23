import { Section } from "@/components/ui/Section";
import { ReservationWidget } from "@/components/reservation/ReservationWidget";
import { ADDRESS, CONTACT } from "@/lib/site";
import styles from "./ReservationSection.module.scss";

type Props = {
  /** heading level — h1 on the dedicated page, h2 within the home page */
  headingLevel?: "h1" | "h2";
  tone?: "page" | "sunken";
};

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
            Wähl Datum, Uhrzeit und Personen, gib deinen Namen ein – fertig. Kein Konto,
            kein Formular-Marathon. Wir bestätigen deinen Tisch direkt.
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
          <ReservationWidget />
        </div>
      </div>
    </Section>
  );
}
