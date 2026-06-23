import styles from "./Tag.module.scss";

type Props = {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  /** static (non-interactive) label */
  as?: "button" | "span";
  ariaLabel?: string;
};

export function Tag({ children, active = false, onClick, as = "button", ariaLabel }: Props) {
  if (as === "span") {
    return <span className={`${styles.tag} ${active ? styles.active : ""}`}>{children}</span>;
  }
  return (
    <button
      type="button"
      aria-pressed={active}
      aria-label={ariaLabel}
      onClick={onClick}
      className={`${styles.tag} ${styles.btn} ${active ? styles.active : ""}`}
    >
      {children}
    </button>
  );
}
