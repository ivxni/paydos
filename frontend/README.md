# Paydos Lounge — Website

Marketing-Website für die **Paydos · Shisha & Okey Lounge** in Marbach am Neckar.
Next.js (App Router) · TypeScript · SCSS-Module · FontAwesome. Reservierung &
Kontakt laufen ohne Backend direkt über **WhatsApp** (wa.me Deep-Links).

## Stack

- **Next.js 16** (App Router, Turbopack) + **React 19**
- **SCSS-Module** mit zentralen Design-Tokens aus dem Paydos Design System
- Self-hosted Google Fonts via `next/font` (Cormorant Garamond, Jost, Space Grotesk)
- **FontAwesome** (sparsam, silbern getönt)
- Deployment auf **Netlify** (offizielle Next.js Runtime)

## Entwicklung

```bash
npm install
cp .env.example .env.local   # Werte eintragen
npm run dev                  # http://localhost:3000
npm run build                # Production-Build
```

## Umgebungsvariablen

In `.env.local` (lokal) bzw. in den Netlify-Projekteinstellungen setzen:

| Variable | Beschreibung |
| --- | --- |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Mitarbeiter-Nummer für Reservierungen/Kontakt. Internationales Format **ohne** `+` und Leerzeichen, z. B. `4915566655128`. |
| `NEXT_PUBLIC_SITE_URL` | Kanonische Produktions-URL (ohne Slash am Ende), z. B. `https://paydos-lounge.de`. Wird für SEO, Sitemap und Open Graph genutzt. |

> Die aktuell hinterlegte Nummer ist eine **Test-/Dev-Nummer**. Vor dem Launch die
> echte Mitarbeiter-Nummer eintragen.

## Wichtige Stellen

- **Geschäftsdaten** (Adresse, Öffnungszeiten, Telefon, Instagram): `src/lib/site.ts`
- **Menükarte**: `src/lib/menu.ts`
- **WhatsApp-Nachrichten**: `src/lib/whatsapp.ts`
- **SEO / strukturierte Daten** (LocalBusiness, Menu): `src/lib/structured-data.ts`,
  `src/app/layout.tsx`, `sitemap.ts`, `robots.ts`, `manifest.ts`
- **Design-Tokens & globale Styles**: `src/app/globals.scss`, `src/styles/_mixins.scss`

## Bilder / Assets

Quellfotos liegen außerhalb des Projekts unter `../Images`. Optimierte Web-Versionen
werden mit Sharp erzeugt und liegen in `public/images`:

```bash
node scripts/optimize-images.mjs
```

### Logo

Das gelieferte `Logo.png` enthält einen eingebrannten Schachbrett-Hintergrund (keine
Transparenz) und ist daher nicht auf dunklen Flächen verwendbar. Stattdessen wird ein
**typografisches Wordmark** (`src/components/ui/Wordmark.tsx`) verwendet – on-brand und
in jeder Größe scharf. Sobald ein transparentes Logo (PNG/SVG) vorliegt, kann es dort
eingesetzt werden.

## Deployment (Netlify)

`netlify.toml` ist vorbereitet. In Netlify als **Base directory** `frontend` setzen
(falls das Repo-Root oberhalb liegt), die Umgebungsvariablen hinterlegen – fertig.
Die Next.js-Runtime wird von Netlify automatisch erkannt.

## Rechtliches

`/impressum` und `/datenschutz` enthalten **Platzhalter-Vorlagen**. Vor Veröffentlichung
mit den finalen Unternehmensdaten füllen und rechtlich prüfen lassen.
