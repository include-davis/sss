import styles from "./googleCalendar.module.scss";

export default function GoogleCalendar() {
  return (
    <iframe
      src="https://calendar.google.com/calendar/embed?src=82h4l3g38g9gpa03b555d2g344@group.calendar.google.com&ctz=America/Los_Angeles"
      className={styles.googleCalendar}
      scrolling="no"
    />
  );
}
