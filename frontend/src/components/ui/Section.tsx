import styles from "./Section.module.scss";
import { Container } from "./Container";

type Props = {
  children: React.ReactNode;
  id?: string;
  /** background treatment */
  tone?: "page" | "sunken" | "raised";
  size?: "md" | "lg" | "xl";
  spacing?: "normal" | "tight" | "loose";
  className?: string;
  /** drop the inner container (full-bleed content) */
  bleed?: boolean;
};

export function Section({
  children,
  id,
  tone = "page",
  size = "lg",
  spacing = "normal",
  className,
  bleed = false,
}: Props) {
  return (
    <section
      id={id}
      className={`${styles.section} ${styles[tone]} ${styles[spacing]} ${className ?? ""}`}
    >
      {bleed ? children : <Container size={size}>{children}</Container>}
    </section>
  );
}
