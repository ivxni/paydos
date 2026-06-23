import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import styles from "./FeaturedMenu.module.scss";

export function FeaturedMenu() {
  return (
    <Section id="signature">
      <div className={styles.spotlight}>
        <div className={styles.media}>
          <Image
            src="/images/cocktails-bar.webp"
            alt="Der Paydos Spezial – hausgemachter Mocktail an der Bar"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            className={styles.img}
          />
        </div>

        <div className={styles.body}>
          <p className={styles.eyebrow}>Signature · Hausgemacht</p>
          <h2 className={styles.name}>Paydos Spezial</h2>
          <p className={styles.desc}>
            Black Acai, Limette und frische Minze – unser hauseigener Mocktail.
            Tief, fruchtig, eiskalt. Der Drink, mit dem der Abend beginnt.
          </p>
          <div className={styles.priceRow}>
            <span className={styles.price}>8,00 €</span>
            <span className={styles.priceNote}>alkoholfrei</span>
          </div>
          <Button href="/karte" variant="outline">
            Zur ganzen Karte
          </Button>
        </div>
      </div>
    </Section>
  );
}
