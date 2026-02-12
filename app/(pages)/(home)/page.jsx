import styles from "./page.module.scss"
import Mission from "../_components/mission/mission";

export default function Home() {
  return (
    <main>
      <Mission
        title="Mission"
        subtitle="Investigate a low cost alternative to traditional reaction wheels."
        paragraphs={[
          "The goal is to break down some of the financial barriers that keep teams from experimentation via CubeSats. In following our core belief to prioritize the education of our members, almost all components are designed from scratch, avoiding COTS parts when possible.",
          "Realop 1 is SSS's first cubesat with the mission of testing computer hard disk drives as a low cost alternative to reaction wheels."
        ]}
      />
    </main>
  );
}
