"use client";
// import { useState } from "react";
import Link from "next/link";
import Image from "next/image"
import styles from "./software-work.module.scss";
// import styles from "./mixins.scss"

// import .scss file (use styles)

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

        <div className={styles.SVGContainer}>
          <Image 
          src={"./Vector.svg"}
          alt="Github Logo"
          height={429}
          width={418}
          ></Image>
        </div>
      </div>
    </div>
  );
}
