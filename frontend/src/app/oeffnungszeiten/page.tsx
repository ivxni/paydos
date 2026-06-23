import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/sections/PageHeader";
import { Section } from "@/components/ui/Section";
import { OpeningHours } from "@/components/layout/OpeningHours";
import { CtaBand } from "@/components/sections/CtaBand";
import { ADDRESS } from "@/lib/site";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Öffnungszeiten",
  description:
    "Öffnungszeiten der Paydos Shisha & Okey Lounge in Marbach am Neckar: Dienstag bis Sonntag, freitags und samstags bis 03:00 Uhr. Montag Ruhetag.",
  alternates: { canonical: "/oeffnungszeiten" },
  openGraph: {
    title: "Öffnungszeiten – Paydos Lounge",
    description: "Wann die Paydos Lounge in Marbach am Neckar für dich geöffnet hat.",
    url: "/oeffnungszeiten",
  },
};

export default function OeffnungszeitenPage() {
  return (
    <>
      <PageHeader
        eyebrow="Öffnungszeiten"
        title={
          <>
            Wann wir <em>da sind.</em>
          </>
        }
        intro={`Dienstag bis Sonntag geöffnet, freitags und samstags bis spät. Montag ist Ruhetag. ${ADDRESS.street}, ${ADDRESS.city}.`}
      />

      <Section>
        <div className={styles.layout}>
          <div className={styles.hoursCard}>
            <h2 className={styles.hoursTitle}>Unsere Zeiten</h2>
            <OpeningHours />
          </div>

          <div className={styles.media}>
            <Image
              src="/images/terrace-lights.webp"
              alt="Terrasse der Paydos Lounge am Abend"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className={styles.img}
            />
            <div className={styles.mediaText}>
              <h2 className={styles.mediaTitle}>Spät wird’s am Wochenende</h2>
              <p className={styles.mediaCopy}>
                Freitag und Samstag bleibt die Terrasse bis 03:00 Uhr offen – der
                ruhigste Platz in Marbach, wenn der Tag längst vorbei ist.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <CtaBand
        title={
          <>
            Heute schon <em>was vor?</em>
          </>
        }
        text="Sichere dir deinen Tisch – Tag, Uhrzeit, Personen, Name. Mehr braucht's nicht."
      />
    </>
  );
}
