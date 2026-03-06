import Link from "next/link";
import Image from "next/image"
import styles from "./software-work.module.scss";

export default function SoftwareWork() {
  // js code outside of return

  return (
    // put html stuff inside div
    <div className={styles.pageBody}>
      <div className={styles.content}>
        <div className={styles.LeftContainer}>
          <h1 className={styles.softwareHeader}>Software Work</h1>
          <p className={styles.softwareDescription}>
            Our Software team focuses mainly on the embedded software and
            writing our custom operating system on the orbital platform called
            IntelliSat. IntelliSat is written fully in C, has bare metal
            drivers, and uses FreeRTOS to schedule mission tasks. Work in
            Software involves using STM32CubeIDE, looking at datasheets,
            documentation, looking at schematics, and embedded C
          </p>
          {/*SVG on Mobile*/}
          <div className={styles.SVGContainerMobile}>
            <Image
              src={"./github.svg"}
              alt="Github Logo"
              height={429}
              width={418}
              style={{width: "100%", height: "auto" }}
            />
          </div>

          <div className={styles.SSSButtonsContainer}>
            <Link
              href={
                "https://github.com/Space-and-Satellite-Systems-UC-Davis/IntelliSat"
              }
              className={styles.SSSButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              IntelliSat - GitHub
            </Link>

            <Link
              href={
                "https://github.com/Space-and-Satellite-Systems-UC-Davis/REALOP_Radio_Controller"
              }
              className={styles.SSSButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              Radio Controller - GitHub
            </Link>
            <Link
              href={
                "https://github.com/Space-and-Satellite-Systems-UC-Davis/REALOP_MGT_Controller"
              }
              className={styles.SSSButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              MGT Controller - GitHub
            </Link>
          </div>
        </div>
        {/*Desktop SVG*/}
        <div className={styles.SVGContainerDesktop}>
          <Image 
          src={"./github.svg"}
          alt="Github Logo"
          height={429}
          width={418}
          ></Image>
        </div>
      </div>
    </div>
  );
}
