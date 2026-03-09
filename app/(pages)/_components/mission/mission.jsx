import styles from "./mission.module.scss";

export default function Mission({ title, subtitle, paragraphs }) {
  return (
    <section className={styles.main}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
        </div>
        <div className={styles.divider} />
        <div className={styles.content}>
          <div className={styles.textBlock}>
            <p className={styles.subtitle}>{subtitle}</p>
            {paragraphs.map((text, i) => (
              <p key={i} className={styles.paragraph}>{text}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
