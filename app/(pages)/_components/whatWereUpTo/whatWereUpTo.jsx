import styles from "./whatWereUpTo.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function WhatWereUpTo() {
  const projects = [
    {
      title: "REALOP I",
      date: "Summer 2026",
      mission:
        "Investigate a low cost alternative to traditional reaction wheels",
      buttonText: "Learn More",
      img: "/REALOPI.png",
      link: "/realop",
    },
    {
      title: "URC",
      date: "Winter 2027",
      mission:
        "Create a Mars Rover to compete in the 2027 University Rover Challenge",
      buttonText: "Launching Soon",
      img: "/URC.png",
      link: "",
    },
    {
      title: "UAS",
      date: "ongoing project",
      mission: "Create Unmanned Aerial Systems for URC and help train the ROTC",
      buttonText: "Launching Soon",
      img: "/UAS.png",
      link: "",
    },
  ];

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>What we're up to:</h1>

      <div className={styles.cardsContainer}>
        {projects.map((project, index) => (
          <section key={index} className={styles.card}>
            <Image
              className={styles.image}
              src={project.img}
              alt={project.title}
              width={400}
              height={222}
            />
            <div className={styles.cardBody}>
              <h2 className={styles.projectTitle}>{project.title}</h2>
              <div className={styles.paragraphs}>
                <p
                  className={`${styles.launchDate} ${!project.link ? styles.inactive : ""}`}
                >
                  Launch Date: {project.date}
                </p>
                <p
                  className={`${styles.missionText} ${!project.link ? styles.inactive : ""}`}
                >
                  Mission: {project.mission}
                </p>
              </div>
              <Link
                href={project.link || "#"}
                className={`${styles.button} ${!project.link ? styles.inactive : ""}`}
              >
                {project.buttonText}
              </Link>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
