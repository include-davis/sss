import styles from "./pastMissions.module.scss"
import React from 'react';
import Image from 'next/image';

export default function PastMissions() {
  const projects = [
    { title: 'Water Bear', src: '/WaterBear.png', width: 800, height: 445, alt: 'Water Bear', date: 'Project from 2025', mission: 'Mission: Create a prototype Mars rover as a proof of concept to prepare for the University Rover Challenge in 2027.'},
    { title: 'FAR', src: '/FAR.png', width: 800, height: 445, alt: 'FAR', date: 'Project from 2022', mission: 'Mission: Work with RPL at UCSD to test the robustness of a new mechanical structural configuration.'  },
    { title: 'MAPS', src: '/MAPS.png', width: 800, height: 445, alt: 'MAPS', date: 'Project from 2019', mission: 'Mission: Design a cost effective and sustainable 2-story inflatable greenhouse for martian agriculture.' },
    { title: 'QuARCS', src: '/QuARCS.png', width: 800, height: 445, alt: 'QuARCS', date: 'Project from 2018', mission: 'Mission: Observe efficiency of satellite-transceiver/transmitter interactions and Dopper Shift between QuARCS and Iridium.' },
    { title: 'CanSat', src: '/CanSat.png', width: 800, height: 445, alt: 'CanSat', date: 'Launched in 2016', mission: "Mission: Launch a CanSat to sample atmospheric air composition and obtain images of Earth's surface."}
  ];

  return (
    <div className={styles.PastMissions}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Past Missions</h1>
        </div>
        
        <div className={styles.carsouelWrapper}>
          <div className={styles.projectGrid}>
            {projects.map((project, index) => (
              <div key={index} className={styles.projectCard}>
                <div className={styles.image}>
                  <Image 
                    src={project.src} 
                    width={project.width} 
                    height={project.height}
                    alt={project.alt}
                    className={styles.img}
                  />
                </div>

                <div className={styles.cardLabel}>
                  <h2>{project.title}</h2>
                  <h3>{project.date}</h3>
                  <h4>{project.mission}</h4>
                  <button className={project.button}> Learn More </button>
                </div>
              </div>
            ))}

          
            {projects.map((project, index) => (
              <div key={index} className={styles.projectCard}>
                <div className={styles.image}>
                  <Image 
                    src={project.src} 
                    width={project.width} 
                    height={project.height}
                    alt={project.alt}
                    className={styles.img}
                  />
                </div>

                <div className={styles.cardLabel}>
                  <h2>{project.title}</h2>
                  <h3>{project.date}</h3>
                  <h4>{project.mission}</h4>
                  <button className={project.button}> Learn More </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}