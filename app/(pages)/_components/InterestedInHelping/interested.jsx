import styles from "./interested.module.scss";

export default function InterstedInHelping() {
  return (
    <div className={styles.main}>
      <h1>Interested in Helping Out Space and Satellite Systems?</h1>
      <p>
        Want to help build our next mission? Turn your curiosity into real
        projects? Work on a project you get to launch to space?{" "}
      </p>
      <p>Then join the Space and Satellite Systems Club!</p>
      <a
        href="https://www.youtube.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Join us Today!
      </a>
    </div>
  );
}
