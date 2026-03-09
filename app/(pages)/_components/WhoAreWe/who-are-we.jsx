import Image from "next/image";
import styles from "./who-are-we.module.scss";

export default function WhoAreWe({ heading, paragraphs, imageSrc, imageAlt }) {
  return (
    <div className={styles.container}>
      <div className={styles.textColumn}>
        <h1 className={styles.heading}>{heading}</h1>

        <div className={styles.paragraphsContainer}>
          {paragraphs.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </div>

      <Image
        className={styles.image}
        src={imageSrc}
        alt={imageAlt}
        height={370}
        width={450}
      />
    </div>
  );
}
