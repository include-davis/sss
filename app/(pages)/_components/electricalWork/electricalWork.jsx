"use client";
import styles from "./electricalWork.module.scss";

export default function ElectricalWork() {
  const CARDS = [
    { img: "/OrbitalPlatformRev1.jpg", caption: "Orbital Platform Rev. 1" },
    { img: "/OrbitalPlatformRev2.jpg", caption: "Orbital Platform Rev. 2" },
    { img: "/OrbitalPlatformRev3.jpg", caption: "Orbital Platform Rev. 3" },
    { img: "/ElectronicSpeedController.jpg", caption: "Electronic Speed Controller" },
    { img: "/SolarPanel.jpg", caption: "Solar Panel" },
    { img: "/RFFrontEnd.jpg", caption: "RF Front End" },
    { img: "/BatteryManagement.jpg", caption: "Battery Management" },
    { img: "/Magnetorquer.jpg", caption: "Magnetorquer" },
  ];

return (
    <section className={styles.section}>
      <div className={styles.topText}>
        <h2 className={styles.sectionTitle}>Electrical Work</h2>
        <p className={styles.sectionDescription}>
          Our Electrical Department has been hard at work these past few years to
          create many custom PCBs for the satellite. The work involved includes
          using KiCad for design, soldering and assembly for PCBs, and rigorous
          testing
        </p>
      </div>
      <div className={styles.carousel}>
        <div className={styles.carouselTrackWrapper}>
          <div className={styles.carouselTrack}>
            {CARDS.map((item, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.cardImage}>
                  <img src={item.img} alt={item.caption} />
                </div>
                <div className={styles.cardCaption}>{item.caption}</div>
              </div>
            ))}
          </div>
          <div aria-hidden="true" className={styles.carouselTrack}>
            {CARDS.map((item, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.cardImage}>
                  <img src={item.img} alt="" />
                </div>
                <div className={styles.cardCaption}>{item.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}