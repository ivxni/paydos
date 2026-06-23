import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { Section } from "@/components/ui/Section";
import { Prose } from "@/components/ui/Prose";
import { ADDRESS, CONTACT, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung der Paydos Shisha & Okey Lounge in Marbach am Neckar.",
  alternates: { canonical: "/datenschutz" },
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <>
      <PageHeader eyebrow="Rechtliches" title="Datenschutz" />
      <Section size="md">
        <Prose>
          <p className="muted">
            Diese Datenschutzerklärung ist eine Vorlage und sollte vor Veröffentlichung
            rechtlich geprüft und an die tatsächliche Datenverarbeitung angepasst werden.
          </p>

          <h2>1. Verantwortlicher</h2>
          <p>
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            <br />
            <strong>{SITE.legalName}</strong>, {ADDRESS.street}, {ADDRESS.postalCode}{" "}
            {ADDRESS.city}, E-Mail: {CONTACT.email}.
          </p>

          <h2>2. Hosting</h2>
          <p>
            Diese Website wird bei Netlify gehostet. Beim Aufruf der Seite werden
            technisch notwendige Server-Logdaten (z. B. IP-Adresse, Datum/Uhrzeit,
            abgerufene Ressource) verarbeitet, um die Auslieferung der Website zu
            ermöglichen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
          </p>

          <h2>3. Reservierung</h2>
          <p>
            Wenn du das Reservierungsformular absendest, übermitteln wir die von dir
            eingegebenen Daten (Name, Datum, Uhrzeit, Personenzahl sowie – falls
            angegeben – Telefonnummer) an unseren Server. Dieser leitet sie unmittelbar
            als Benachrichtigung an unser Team-Postfach beim Messenger-Dienst{" "}
            <strong>Telegram</strong> weiter. Eine dauerhafte Speicherung in einer
            Datenbank findet nicht statt. Wir verarbeiten diese Daten ausschließlich zur
            Bearbeitung deiner Reservierung (Art. 6 Abs. 1 lit. b DSGVO). Für die
            Zustellung gelten ergänzend die{" "}
            <a href="https://telegram.org/privacy" target="_blank" rel="noopener noreferrer">
              Datenschutzbestimmungen von Telegram
            </a>
            . Schlägt die Übermittlung an unseren Server fehl, bietet das Formular
            ersatzweise das Öffnen einer vorausgefüllten WhatsApp-Nachricht an – der
            Versand erfolgt in diesem Fall durch dich.
          </p>

          <h2>4. Kontakt über WhatsApp</h2>
          <p>
            Das Kontaktformular speichert keine Daten auf einem Server. Beim Absenden
            wird lediglich eine vorausgefüllte Nachricht erstellt und in WhatsApp
            geöffnet – der Versand erfolgt durch dich. Es gelten die{" "}
            <a href="https://www.whatsapp.com/legal/privacy-policy-eea" target="_blank" rel="noopener noreferrer">
              Datenschutzbestimmungen von WhatsApp/Meta
            </a>
            .
          </p>

          <h2>5. Google Maps</h2>
          <p>
            Zur Darstellung unseres Standorts binden wir eine Karte von Google Maps ein
            (Anbieter: Google Ireland Ltd.). Dabei kann deine IP-Adresse an Google
            übertragen werden. Mehr Informationen findest du in der{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              Datenschutzerklärung von Google
            </a>
            .
          </p>

          <h2>6. Schriftarten</h2>
          <p>
            Schriftarten werden lokal über Next.js („next/font“) ausgeliefert. Es findet
            keine Verbindung zu Google-Servern zum Laden der Schriften statt.
          </p>

          <h2>7. Deine Rechte</h2>
          <p>
            Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der
            Verarbeitung, Datenübertragbarkeit und Widerspruch. Außerdem steht dir ein
            Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde zu. Wende dich dazu an{" "}
            {CONTACT.email}.
          </p>
        </Prose>
      </Section>
    </>
  );
}
