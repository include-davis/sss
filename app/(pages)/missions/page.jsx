import styles from "./page.module.scss";
import PastMissions from "../_components/PastMissions/pastMissions";
import Hero from "../_components/Hero/Hero";
import Image from "next/image";

export default function Missions() {
  return (
    <main>
      <Hero textContent={<HeroText />} imageContent={<HeroImage />} />
      <PastMissions />
    </main>
  );
}

function HeroText() {
  return <h1 className={styles.heroText}>Missions</h1>;
}

function HeroImage() {
  return <Image src="/missions_hero_graphic.svg" fill />;
}
