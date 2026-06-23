import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import styles from "./CtaBand.module.scss";

type Props = {
  title?: React.ReactNode;
  text?: string;
};

export function CtaBand({
  title = (
    <>
      Lust auf <em>einen Abend?</em>
    </>
  ),
  text = "Sichere dir deinen Tisch in unter einer Minute – die Anfrage geht direkt per WhatsApp an unser Team.",
}: Props) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.band}>
          <div className={styles.text}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.copy}>{text}</p>
          </div>
          <Button href="/reservierung" variant="primary" size="lg">
            Tisch reservieren
          </Button>
        </div>
      </Container>
    </section>
  );
}
