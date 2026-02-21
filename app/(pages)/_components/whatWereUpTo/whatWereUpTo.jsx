import styles from "./whatWereUpTo.module.scss"

export default function WhatWereUpTo() {
  const projects = [
    {
      title: "REALOP I",
      date: "Summer 2026",
      mission: "Investigate a low cost alternative to traditional reaction wheels",
      buttonText: "Learn More",
      img: "/REALOPI.png"
    },
    {
      title: "URC",
      date: "Winter 2027",
      mission: "Create a Mars Rover to compete in the 2027 University Rover Challenge",
      buttonText: "Launching Soon",
      img: "/URC.png"
    },
    {
      title: "UAS",
      date: "ongoing project",
      mission: "Create Unmanned Aerial Systems for URC and help train the ROTC",
      buttonText: "Launching Soon",
      img: "/UAS.png"
    }
  ];

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>What we're up to:</h1>
      
      <div className={styles.cardsContainer}>
        {projects.map((project, index) => (
          <section key={index} className={styles.card}>
            <div className={styles.cardHeader}>
              <img src={project.img} alt = {project.title}/>
            </div>
            <div className={styles.cardBody}>
              <h2 className={styles.projectTitle}>{project.title}</h2>
              <p className={styles.launchDate}>Launch Date: {project.date}</p>
              <p className={styles.missionText}>Mission: {project.mission}</p>
              <a href={project.type === 'dynamic' ? "#" : undefined} 
              className={`${styles.button} ${styles[project.type]}`}>
                {project.buttonText}
              </a>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}