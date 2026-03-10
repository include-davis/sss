import Hero from "../_components/Hero/Hero";
import styles from "./page.module.scss";

export default function Sponsor() {
  return (
    <main>
      <Hero textContent={<HeroText />} imageSrc="/missions_hero_graphic.svg" />
    </main>
  );
}

function HeroText() {
  return <h1 className={styles.heroText}>Sponsor Us</h1>;
}
