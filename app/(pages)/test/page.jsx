"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";
// import styles from "./mixins.scss"

// import .scss file (use styles)

export default function software() {
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
          <svg
            width="429"
            height="418"
            viewBox="0 0 429 418"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M214.167 0C186.042 0 158.193 5.53959 132.209 16.3025C106.225 27.0653 82.6152 42.8408 62.728 62.728C22.5639 102.892 0 157.366 0 214.167C0 308.828 61.4658 389.141 146.49 417.625C157.198 419.338 160.625 412.699 160.625 406.917V370.722C101.301 383.572 88.665 342.024 88.665 342.024C78.8133 317.181 64.8925 310.542 64.8925 310.542C45.4033 297.263 66.3917 297.692 66.3917 297.692C87.8083 299.191 99.1592 319.751 99.1592 319.751C117.792 352.304 149.274 342.667 161.482 337.527C163.409 323.606 168.977 314.182 174.974 308.828C127.429 303.474 77.5283 285.056 77.5283 203.458C77.5283 179.686 85.6667 160.625 99.5875 145.419C97.4458 140.065 89.95 117.792 101.729 88.8792C101.729 88.8792 119.719 83.0967 160.625 110.724C177.544 106.012 195.962 103.657 214.167 103.657C232.371 103.657 250.789 106.012 267.708 110.724C308.614 83.0967 326.604 88.8792 326.604 88.8792C338.383 117.792 330.888 140.065 328.746 145.419C342.667 160.625 350.805 179.686 350.805 203.458C350.805 285.27 300.69 303.26 252.931 308.614C260.641 315.253 267.708 328.318 267.708 348.235V406.917C267.708 412.699 271.135 419.552 282.057 417.625C367.082 388.927 428.333 308.828 428.333 214.167C428.333 186.042 422.794 158.193 412.031 132.209C401.268 106.225 385.493 82.6152 365.605 62.728C345.718 42.8408 322.109 27.0653 296.125 16.3025C270.141 5.53959 242.291 0 214.167 0Z"
              fill="#F7F7F7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
