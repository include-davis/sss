import styles from "./page.module.scss";
import PastMissions from "../_components/pastMissions/pastMissions";

export default function Missions() {
  return (
    <main>
      <h1 className={styles.test}>Missions</h1>
      <PastMissions />
    </main>
  );
}
