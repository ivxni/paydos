import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "./Gallery.module.scss";

const SHOTS = [
  { img: "/images/terrace-tables.webp", alt: "Terrasse mit Lichterketten und Tischen", tall: true },
  { img: "/images/neon-paydos.webp", alt: "Paydos Neonschriftzug auf begrünter Wand" },
  { img: "/images/bar-sign.webp", alt: "Beleuchtetes Paydos-Schild an der Bar" },
  { img: "/images/cocktail-red.webp", alt: "Mocktail in stimmungsvollem Licht", tall: true },
  { img: "/images/okey-room.webp", alt: "Spielbereich mit Okey-Tischen" },
  { img: "/images/bar-tulips.webp", alt: "Bartheke mit frischen Tulpen" },
];

export function Gallery() {
  return (
    <Section id="galerie" tone="sunken">
      <SectionHeading
        eyebrow="Atmosphäre"
        title={<>Ein Blick <em>hinein.</em></>}
        intro="Schwarz, Silber, ein Hauch Violett – und draußen die Lichterkette."
      />
      <div className={styles.grid}>
        {SHOTS.map((s) => (
          <figure key={s.img} className={`${styles.item} ${s.tall ? styles.tall : ""}`}>
            <Image
              src={s.img}
              alt={s.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1180px) 50vw, 33vw"
              className={styles.img}
            />
          </figure>
        ))}
      </div>
    </Section>
  );
}
