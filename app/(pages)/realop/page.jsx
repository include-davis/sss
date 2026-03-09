import styles from "./page.module.scss";
import StructureWork from "../_components/StructureWork/structurework";
import SoftwareWork from "../_components/SoftwareWork/software-work";

export default function Realop() {
  return (
    <main>
      <h1 className={styles.test}>Realop I</h1>
      <StructureWork />
      <SoftwareWork/>
    </main>
  );
}
