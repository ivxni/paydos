import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { Section } from "@/components/ui/Section";
import { MenuNav } from "@/components/menu/MenuNav";
import { MenuList } from "@/components/menu/MenuList";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { menuJsonLd } from "@/lib/structured-data";
import { MENU } from "@/lib/menu";

export const metadata: Metadata = {
  title: "Karte – Shishas, Getränke & Snacks",
  description:
    "Die Paydos-Karte: über 40 moderne und traditionelle Shishas, hausgemachte Mocktails, Kaffee, türkischer Çay, Säfte, Snacks und Baguettes – in Marbach am Neckar.",
  alternates: { canonical: "/karte" },
  openGraph: {
    title: "Karte – Paydos Lounge",
    description:
      "Über 40 Shishas, Mocktails, Kaffee & Snacks. Die komplette Karte der Paydos Shisha & Okey Lounge in Marbach am Neckar.",
    url: "/karte",
  },
};

const navItems = MENU.map((c) => ({ id: c.id, title: c.title }));

export default function KartePage() {
  return (
    <>
      <JsonLd data={menuJsonLd()} />
      <PageHeader
        eyebrow="Menükarte"
        title={
          <>
            Die <em>Karte.</em>
          </>
        }
        intro="Kurz, kuratiert, ehrlich. Über 40 Shishas, hausgemachte Mocktails und Kleinigkeiten für den langen Abend."
        image="/images/cocktail-red.webp"
        imageAlt="Mocktail in stimmungsvollem Licht in der Paydos Lounge"
      />
      <MenuNav items={navItems} />
      <Section>
        <MenuList />
      </Section>
      <CtaBand />
    </>
  );
}
