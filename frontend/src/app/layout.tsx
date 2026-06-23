import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost, Space_Grotesk } from "next/font/google";
import "@/lib/fontawesome";
import "./globals.scss";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { localBusinessJsonLd, websiteJsonLd } from "@/lib/structured-data";
import { ADDRESS, SITE } from "@/lib/site";

const display = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const sans = Jost({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

const mono = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `Paydos · Shisha & Okey Lounge in ${ADDRESS.city}`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "Shisha Bar Marbach",
    "Shisha Lounge Marbach am Neckar",
    "Okey Lounge",
    "Paydos Lounge",
    "Shisha rauchen Marbach",
    "Lounge Marbach am Neckar",
    "Tisch reservieren Shisha",
    "Mocktails Marbach",
  ],
  authors: [{ name: SITE.legalName }],
  creator: SITE.legalName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    title: `Paydos · Shisha & Okey Lounge in ${ADDRESS.city}`,
    description: SITE.description,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${SITE.name} – ${SITE.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} · Shisha & Okey Lounge`,
    description: SITE.description,
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#060608",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="de"
      data-scroll-behavior="smooth"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      {/* suppressHydrationWarning: some browser extensions (e.g. ColorZilla's
          cz-shortcut-listen) inject attributes on <body> before hydration. */}
      <body suppressHydrationWarning>
        <JsonLd data={localBusinessJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        <a href="#main" className="skip-link">
          Zum Inhalt springen
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
