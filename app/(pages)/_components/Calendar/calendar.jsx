import styles from "./calendar.module.scss";
import GoogleCalendar from "../GoogleCalendar/googleCalendar";

export default function Calendar() {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Calendar</h1>
      <GoogleCalendar />
    </div>
  );
}
