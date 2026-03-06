import styles from "./page.module.scss";
import ComeJoinUs from "../_components/comeJoinUs/comeJoinUs";

export default function Home() {
  return (
    <main>
      <h1 className={styles.test}>Home</h1>
      <ComeJoinUs />
    </main>
  );
}
