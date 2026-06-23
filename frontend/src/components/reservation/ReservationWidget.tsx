"use client";

import { useMemo, useState } from "react";
import { Field, TextInput } from "@/components/ui/Form";
import { Tag } from "@/components/ui/Tag";
import { Button } from "@/components/ui/Button";
import { OkeyTile } from "@/components/ui/OkeyTile";
import {
  dayHoursForDate,
  formatDateDE,
  getTimeSlots,
  getUpcomingDays,
} from "@/lib/hours";
import { CONTACT } from "@/lib/site";
import styles from "./ReservationWidget.module.scss";

const GUEST_OPTIONS = [2, 3, 4, 5, 6, 8];
// Show a rolling week of days as chips — always covers the next weekend,
// no manual calendar picking.
const DAY_COUNT = 7;

export function ReservationWidget() {
  const upcoming = useMemo(() => getUpcomingDays(DAY_COUNT), []);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(4);
  const [touched, setTouched] = useState(false);
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [failed, setFailed] = useState(false);

  const slots = useMemo(() => getTimeSlots(date), [date]);
  const dayHours = useMemo(() => dayHoursForDate(date), [date]);
  const isClosedDay = !!date && (!dayHours?.opens || slots.length === 0);

  const onDateChange = (value: string) => {
    setDate(value);
    setTime("");
  };

  const errors = {
    name: !name.trim(),
    date: !date,
    time: !time,
  };
  const valid = !errors.name && !errors.date && !errors.time && !isClosedDay;

  const submit = async () => {
    setTouched(true);
    if (!valid || submitting) return;

    const details = {
      name: name.trim(),
      date: formatDateDE(date),
      time,
      guests,
      phone: phone.trim(),
    };

    setFailed(false);
    setSubmitting(true);
    try {
      const res = await fetch("/api/reservation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(details),
      });
      if (!res.ok) throw new Error(`request failed: ${res.status}`);
      setSent(true);
    } catch {
      setFailed(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (sent) {
    return (
      <div className={styles.card}>
        <div className={styles.success}>
          <div className={styles.tiles}>
            <OkeyTile value="01" size="md" />
            <OkeyTile value="60" size="md" color="purple" />
          </div>
          <h3 className={styles.successTitle}>Bis gleich.</h3>
          <p className={styles.successText}>
            Dein Tisch für{" "}
            <strong>
              {guests} {guests === 1 ? "Person" : "Personen"}
            </strong>{" "}
            am <strong>{formatDateDE(date)}</strong> um <strong>{time} Uhr</strong> ist
            vorgemerkt. Wir bestätigen kurz – bis später, {name.split(" ")[0]}.
          </p>
          <Button
            variant="glass"
            onClick={() => {
              setSent(false);
              setName("");
              setPhone("");
              setDate("");
              setTime("");
              setGuests(4);
              setTouched(false);
            }}
          >
            Neue Reservierung
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.card}>
      <div className={styles.row2}>
        <Field
          label="Name"
          htmlFor="r-name"
          error={touched && errors.name ? "Bitte gib deinen Namen an." : undefined}
        >
          <TextInput
            id="r-name"
            placeholder="Vor- & Nachname"
            value={name}
            onChange={(e) => setName(e.target.value)}
            invalid={touched && errors.name}
            autoComplete="name"
          />
        </Field>
        <Field label="Telefon (optional)" htmlFor="r-phone">
          <TextInput
            id="r-phone"
            type="tel"
            placeholder="+49 …"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            autoComplete="tel"
          />
        </Field>
      </div>

      <div className={styles.group}>
        <span className={styles.groupLabel}>Tag</span>
        <div className={styles.days}>
          {upcoming.map((d) => (
            <button
              key={d.iso}
              type="button"
              disabled={d.closed}
              aria-pressed={date === d.iso}
              onClick={() => onDateChange(d.iso)}
              className={`${styles.day} ${date === d.iso ? styles.dayActive : ""} ${
                d.closed ? styles.dayClosed : ""
              }`}
            >
              <span className={styles.dayWeekday}>{d.isToday ? "Heute" : d.weekday}</span>
              <span className={styles.dayNum}>{d.day}</span>
              <span className={styles.dayMonth}>{d.closed ? "zu" : d.month}</span>
            </button>
          ))}
        </div>
        {touched && errors.date && (
          <span className={styles.error}>Bitte wähle einen Tag.</span>
        )}
      </div>

      <div className={styles.group}>
        <span className={styles.groupLabel}>Personen</span>
        <div className={styles.chips}>
          {GUEST_OPTIONS.map((g) => (
            <Tag key={g} active={guests === g} onClick={() => setGuests(g)}>
              {g}
            </Tag>
          ))}
        </div>
      </div>

      <div className={styles.group}>
        <span className={styles.groupLabel}>Uhrzeit</span>
        {!date ? (
          <p className={styles.hint}>Wähl zuerst ein Datum.</p>
        ) : isClosedDay ? (
          <p className={styles.hint}>An diesem Tag geschlossen.</p>
        ) : (
          <div className={styles.chips}>
            {slots.map((s) => (
              <Tag key={s} active={time === s} onClick={() => setTime(s)}>
                {s}
              </Tag>
            ))}
          </div>
        )}
        {touched && errors.time && date && !isClosedDay && (
          <span className={styles.error}>Bitte wähle eine Uhrzeit.</span>
        )}
      </div>

      <Button
        variant="primary"
        size="lg"
        fullWidth
        onClick={submit}
        disabled={submitting}
      >
        {submitting ? "Wird gesendet …" : "Reservierung abschließen"}
      </Button>
      {failed ? (
        <p className={styles.formError} role="alert">
          Das hat gerade nicht geklappt. Bitte versuch es noch einmal oder ruf uns
          kurz an:{" "}
          <a href={`tel:${CONTACT.phoneHref}`}>{CONTACT.phoneDisplay}</a>.
        </p>
      ) : (
        <p className={styles.note}>
          Wir bestätigen deinen Tisch persönlich. Größere Runden gerne telefonisch.
        </p>
      )}
    </div>
  );
}
