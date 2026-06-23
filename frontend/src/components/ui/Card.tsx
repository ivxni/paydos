import styles from "./Card.module.scss";

type Props = {
  children: React.ReactNode;
  interactive?: boolean;
  glow?: boolean;
  className?: string;
  padding?: "none" | "sm" | "md" | "lg";
};

export function Card({
  children,
  interactive = false,
  glow = false,
  className,
  padding = "md",
}: Props) {
  return (
    <div
      className={[
        styles.card,
        styles[`p-${padding}`],
        interactive ? styles.interactive : "",
        glow ? styles.glow : "",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
