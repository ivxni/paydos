import { CONTACT, SITE } from "./site";

/** Build a wa.me deep link with a pre-filled message. */
export function buildWhatsappUrl(message: string): string {
  const number = CONTACT.whatsappNumber.replace(/\D/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export type ReservationDetails = {
  date: string; // already formatted, e.g. "Fr, 27.06.2026"
  time: string;
  guests: number;
  name: string;
  phone?: string;
  note?: string;
};

/** Compose the WhatsApp reservation message sent to the team. */
export function buildReservationMessage(d: ReservationDetails): string {
  const lines = [
    `Neue Reservierung – ${SITE.name}`,
    "",
    `Name: ${d.name}`,
    `Datum: ${d.date}`,
    `Uhrzeit: ${d.time}`,
    `Personen: ${d.guests}`,
  ];
  if (d.phone?.trim()) lines.push(`Telefon: ${d.phone.trim()}`);
  if (d.note?.trim()) lines.push(`Anmerkung: ${d.note.trim()}`);
  return lines.join("\n");
}

export type ContactDetails = {
  name: string;
  email?: string;
  phone?: string;
  message: string;
};

/** Compose the WhatsApp message for the contact form. */
export function buildContactMessage(d: ContactDetails): string {
  const lines = [`Kontaktanfrage – ${SITE.name}`, "", `Name: ${d.name}`];
  if (d.email?.trim()) lines.push(`E-Mail: ${d.email.trim()}`);
  if (d.phone?.trim()) lines.push(`Telefon: ${d.phone.trim()}`);
  lines.push("", d.message.trim());
  return lines.join("\n");
}
