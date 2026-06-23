import styles from "./SectionHeading.module.scss";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  /** heading level for semantics */
  as?: "h1" | "h2";
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  as = "h2",
}: Props) {
  const Heading = as;
  return (
    <div className={`${styles.wrap} ${styles[align]}`}>
      {eyebrow && (
        <p className={styles.eyebrow}>
          <span className={styles.tick} aria-hidden />
          {eyebrow}
        </p>
      )}
      <Heading className={styles.title}>{title}</Heading>
      {intro && <p className={styles.intro}>{intro}</p>}
    </div>
  );
}
