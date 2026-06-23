"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Field, TextInput, TextArea } from "@/components/ui/Form";
import { Button } from "@/components/ui/Button";
import { buildContactMessage, buildWhatsappUrl } from "@/lib/whatsapp";
import styles from "./ContactForm.module.scss";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [touched, setTouched] = useState(false);
  const [sent, setSent] = useState(false);

  const errors = { name: !name.trim(), message: !message.trim() };
  const valid = !errors.name && !errors.message;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (!valid) return;
    const text = buildContactMessage({ name: name.trim(), email, phone, message });
    window.open(buildWhatsappUrl(text), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  if (sent) {
    return (
      <div className={styles.card}>
        <div className={styles.success}>
          <span className={styles.check}>
            <FontAwesomeIcon icon={faCheck} />
          </span>
          <h3 className={styles.successTitle}>Danke, {name.split(" ")[0] || "du"}.</h3>
          <p className={styles.successText}>
            Deine Nachricht ist unterwegs – bestätige sie noch im sich öffnenden Fenster.
            Wir melden uns so schnell wie möglich zurück.
          </p>
          <Button variant="outline" onClick={() => setSent(false)}>
            Neue Nachricht
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form className={styles.card} onSubmit={handleSubmit} noValidate>
      <Field
        label="Name"
        htmlFor="c-name"
        error={touched && errors.name ? "Bitte gib deinen Namen an." : undefined}
      >
        <TextInput
          id="c-name"
          placeholder="Vor- & Nachname"
          value={name}
          onChange={(e) => setName(e.target.value)}
          invalid={touched && errors.name}
          autoComplete="name"
        />
      </Field>

      <div className={styles.grid}>
        <Field label="E-Mail (optional)" htmlFor="c-email">
          <TextInput
            id="c-email"
            type="email"
            placeholder="du@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
        </Field>
        <Field label="Telefon (optional)" htmlFor="c-phone">
          <TextInput
            id="c-phone"
            type="tel"
            placeholder="+49 …"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            autoComplete="tel"
          />
        </Field>
      </div>

      <Field
        label="Nachricht"
        htmlFor="c-message"
        error={touched && errors.message ? "Bitte schreib uns kurz dein Anliegen." : undefined}
      >
        <TextArea
          id="c-message"
          placeholder="Worum geht's? Größere Runde, Event, Frage zur Karte …"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          invalid={touched && errors.message}
          rows={5}
        />
      </Field>

      <Button type="submit" variant="primary" size="lg" fullWidth>
        Nachricht senden
      </Button>
      <p className={styles.note}>Wir antworten dir so schnell wie möglich.</p>
    </form>
  );
}
