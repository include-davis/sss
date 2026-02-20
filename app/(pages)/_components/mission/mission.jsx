import styles from "./mission.module.scss";

export default function Mission({ title, subtitle, paragraphs }) {
  return (
    <section className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
        </div>
        <div className={styles.divider} />
        <div className={styles.content}>
          <div className={styles.textBlock}>
            <p className={styles.subtitle}>{subtitle}</p>
            {paragraphs.map((text, i) => (
              <p key={i} className={styles.body}>{text}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
