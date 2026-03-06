import styles from "./comeJoinUs.module.scss";
import GoogleCalendar from "../googleCalendar/googleCalendar";

export default function ComeJoinUs() {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Come Join Us!</h1>
      <GoogleCalendar />
    </div>
  );
}
