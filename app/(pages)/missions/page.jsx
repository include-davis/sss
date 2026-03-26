import styles from "./page.module.scss";
import PastMissions from "../_components/PastMissions/pastMissions";
import Hero from "../_components/Hero/Hero";
import CurrentProjects from "../_components/CurrentProjects/currentProj";
import InterstedInHelping from "../_components/InterestedInHelping/interested";

export default function Missions() {
  return (
    <main>
      <Hero
        textContent={<h1>Missions</h1>}
        imageSrc="/hero/missions-graphic.svg"
        imageAlt="Hero graphic"
      />
      <CurrentProjects />
      <PastMissions />
      <InterstedInHelping />
    </main>
  );
}
