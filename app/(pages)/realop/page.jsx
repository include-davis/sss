import styles from "./page.module.scss";
import StructureWork from "../_components/StructureWork/structurework";
import SoftwareWork from "../_components/SoftwareWork/software-work";
import Mission from "../_components/Mission/mission";
import ADCS from "../_components/ADCS/ADCS";
import ElectricalWork from "../_components/ElectricalWork/electricalWork";
import Image from "next/image";

export default function Realop() {
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
      <Mission
        title="Mission"
        subtitle="Investigate a low cost alternative to traditional reaction wheels."
        paragraphs={[
          "The goal is to break down some of the financial barriers that keep teams from experimentation via CubeSats. In following our core belief to prioritize the education of our members, almost all components are designed from scratch, avoiding COTS parts when possible.",
          "Realop 1 is SSS's first cubesat with the mission of testing computer hard disk drives as a low cost alternative to reaction wheels.",
        ]}
      />
      <ElectricalWork />
      <StructureWork />
      <SoftwareWork />
      <ADCS />
    </main>
  );
}
