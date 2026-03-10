import styles from "./page.module.scss";
import StructureWork from "../_components/StructureWork/structurework";
import SoftwareWork from "../_components/SoftwareWork/software-work";
import Mission from "../_components/Mission/mission";
import ADCS from "../_components/ADCS/ADCS";

export default function Realop() {
  return (
    <main>
      <h1 className={styles.test}>Realop I</h1>
      <Mission
        title="Mission"
        subtitle="Investigate a low cost alternative to traditional reaction wheels."
        paragraphs={[
          "The goal is to break down some of the financial barriers that keep teams from experimentation via CubeSats. In following our core belief to prioritize the education of our members, almost all components are designed from scratch, avoiding COTS parts when possible.",
          "Realop 1 is SSS's first cubesat with the mission of testing computer hard disk drives as a low cost alternative to reaction wheels.",
        ]}
      />
      <StructureWork />
      <SoftwareWork />
      <ADCS/>
    </main>
  );
}
