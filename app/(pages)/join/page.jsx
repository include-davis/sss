import styles from "./page.module.scss";
import HowCanYouJoin from "../_components/HowCanYouJoin/howCanYouJoin";

export default function Join() {
  return (
    <main>
      <h1 className={styles.test}>Join Us</h1>
      <HowCanYouJoin />
    </main>
  );
}
