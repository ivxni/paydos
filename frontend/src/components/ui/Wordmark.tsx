import styles from "./Wordmark.module.scss";

type Props = {
  /** show the SHISHA · OKEY LOUNGE sub-line */
  withTagline?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
};

/**
 * Typographic Paydos wordmark — exactly as the design system renders it:
 * "PAYDOS" in the wide-tracked sans with the silver chrome gradient clipped on,
 * over a finely-tracked sub-line. (The supplied raster logo is chrome-on-black
 * and unusable on glass/light surfaces, so the brand uses this CSS wordmark.)
 */
export function Wordmark({ withTagline = true, size = "md", className }: Props) {
  return (
    <span className={`${styles.mark} ${styles[size]} ${className ?? ""}`}>
      <span className={styles.name}>PAYDOS</span>
      {withTagline && <span className={styles.tag}>Shisha · Okey Lounge</span>}
    </span>
  );
}
