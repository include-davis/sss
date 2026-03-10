import styles from "./page.module.scss";
import ContactForm from "../_components/ContactForm/Contact";

export default function Sponsor() {
  return (
    <main>
      <h1 className={styles.test}>Sponsor Us</h1>
      <ContactForm />
    </main>
  );
}
