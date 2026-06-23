import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { OpenStatusPill } from "@/components/ui/OpenStatusPill";
import { ADDRESS } from "@/lib/site";
import styles from "./Hero.module.scss";

const TICKER = [
  "Italienischer Kaffee",
  "Premium-Tabak",
  "Hausgemachte Mocktails",
  "Okey-Tische",
  "Terrasse unter Lichterketten",
];

const META = [
  { k: "Standort", v: `${ADDRESS.street}, ${ADDRESS.city}` },
  { k: "Geöffnet", v: "Di – So · abends" },
  { k: "Drinnen & Draußen", v: "Lounge & Terrasse" },
];

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg}>
        <Image
          src="/images/hero-lounge.webp"
          alt="Loungebereich der Paydos Lounge in warmem Licht"
          fill
          priority
          sizes="100vw"
          className={styles.bgImg}
        />
        <div className={styles.scrim} />
        <div className={styles.glow} aria-hidden />
      </div>

      {/* Editorial vertical spine label on the right edge */}
      <span className={styles.spine} aria-hidden>
        Shisha &amp; Okey Lounge
      </span>

      <Container size="xl" className={styles.stage}>
        <div className={styles.content}>
          <div className={styles.topline}>
            <p className={styles.eyebrow}>
              <span className={styles.eyebrowMark} aria-hidden />
              Shishabar — {ADDRESS.city}
            </p>
            <OpenStatusPill />
          </div>

          <div className={styles.body}>
            <h1 className={styles.title}>
              Where time
              <br />
              <em>takes a break.</em>
            </h1>

            <p className={styles.lead}>
              Handgepackte Köpfe mit hochwertigem Tabak, italienischer Kaffee
              und hausgemachte Mocktails – drinnen im warmen Licht oder draußen
              auf der Terrasse.
            </p>

            <div className={styles.actions}>
              <Button href="/reservierung" variant="primary" size="lg">
                Tisch reservieren
              </Button>
              <Button href="/karte" variant="glass" size="lg">
                Zur Menükarte
              </Button>
            </div>
          </div>

          <dl className={styles.meta}>
            {META.map((m) => (
              <div key={m.k} className={styles.metaItem}>
                <dt className={styles.metaKey}>{m.k}</dt>
                <dd className={styles.metaVal}>{m.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>

      <div className={styles.ticker} aria-hidden>
        <div className={styles.tickerTrack}>
          {[0, 1].map((dup) => (
            <ul key={dup} className={styles.tickerList}>
              {TICKER.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
