import { ADDRESS } from "@/lib/site";
import styles from "./MapEmbed.module.scss";

type Props = {
  /** CSS aspect-ratio, e.g. "16 / 9" */
  ratio?: string;
  className?: string;
};

/** Keyless Google Maps embed (q + output=embed). */
export function MapEmbed({ ratio = "16 / 10", className }: Props) {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(
    ADDRESS.mapsQuery,
  )}&z=16&output=embed`;
  const view = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    ADDRESS.mapsQuery,
  )}`;
  return (
    <div className={`${styles.frame} ${className ?? ""}`} style={{ aspectRatio: ratio }}>
      <iframe
        src={src}
        title={`Karte – ${ADDRESS.street}, ${ADDRESS.city}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className={styles.iframe}
      />
      <a href={view} target="_blank" rel="noopener noreferrer" className={styles.open}>
        In Google Maps öffnen
      </a>
    </div>
  );
}
