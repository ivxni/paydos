"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import styles from "./Stepper.module.scss";

type Props = {
  value: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
  label?: string;
};

export function Stepper({ value, min = 1, max = 20, onChange, label = "Personen" }: Props) {
  const dec = () => onChange(Math.max(min, value - 1));
  const inc = () => onChange(Math.min(max, value + 1));

  return (
    <div className={styles.stepper} role="group" aria-label={label}>
      <button
        type="button"
        className={styles.btn}
        onClick={dec}
        disabled={value <= min}
        aria-label="Weniger"
      >
        <FontAwesomeIcon icon={faMinus} />
      </button>
      <span className={styles.value} aria-live="polite">
        {value}
      </span>
      <button
        type="button"
        className={styles.btn}
        onClick={inc}
        disabled={value >= max}
        aria-label="Mehr"
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
}
