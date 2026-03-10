import styles from "./page.module.scss";
import PastMissions from "../_components/PastMissions/pastMissions";
import Hero from "../_components/Hero/Hero";

export default function Missions() {
  return (
    <main>
      <Hero textContent={<HeroText />} imageSrc="/missions_hero_graphic.svg" />
      <PastMissions />
    </main>
  );
}

function HeroText() {
  return <h1 className={styles.heroText}>Missions</h1>;
}
