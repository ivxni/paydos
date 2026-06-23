"use client";

import { useEffect, useState } from "react";
import { OPENING_HOURS, type DayHours } from "@/lib/site";
import styles from "./OpeningHours.module.scss";

// JS getDay(): 0=Sun..6=Sat. Map to our Mon-first array order.
const JS_DAY_TO_KEY: DayHours["day"][] = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function toMin(t: string) {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
}

/** close interval end in minutes, accounting for past-midnight + "00:00" = 24:00 */
function closeMin(opens: string, closes: string) {
  const o = toMin(opens);
  let c = toMin(closes);
  if (c <= o) c += 1440; // crosses midnight (incl. "00:00")
  return c;
}

function computeOpen(now: Date): boolean {
  const nowMin = now.getHours() * 60 + now.getMinutes();
  const todayKey = JS_DAY_TO_KEY[now.getDay()];
  const today = OPENING_HOURS.find((d) => d.day === todayKey);
  if (today?.opens && today.closes) {
    const c = closeMin(today.opens, today.closes);
    if (nowMin >= toMin(today.opens) && nowMin < Math.min(c, 1440)) return true;
  }
  // spill-over from yesterday (e.g. Sat 15:00–03:00 → Sun 01:00 still open)
  const ydayKey = JS_DAY_TO_KEY[(now.getDay() + 6) % 7];
  const yday = OPENING_HOURS.find((d) => d.day === ydayKey);
  if (yday?.opens && yday.closes) {
    const c = closeMin(yday.opens, yday.closes);
    if (c > 1440 && nowMin < c - 1440) return true;
  }
  return false;
}

export function OpeningHours({ showStatus = true }: { showStatus?: boolean }) {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const tick = () => setNow(new Date());
    tick();
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, []);

  const todayKey = now ? JS_DAY_TO_KEY[now.getDay()] : null;
  const open = now ? computeOpen(now) : null;

  return (
    <div className={styles.wrap}>
      {showStatus && open !== null && (
        <p className={`${styles.status} ${open ? styles.open : styles.closed}`}>
          <span className={styles.dot} />
          {open ? "Jetzt geöffnet" : "Aktuell geschlossen"}
        </p>
      )}
      <ul className={styles.list}>
        {OPENING_HOURS.map((d) => (
          <li
            key={d.day}
            className={`${styles.row} ${todayKey === d.day ? styles.today : ""}`}
          >
            <span className={styles.day}>{d.label}</span>
            <span className={styles.time}>
              {d.opens && d.closes ? `${d.opens} – ${d.closes}` : "Geschlossen"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
