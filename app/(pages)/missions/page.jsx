import styles from "./page.module.scss";
import PastMissions from "../_components/PastMissions/pastMissions";
import Hero from "../_components/Hero/Hero";

export default function Missions() {
  return (
    <main>
      <Hero
        textContent={<h1>Missions</h1>}
        imageSrc="/missions_hero_graphic.svg"
        imageAlt="Hero graphic"
      />
      <PastMissions />
    </main>
  );
}
