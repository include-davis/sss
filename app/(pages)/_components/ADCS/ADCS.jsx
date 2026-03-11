import styles from "./ADCS.module.scss";
import Image from "next/image";
import sunSensorRig from "@/public/sunsensor.png";
import coilsRig from "@/public/Testingrig.png";
import sunSensorSim from "@/public/simulation.png";

// Holds immages + description for continous carosuel
const cards = [
  { src: sunSensorRig, label: "Sun Sensor Testing Rig" },
  { src: coilsRig, label: "Coils Testing Rig" },
  { src: sunSensorSim, label: "Sun Sensor Simulation" },
];

export default function ADCS() {
  return (
    <div>
      <div className={styles.Page}>
        <div className={styles.TopContent}>
          <h1 className={styles.ADCSTitle}>ADCS Work</h1>
          <p className={styles.MissionDescription}>
            ADCS is the mission of the satellite itself and represents our
            interdisciplinary team that does work in electrical, structures, and
            software.
          </p>
          <p className={styles.MissionDescription}>
            They have been hard at working doing HDD testing, creating our
            coils, using sun sensors to figure out satellite orientation, and
            writing algorithms to handle the data and outputs of the various
            components on the satellite.
          </p>
        </div>
        <div className={styles.ImageContainer}>
          <div className={styles.ImageCarousel}>
            <div className={styles.Group}>
              {[...cards, ...cards].map((card, i) => (
                <div key={i} className={styles.CardWrapper}>
                  <div className={styles.Card}>
                    <Image
                      src={card.src}
                      alt={card.label}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className={styles.captionContainer}>
                    <span className={styles.caption}>{card.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
