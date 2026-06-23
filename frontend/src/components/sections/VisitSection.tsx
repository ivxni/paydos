import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { MapEmbed } from "@/components/sections/MapEmbed";
import { OpenStatusPill } from "@/components/ui/OpenStatusPill";
import { ADDRESS, CONTACT } from "@/lib/site";
import styles from "./VisitSection.module.scss";

const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  ADDRESS.mapsQuery,
)}`;

export function VisitSection() {
  return (
    <Section id="anfahrt" tone="page">
      <div className={styles.layout}>
        <div className={styles.info}>
          <p className={styles.eyebrow}>
            <span className={styles.tick} aria-hidden />
            Anfahrt
          </p>
          <h2 className={styles.title}>
            Mitten in <em>Marbach.</em>
          </h2>
          <p className={styles.lead}>
            Du findest uns in der {ADDRESS.street} – ein paar Schritte von der Altstadt.
            Komm vorbei, wir halten dir den Platz warm.
          </p>

          <OpenStatusPill className={styles.pill} />

          <dl className={styles.meta}>
            <div className={styles.metaRow}>
              <dt className={styles.metaLabel}>Adresse</dt>
              <dd className={styles.metaValue}>
                {ADDRESS.street}
                <br />
                {ADDRESS.postalCode} {ADDRESS.city}
              </dd>
            </div>
            <div className={styles.metaRow}>
              <dt className={styles.metaLabel}>Telefon</dt>
              <dd className={styles.metaValue}>
                <a href={`tel:${CONTACT.phoneHref}`}>{CONTACT.phoneDisplay}</a>
              </dd>
            </div>
          </dl>

          <div className={styles.actions}>
            <Button href={directionsUrl} variant="primary" external>
              Route planen
            </Button>
            <Button href="/kontakt" variant="glass">
              Kontakt &amp; Details
            </Button>
          </div>
        </div>

        <div className={styles.mapCol}>
          <MapEmbed ratio="4 / 5" className={styles.map} />
        </div>
      </div>
    </Section>
  );
}
