import type { Metadata } from "next";
import { ReservationSection } from "@/components/sections/ReservationSection";

export const metadata: Metadata = {
  title: "Tisch reservieren",
  description:
    "Reserviere deinen Tisch in der Paydos Shisha & Okey Lounge in Marbach am Neckar. Tag, Uhrzeit und Personen wählen – die Anfrage geht direkt per WhatsApp an unser Team.",
  alternates: { canonical: "/reservierung" },
  openGraph: {
    title: "Tisch reservieren – Paydos Lounge",
    description:
      "In unter einer Minute den Tisch sichern – ganz einfach per WhatsApp.",
    url: "/reservierung",
  },
};

export default function ReservierungPage() {
  return (
    <div style={{ paddingTop: "var(--nav-height)" }}>
      <ReservationSection headingLevel="h1" />
    </div>
  );
}
