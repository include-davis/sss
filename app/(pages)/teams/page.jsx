import Image from "next/image";
import Hero from "../_components/Hero/Hero";
import styles from "./page.module.scss";

export default function Teams() {
  return (
    <main>
      <Hero layoutStyle="custom" customContent={<HeroContent />} />
    </main>
  );
}

function HeroContent() {
  return (
    <div className={styles.heroContent}>
      <Image
        src="/hero/doublestars-graphic.png"
        height={55}
        width={62}
        className={styles.firstStar}
        alt="stars"
      />
      <h1>Meet the Teams</h1>
      <Image
        src="/hero/doublestars-graphic.png"
        height={55}
        width={62}
        className={styles.desktopSecond}
        alt="stars"
      />
      <Image
        src="/hero/singlestar-graphic.svg"
        height={31}
        width={31}
        className={styles.mobileSecond}
        alt="star"
      />
    </div>
  );
}
