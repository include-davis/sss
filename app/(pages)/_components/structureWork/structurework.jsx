import styles from "./structurework.module.scss"
import React from 'react';
import Image from 'next/image';

export default function StructureWork() {
  const projects = [
    { title: 'Partial Assembly', src: '/partial-assembly.png', width: 450, height: 336, alt: 'Partial Assembly' },
    { title: 'Thermal Analysis', src: '/thermal-analysis.png', width: 450, height: 336, alt: 'Thermal Analysis' },
    { title: 'Battery Holder', src: '/battery.png', width: 450, height: 336, alt: 'Battery Holder' },
    { title: 'REALOP I Drawing', src: '/REALOP.png', width: 450, height: 336, alt: 'REALOP I Drawing'},
    { title: 'Mech Analysis', src: '/MechAnalysis.png', width: 450, height: 336, alt: 'Mech Analysis'},
    { title: 'Assembly', src: '/assembly.png', width: 450, height: 336, alt: 'Assembly'}
  ];

  return (
    <div className={styles.structureWork}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Structure Work</h1>
          <p className={styles.text}>
            Our Structures team has been working on creating the frame, making sure everything fits in place, and analyzing the satellite for structure and thermal integrity.
          </p>
          <p className={styles.text}>
            Work in structures for the satellite includes using Onshape for design, Hand tools and machines for assembly, Ansys Workbench for mechanical, and Thermal Desktop for thermal analysis
          </p>
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
                  <h3>{project.title}</h3>
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
                  <h3>{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}