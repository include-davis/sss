import styles from "./ADCS.module.scss"



export default function ADCS()
{
  return(

    <div>

      <div className={styles.TopContent}>
        <h1>ADCS Work</h1>
        <p>ADCS is the mission of the satellite itself and represents our interdisciplinary team that does work in electrical, structures, and software.</p>
        <p>They have been hard at working doing HDD testing, creating our coils, using sun sensors to figure out satellite orientation, and writing algorithms to handle the data and outputs of the various components on the satellite.</p>
      </div>

      <div className={styles.BottomContent}>
        
      </div>

    </div>

  );
  
}