import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { Section } from "@/components/ui/Section";
import { Prose } from "@/components/ui/Prose";
import { ADDRESS, CONTACT, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der Paydos Shisha & Okey Lounge in Marbach am Neckar.",
  alternates: { canonical: "/impressum" },
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <>
      <PageHeader eyebrow="Rechtliches" title="Impressum" />
      <Section size="md">
        <Prose>
          <p className="muted">
            Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz). Bitte vor Veröffentlichung
            mit den finalen Unternehmensdaten vervollständigen.
          </p>

          <h2>Anbieter</h2>
          <p>
            <strong>{SITE.legalName}</strong>
            <br />
            [Inhaber:in / Geschäftsführung – bitte ergänzen]
            <br />
            {ADDRESS.street}
            <br />
            {ADDRESS.postalCode} {ADDRESS.city}
            <br />
            {ADDRESS.countryName}
          </p>

          <h2>Kontakt</h2>
          <p>
            Telefon: {CONTACT.phoneDisplay}
            <br />
            E-Mail: {CONTACT.email}
            <br />
            Instagram: @{CONTACT.instagram}
          </p>

          <h2>Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
            <br />
            [USt-IdNr. – bitte ergänzen]
          </p>

          <h2>Verantwortlich für den Inhalt</h2>
          <p>
            [Name – bitte ergänzen], {ADDRESS.street}, {ADDRESS.postalCode} {ADDRESS.city}
          </p>

          <h2>Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung
            (OS) bereit:{" "}
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
              ec.europa.eu/consumers/odr
            </a>
            . Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren
            vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </Prose>
      </Section>
    </>
  );
}
