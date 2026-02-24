import Image from "next/image";
import styles from "./who-are-we.module.scss";

export default function WhoAreWe({ heading, paragraphs, imageSrc, imageAlt }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.textColumn}>
          <h2 className={styles.heading}>{heading}</h2>

          <div className={styles.paragraphs}>
            {paragraphs.map((text, index) => (
              <p key={index} className={styles[`paragraph${index + 1}`]}>
                {text}
              </p>
            ))}
          </div>
        </div>

        <div className={styles.photoWrapper}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
