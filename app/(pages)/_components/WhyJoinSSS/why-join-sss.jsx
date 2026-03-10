import styles from "./why-join-sss.module.scss";
import Image from "next/image";

export default function WhyJoinSSS({ heading, paragraph1, paragraph2 }) {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.textGroup}>
          <h2 className={styles.heading}>{heading}</h2>
          <div className={styles.paragraphs}>
            <p className={styles.paragraph}>{paragraph1}</p>
            <p className={styles.paragraph}>{paragraph2}</p>
          </div>
        </div>
        <Image
          src="/whyjoinsss.png"
          alt="SSS members"
          width={496}
          height={371}
          className={styles.image}
        />
      </div>
    </section>
  );
}
