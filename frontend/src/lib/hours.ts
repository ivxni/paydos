import { OPENING_HOURS, type DayHours } from "./site";

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

function fmt(min: number) {
  const m = ((min % 1440) + 1440) % 1440;
  const h = Math.floor(m / 60);
  const mm = m % 60;
  return `${String(h).padStart(2, "0")}:${String(mm).padStart(2, "0")}`;
}

/** Opening hours for a given yyyy-mm-dd date string (local). */
export function dayHoursForDate(dateStr: string): DayHours | null {
  if (!dateStr) return null;
  // Parse as local date (avoid UTC shift from new Date("yyyy-mm-dd")).
  const [y, m, d] = dateStr.split("-").map(Number);
  const date = new Date(y, m - 1, d);
  const key = JS_DAY_TO_KEY[date.getDay()];
  return OPENING_HOURS.find((x) => x.day === key) ?? null;
}

/**
 * Bookable 30-minute slots for the date, from opening until 30 min
 * before closing (handles past-midnight closing times).
 */
export function getTimeSlots(dateStr: string, stepMin = 30): string[] {
  const day = dayHoursForDate(dateStr);
  if (!day?.opens || !day.closes) return [];
  const open = toMin(day.opens);
  let close = toMin(day.closes);
  if (close <= open) close += 1440;
  const slots: string[] = [];
  for (let t = open; t <= close - stepMin; t += stepMin) {
    slots.push(fmt(t));
  }
  return slots;
}

/** Format a yyyy-mm-dd string to the German "Fr, 27.06.2026" form. */
export function formatDateDE(dateStr: string): string {
  if (!dateStr) return "";
  const [y, m, d] = dateStr.split("-").map(Number);
  const date = new Date(y, m - 1, d);
  return new Intl.DateTimeFormat("de-DE", {
    weekday: "short",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date);
}

/** Today as yyyy-mm-dd (local) — for the date input's min. */
export function todayISO(): string {
  const d = new Date();
  const off = d.getTimezoneOffset();
  return new Date(d.getTime() - off * 60_000).toISOString().slice(0, 10);
}

export type UpcomingDay = {
  iso: string;
  weekday: string; // "Fr"
  day: string; // "27"
  month: string; // "Jun"
  closed: boolean;
  isToday: boolean;
};

export type OpenStatus = {
  open: boolean;
  /** short headline, e.g. "Jetzt geöffnet" / "Öffnet heute" / "Geschlossen" */
  label: string;
  /** supporting detail, e.g. "bis 03:00 Uhr" / "ab 18:00 Uhr" / "Fr ab 15:00 Uhr" */
  detail: string;
};

/**
 * Live open/closed status for the brand pill — accounts for past-midnight
 * closing times (e.g. Sa 15:00–03:00 spilling into Sunday morning).
 */
export function getOpenStatus(now: Date = new Date()): OpenStatus {
  const nowMin = now.getHours() * 60 + now.getMinutes();
  const hoursAt = (offset: number): DayHours | null => {
    const d = new Date(now.getFullYear(), now.getMonth(), now.getDate() + offset);
    return OPENING_HOURS.find((x) => x.day === JS_DAY_TO_KEY[d.getDay()]) ?? null;
  };

  // Currently inside today's window?
  const today = hoursAt(0);
  if (today?.opens && today.closes) {
    const open = toMin(today.opens);
    let close = toMin(today.closes);
    if (close <= open) close += 1440;
    if (nowMin >= open && nowMin < Math.min(close, 1440)) {
      return { open: true, label: "Jetzt geöffnet", detail: `bis ${today.closes} Uhr` };
    }
  }
  // Spill-over from yesterday's past-midnight session.
  const yday = hoursAt(-1);
  if (yday?.opens && yday.closes) {
    const open = toMin(yday.opens);
    let close = toMin(yday.closes);
    if (close <= open) close += 1440;
    if (close > 1440 && nowMin < close - 1440) {
      return { open: true, label: "Jetzt geöffnet", detail: `bis ${yday.closes} Uhr` };
    }
  }

  // Closed → find the next opening within the coming week.
  for (let off = 0; off < 8; off++) {
    const h = hoursAt(off);
    if (!h?.opens) continue;
    if (off === 0 && nowMin >= toMin(h.opens)) continue; // already past today's open
    if (off === 0) return { open: false, label: "Öffnet heute", detail: `ab ${h.opens} Uhr` };
    if (off === 1) return { open: false, label: "Geschlossen", detail: `morgen ab ${h.opens} Uhr` };
    const d = new Date(now.getFullYear(), now.getMonth(), now.getDate() + off);
    const wd = new Intl.DateTimeFormat("de-DE", { weekday: "short" }).format(d).replace(".", "");
    return { open: false, label: "Geschlossen", detail: `${wd} ab ${h.opens} Uhr` };
  }
  return { open: false, label: "Geschlossen", detail: "" };
}

/** The next `count` days as chips for the booking picker. */
export function getUpcomingDays(count = 21): UpcomingDay[] {
  const days: UpcomingDay[] = [];
  const base = new Date();
  base.setHours(0, 0, 0, 0);
  for (let i = 0; i < count; i++) {
    const d = new Date(base);
    d.setDate(base.getDate() + i);
    const iso = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
      d.getDate(),
    ).padStart(2, "0")}`;
    const hours = dayHoursForDate(iso);
    days.push({
      iso,
      weekday: new Intl.DateTimeFormat("de-DE", { weekday: "short" }).format(d).replace(".", ""),
      day: String(d.getDate()).padStart(2, "0"),
      month: new Intl.DateTimeFormat("de-DE", { month: "short" }).format(d).replace(".", ""),
      closed: !hours?.opens,
      isToday: i === 0,
    });
  }
  return days;
}
