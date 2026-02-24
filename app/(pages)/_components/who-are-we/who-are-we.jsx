import Image from "next/image";
import styles from "./who-are-we.module.scss";

export default function WhoAreWe() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.textColumn}>
          <h2 className={styles.heading}>Who are we?</h2>

          <div className={styles.paragraphs}>
            <p className={styles.paragraph1}>
              Space and Satellite Systems Society (SSS) is a student-led
              organization at Arizona State University dedicated to advancing
              knowledge and hands-on experience in space systems engineering.
            </p>
            <p className={styles.paragraph2}>
              We aim to create an inclusive environment where students from all
              disciplines can collaborate on satellite and space-related
              projects, bridging the gap between classroom learning and
              real-world aerospace applications.
            </p>
            <p className={styles.paragraph3}>
              At SSS, we strive to inspire the next generation of space
              engineers and scientists by providing opportunities for research,
              design, and development of satellite systems and related
              technologies.
            </p>
          </div>
        </div>

        <div className={styles.photoWrapper}>
          <Image
            src="/assets/images/who-are-we/rectangle-68.jpg"
            alt="SSS group photo"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
