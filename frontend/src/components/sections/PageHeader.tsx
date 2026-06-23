import Image from "next/image";
import { Container } from "@/components/ui/Container";
import styles from "./PageHeader.module.scss";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  image?: string;
  imageAlt?: string;
};

export function PageHeader({ eyebrow, title, intro, image, imageAlt }: Props) {
  return (
    <header className={styles.header}>
      {image && (
        <div className={styles.bg}>
          <Image
            src={image}
            alt={imageAlt ?? ""}
            fill
            priority
            sizes="100vw"
            className={styles.bgImg}
          />
          <div className={styles.scrim} />
        </div>
      )}
      <Container>
        <div className={styles.content}>
          <p className={styles.eyebrow}>
            <span className={styles.tick} aria-hidden />
            {eyebrow}
          </p>
          <h1 className={styles.title}>{title}</h1>
          {intro && <p className={styles.intro}>{intro}</p>}
        </div>
      </Container>
    </header>
  );
}
