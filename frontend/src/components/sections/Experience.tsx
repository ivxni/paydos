import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "./Experience.module.scss";

const PILLARS = [
  {
    no: "01",
    label: "Shisha",
    title: "Jeder Kopf von Hand gepackt.",
    text: "Über 40 Sorten – modern komponiert oder klassisch. Wir packen jeden Kopf frisch und mit Tabak, der seinen Preis wert ist. Langsam, rund, kein Kratzen.",
    img: "/images/drinks-daylight.webp",
    alt: "Frisch gepackte Shisha auf der Terrasse",
  },
  {
    no: "02",
    label: "Okey & lange Abende",
    title: "Der Tisch, an dem man bleibt.",
    text: "Sammel deine Crew an den langen Tischen, leg eine Partie Okey ein und lass den Abend laufen. Wir kümmern uns um Kohle und Karte.",
    img: "/images/okey-room.webp",
    alt: "Okey-Spielbereich mit Samtmöbeln",
  },
  {
    no: "03",
    label: "Terrasse",
    title: "Draußen, unter Lichterketten.",
    text: "Wenn der Abend warm ist, sitzt man bei uns draußen – der ruhigste Platz in Marbach. Eine Atmosphäre, in der sich jeder sofort wohlfühlt.",
    img: "/images/terrace-lights.webp",
    alt: "Terrasse der Paydos Lounge mit Lichterketten am Abend",
  },
];

export function Experience() {
  return (
    <Section id="erlebnis" tone="sunken">
      <SectionHeading
        eyebrow="Das Paydos"
        title={
          <>
            Kein Laden. <em>Ein Ort.</em>
          </>
        }
        intro="Wir verkaufen keine Massenware – wir legen Wert auf Qualität und auf eine Atmosphäre, in der man gern länger bleibt."
      />

      <div className={styles.pillars}>
        {PILLARS.map((p, i) => (
          <article key={p.no} className={`${styles.row} ${i % 2 === 1 ? styles.reverse : ""}`}>
            <div className={styles.media}>
              <div className={styles.imgWrap}>
                <Image
                  src={p.img}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  className={styles.img}
                />
              </div>
            </div>
            <div className={styles.text}>
              <p className={styles.label}>{p.label}</p>
              <h3 className={styles.title}>{p.title}</h3>
              <p className={styles.body}>{p.text}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
