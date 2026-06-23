import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { OkeyTile } from "@/components/ui/OkeyTile";
import styles from "./not-found.module.scss";

export default function NotFound() {
  return (
    <Container size="md">
      <div className={styles.wrap}>
        <div className={styles.tiles}>
          <OkeyTile value="4" size="lg" />
          <OkeyTile value="0" size="lg" color="purple" />
          <OkeyTile value="4" size="lg" />
        </div>
        <h1 className={styles.title}>Hier ist nichts.</h1>
        <p className={styles.text}>
          Diese Seite haben wir nicht gefunden – aber dein Tisch wartet trotzdem.
        </p>
        <div className={styles.actions}>
          <Button href="/" variant="primary">
            Zur Startseite
          </Button>
          <Button href="/reservierung" variant="outline">
            Tisch reservieren
          </Button>
        </div>
      </div>
    </Container>
  );
}
