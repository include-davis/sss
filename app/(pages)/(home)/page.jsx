import styles from "./page.module.scss"
import Test from "../_components/test";

export default function Home() {
  return (
    <main>
      <div className={styles.test}>Home</div>
      <Test title="title" text="text"/>
    </main>
  );
}
