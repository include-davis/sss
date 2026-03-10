import Hero from "../_components/Hero/Hero";
import styles from "./page.module.scss";

export default function Teams() {
  return (
    <main>
      <Hero layoutStyle="custom" customContent={<HeroText/>} />
    </main>
  );
}

function HeroText() {
  return <h1 className={styles.heroText}>Meet the Teams</h1>;
}
