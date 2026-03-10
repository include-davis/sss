import Hero from "../_components/Hero/Hero";
import styles from "./page.module.scss";

export default function Sponsor() {
  return (
    <main>
      <Hero
        textContent={<h1>Sponsor Us</h1>}
        imageSrc="/missions_hero_graphic.svg"
        imageAlt="Hero graphic"
      />
    </main>
  );
}
