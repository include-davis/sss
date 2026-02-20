import styles from "./why-join-sss.module.scss";
import Image from "next/image";

export default function WhyJoinSSS({ heading, paragraph1, paragraph2 }) {
  return (
    <section className={styles.section}>
      <Image
        src="/assets/images/why-join-sss-bg.png"
        alt=""
        fill
        className={styles.bgImage}
        aria-hidden
      />
      <Image
        src="/assets/images/dbdaab0906d99cb4e21fb4054cc087831e785112.png"
        alt=""
        fill
        className={styles.starLayer}
        aria-hidden
      />
      <div className={styles.content}>
        <div className={styles.textGroup}>
          <h2 className={styles.heading}>{heading}</h2>
          <div className={styles.paragraphs}>
            <p className={styles.paragraph}>{paragraph1}</p>
            <p className={styles.paragraph2}>{paragraph2}</p>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/assets/images/why-join-sss-photo.png"
            alt="SSS members"
            fill
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
