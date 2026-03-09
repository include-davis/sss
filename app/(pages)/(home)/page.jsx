import styles from "./page.module.scss";
import ComeJoinUs from "../_components/ComeJoinUs/comeJoinUs";
import WhoAreWe from "../_components/WhoAreWe/who-are-we";
import WhatWereUpTo from "../_components/WhatWereUpTo/whatWereUpTo";

export default function Home() {
  const paragraphs = [
    "Space and Satellite Systems (SSS) was established in 2014. Since then, we have trained 400+ alumni and started projects in Satellites, Rovers, and Drones as a fully undergraduate led club.",
    "We aim to create an environment for all students to make meaningful contributions to projects and learn highly relevant industry skills.",
    "At SSS, we strive for great technical depth through creating custom components over off the shelf solutions to promote understanding how things work.",
  ];

  return (
    <main>
      <h1 className={styles.test}>Home</h1>
      <WhoAreWe
        heading="Who are we?"
        paragraphs={paragraphs}
        imageSrc="/whoarewe.png"
        imageAlt="who are we"
      />
      <WhatWereUpTo />
      <ComeJoinUs />
    </main>
  );
}
