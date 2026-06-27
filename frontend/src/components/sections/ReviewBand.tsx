import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { Container } from "@/components/ui/Container";
import { CONTACT } from "@/lib/site";
import styles from "./ReviewBand.module.scss";

/** Authentic 4-colour Google "G". */
function GoogleG() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden focusable="false">
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      />
      <path
        fill="#FBBC05"
        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      />
    </svg>
  );
}

export function ReviewBand() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.band}>
          <div className={styles.text}>
            <p className={styles.eyebrow}>
              <span className={styles.tick} aria-hidden />
              Bewertungen
            </p>
            <h2 className={styles.title}>
              Schöner Abend gewesen? <em>Erzähl davon.</em>
            </h2>
            <p className={styles.copy}>
              Eine kurze Bewertung auf Google hilft anderen, Paydos zu finden – und
              uns, jeden Abend ein bisschen besser zu machen.
            </p>
          </div>

          <a
            href={CONTACT.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
            aria-label="Paydos auf Google bewerten"
          >
            <span className={styles.sheen} aria-hidden />
            <span className={styles.cardTop}>
              <span className={styles.badge}>
                <GoogleG />
              </span>
              <span className={styles.brand}>
                <span className={styles.brandName}>Google Bewertung</span>
                <span className={styles.stars} aria-hidden>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} />
                  ))}
                </span>
              </span>
            </span>

            <span className={styles.cardAction}>
              Bewertung schreiben
              <FontAwesomeIcon icon={faArrowRightLong} className={styles.arrow} />
            </span>
          </a>
        </div>
      </Container>
    </section>
  );
}
