import styles from "./Form.module.scss";

type FieldProps = {
  label: string;
  htmlFor?: string;
  hint?: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
};

export function Field({ label, htmlFor, hint, error, children, className }: FieldProps) {
  return (
    <div className={`${styles.field} ${className ?? ""}`}>
      <label className={styles.label} htmlFor={htmlFor}>
        {label}
      </label>
      {children}
      {error ? (
        <span className={styles.error}>{error}</span>
      ) : hint ? (
        <span className={styles.hint}>{hint}</span>
      ) : null}
    </div>
  );
}

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & { invalid?: boolean };
export function TextInput({ invalid, className, ...rest }: InputProps) {
  return (
    <input
      // Password managers (NordPass etc.) inject data-* attributes on form
      // fields before hydration — suppress that false-positive mismatch.
      suppressHydrationWarning
      className={`${styles.control} ${invalid ? styles.invalid : ""} ${className ?? ""}`}
      {...rest}
    />
  );
}

type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & { invalid?: boolean };
export function TextArea({ invalid, className, ...rest }: TextAreaProps) {
  return (
    <textarea
      suppressHydrationWarning
      className={`${styles.control} ${styles.textarea} ${invalid ? styles.invalid : ""} ${className ?? ""}`}
      {...rest}
    />
  );
}

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & { invalid?: boolean };
export function NativeSelect({ invalid, className, children, ...rest }: SelectProps) {
  return (
    <div className={styles.selectWrap}>
      <select
        suppressHydrationWarning
        className={`${styles.control} ${styles.select} ${invalid ? styles.invalid : ""} ${className ?? ""}`}
        {...rest}
      >
        {children}
      </select>
    </div>
  );
}
