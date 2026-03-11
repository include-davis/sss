import styles from "./page.module.scss";
import ComeJoinUs from "../_components/ComeJoinUs/comeJoinUs";
import WhoAreWe from "../_components/WhoAreWe/who-are-we";
import WhatWereUpTo from "../_components/WhatWereUpTo/whatWereUpTo";
import Hero from "../_components/Hero/Hero";
import ThankYouSponsors from "../_components/ThankYouSponsors/Sponsors";  

export default function Home() {
  const paragraphs = [
    "Space and Satellite Systems (SSS) was established in 2014. Since then, we have trained 400+ alumni and started projects in Satellites, Rovers, and Drones as a fully undergraduate led club.",
    "We aim to create an environment for all students to make meaningful contributions to projects and learn highly relevant industry skills.",
    "At SSS, we strive for great technical depth through creating custom components over off the shelf solutions to promote understanding how things work.",
  ];

  return (
    <main>
      <Hero
        textContent={<HeroText />}
        imageSrc="/home_hero_graphic.svg"
        imageAlt="Hero graphic"
      />
      <WhoAreWe
        heading="Who are we?"
        paragraphs={paragraphs}
        imageSrc="/whoarewe.png"
        imageAlt="who are we"
      />
      <WhatWereUpTo />
      <ComeJoinUs />
      <ThankYouSponsors />
    </main>
  );
}

function HeroText() {
  return (
    <div>
      <h1>Space and Satellite Systems</h1>
      <h2>at UC Davis</h2>
    </div>
  );
}
