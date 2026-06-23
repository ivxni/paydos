"use client";

import { useEffect, useState } from "react";
import { getOpenStatus, type OpenStatus } from "@/lib/hours";
import styles from "./OpenStatusPill.module.scss";

/**
 * Live "open now / opens at" badge. Rendered only after mount so the
 * time-dependent output never mismatches the server-rendered HTML.
 */
export function OpenStatusPill({ className }: { className?: string }) {
  const [status, setStatus] = useState<OpenStatus | null>(null);

  useEffect(() => {
    const update = () => setStatus(getOpenStatus());
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, []);

  if (!status) return null;

  return (
    <p
      className={`${styles.pill} ${status.open ? styles.open : styles.closed} ${className ?? ""}`}
    >
      <span className={styles.dot} aria-hidden />
      <span className={styles.label}>{status.label}</span>
      {status.detail && <span className={styles.detail}>{status.detail}</span>}
    </p>
  );
}
