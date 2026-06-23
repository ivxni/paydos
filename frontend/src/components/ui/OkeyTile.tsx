import styles from "./OkeyTile.module.scss";

type Props = {
  value?: string;
  color?: "ink" | "purple" | "silver";
  size?: "sm" | "md" | "lg";
  className?: string;
};

/** The brand's signature Okey game-tile motif (cf. 01 / 60 in the logo). */
export function OkeyTile({ value = "01", color = "ink", size = "md", className }: Props) {
  return (
    <span
      className={`${styles.tile} ${styles[size]} ${styles[color]} ${className ?? ""}`}
      aria-hidden
    >
      {value}
      <span className={styles.dot} />
    </span>
  );
}
