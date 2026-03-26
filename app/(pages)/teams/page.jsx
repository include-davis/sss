import Image from "next/image";
import Hero from "../_components/Hero/Hero";
import styles from "./page.module.scss";
import TeamGroup from "../_components/TeamGroup/Teamgroup";

const Advisors = [
  {
    name: "Rich Whittle",
    title: "Assistant Professor",
    department: "Mechanical and Aerospace Engineering",
    image: "",
    emailLink: "rswhittle@ucdavis.edu",
  },
  {
    name: "Alan Dugger",
    title: "Assistant Professor",
    department: "Military Science",
    image: "/headshots/alandugger.png",
    emailLink: "adugger@ucdavis.edu",
  },
  {
    name: "Adam Zufall",
    title: "PhD-Student Advisor",
    department: "Inspection Satellite Technologies",
    image: "",
    emailLink: "admzufall@ucdavis.edu",
  },
];

export default function Teams() {
  return (
    <main>
      <div className={styles.heroContent}>
        <Image
          src="/hero/doublestars-graphic.png"
          height={55}
          width={62}
          className={styles.firstStar}
          alt="stars"
        />
        <h1>Meet the Teams</h1>
        <Image
          src="/hero/doublestars-graphic.png"
          height={55}
          width={62}
          className={styles.desktopSecond}
          alt="stars"
        />
        <Image
          src="/hero/singlestar-graphic.svg"
          height={31}
          width={31}
          className={styles.mobileSecond}
          alt="star"
        />
      </div>
      <TeamGroup title="Advisors" members={Advisors} />
      <TeamGroup title="Executive Leadership" members={Advisors} />
      <TeamGroup title="Electrical Team" members={Advisors} />
      <TeamGroup title="Structures Team" members={Advisors} />
      <TeamGroup title="Software Team" members={Advisors} />
      <TeamGroup title="Administrative and Finance Team" members={Advisors} />
    </main>
  );
}
