import styles from "./page.module.scss";
import HowCanYouJoin from "../_components/HowCanYouJoin/howCanYouJoin";
import WhyJoinSSS from "../_components/WhyJoinSSS/why-join-sss";

export default function Join() {
  return (
    <main>
      <h1 className={styles.test}>Join Us</h1>
      <WhyJoinSSS
        heading="Why join SSS?"
        paragraph1="Join a community and network who truly enjoy engineering and making things!"
        paragraph2="We make it a priority to make sure all members have the opportunity to have meaningful contributions to the project and learn industry relevant skills. We always have plenty to do!"
      />
      <HowCanYouJoin />
    </main>
  );
}
