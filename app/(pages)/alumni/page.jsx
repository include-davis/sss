
import styles from "./alumni.module.scss"
// className={styles.main_title}

export default function Alumni() {
  return (
    <main>
      <div className={styles.main_title}>
        <p>Where our Alumni have gone</p>
      </div>
      <div className={styles.carousel}>
        <div className={styles.group}>
          <div className={styles.box}>
            1
          </div>
          <div className={styles.box}>
            2 
          </div>
          <div className={styles.box}>
            3
          </div>
          <div className={styles.box}>
            4
          </div>
          <div className={styles.box}>
            5
          </div>
          <div className={styles.box}>
            6
          </div>
        </div>
        <div aria-hidden className={styles.group}>
          <div className={styles.box}>
            1
          </div>
          <div className={styles.box}>
            2 
          </div>
          <div className={styles.box}>
            3
          </div>
          <div className={styles.box}>
            4
          </div>
          <div className={styles.box}>
            5
          </div>
          <div className={styles.box}>
            6
          </div>
        </div>
      </div>




      <div className={styles.carousel}>
        <div className={styles.group2}>
          <div className={styles.box}>
            1
          </div>
          <div className={styles.box}>
            2 
          </div>
          <div className={styles.box}>
            3
          </div>
          <div className={styles.box}>
            4
          </div>
          <div className={styles.box}>
            5
          </div>
          <div className={styles.box}>
            6
          </div>
          <div className={styles.box}>
            7
          </div>
        </div>
        <div aria-hidden className={styles.group2}>
          <div className={styles.box}>
            1
          </div>
          <div className={styles.box}>
            2 
          </div>
          <div className={styles.box}>
            3
          </div>
          <div className={styles.box}>
            4
          </div>
          <div className={styles.box}>
            5
          </div>
          <div className={styles.box}>
            6
          </div>
          <div className={styles.box}>
            7
          </div>
        </div>
      </div>
    </main>
  );
}