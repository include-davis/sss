
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
            <div className={styles.image}>
              <img src="/image8.png" height="100"/>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.image}>
              <img src="/image14.png" height="70"/>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.image}>
              <img src="/image9.png" height="90"/>
            </div>
          </div> 
          <div className={styles.box}>
            <div>
              <img src="/image13.png" height="130"/>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.image}>
              <img src="/image1.png" height="40"/>
            </div>  
          </div>
          <div className={styles.box}>
            <div>
              <img src="/image2.png" height="130"/>
            </div>
          </div>
        </div>

        <div aria-hidden className={styles.group}>
          <div className={styles.box}>
            <div className={styles.image}>
              <img src="/image8.png" height="100"/>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.image}>
              <img src="/image14.png" height="70"/>
            </div> 
          </div>
          <div className={styles.box}>
            <div className={styles.image}>
              <img src="/image9.png" height="90"/>
            </div>
          </div>
          <div className={styles.box}>
            <div>
              <img src="/image13.png" height="130"/>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.image}>
              <img src="/image1.png" height="40"/>
            </div>
          </div>
          <div className={styles.box}>
            <div>
              <img src="/image2.png" height="130"/>
            </div>
          </div>
        </div>
      </div>




      <div className={styles.carousel}>
        <div className={styles.group2}>
          <div className={styles.box}>
            <div>
              <img src="/image20.png" height="110"/>
            </div>
          </div>
          <div className={styles.box}>
            <div>
              <img src="/image21.png" height="155"/>
            </div>
          </div>
          <div className={styles.box}>
            <div>
              <img src="/image22.png" height="150"/>
            </div>
          </div> 
          <div className={styles.box}>
            <div>
              <img src="/image23.png" height="90"/>
            </div>
          </div> 
          <div className={styles.box}>
            <div>
              <img src="/image24.png" height="155"/>
            </div>  
          </div>
          <div className={styles.box}>
            <div>
              <img src="/image25.png" height="60"/>
            </div>
          </div> 
          <div className={styles.box}>
            <div>
              <img src="/image26.png" height="150"/>
            </div>
          </div> 
        </div>

        <div aria-hidden className={styles.group2}>
          <div className={styles.box}>
            <div>
              <img src="/image20.png" height="110"/>
            </div>
          </div>
          <div className={styles.box}>
            <div>
              <img src="/image21.png" height="155"/>
            </div> 
          </div>
          <div className={styles.box}>
            <div>
              <img src="/image22.png" height="150"/>
            </div>
          </div>
          <div className={styles.box}>
            <div>
              <img src="/image23.png" height="90"/>
            </div>
          </div> 
          <div className={styles.box}>
            <div>
              <img src="/image24.png" height="155"/>
            </div>
          </div>
          <div className={styles.box}>
            <div>
              <img src="/image25.png" height="60"/>
            </div>
          </div> 
          <div className={styles.box}>
            <div>
              <img src="/image26.png" height="150"/>
            </div>
          </div> 
          
        </div>
      </div>
    </main>
  );
} 