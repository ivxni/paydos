import styles from "./Container.module.scss";

type Props = {
  children: React.ReactNode;
  /** max content width */
  size?: "md" | "lg" | "xl";
  className?: string;
};

export function Container({ children, size = "lg", className }: Props) {
  return (
    <div className={`${styles.container} ${styles[size]} ${className ?? ""}`}>
      {children}
    </div>
  );
}
