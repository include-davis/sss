
import styles from "./test_layout.module.scss"

export default function Test() {
  return (
    <main className={styles.main}>
      <div className={styles.main_title}>
        <p>Current Projects</p>
      </div>

      <div className={styles.container}>
        {/* Left column - Image */}
        <div className={styles.imageColumn}>
          <img src="/image1.jpg"/>
        </div>
        
        {/* Right column - Text */}
        <div className={styles.textColumn}>
          <p className={styles.second_title}>REALOP I</p>
          <div className={styles.small_text}>
            <p>Estimated Launch Date: Summer 2026</p>
            <div className={styles.p}>
              <br></br>
            </div>
            <p>Mission: Investigate a low cost alternative to traditional reaction wheels.</p>
          </div>
          <div className={styles.norm_text}>
            <p>Designed in house, REALOP I is SSS's first CubeSat with the goal to break down some of the financial barriers that keep teams from experimentation via CubeSats.</p>
            <div className={styles.p}>
              <br></br>
            </div>
            <p>We have an official launch contract with NASA to put REALOP into low Earth orbit.</p>
          </div>
          <a className={styles.a} href="https://www.roblox.com/">
            <button className={styles.button}>Learn More</button>
          </a>
        </div>
      </div>

      <div className={styles.container}>
        {/* Left column - Image */}
        <div className={styles.imageColumn2}>
          <img src="/image2.jpg"/>
        </div>
        
        {/* Right column - Text */}
        <div className={styles.textColumn}>
          <p className={styles.second_title}>University Rover Challenge (URC)</p>
          <div className={styles.small_text}>
            <p>Mission: Create a Mars Rover to Compete in the 2027 University Rover Challenge.</p>
          </div>
          <div className={styles.norm_text}>
            <p>URC aims to expand robotics at UC Davis starting in Fall 2025. The goal is to create a Mars Rover complete with a suspension drive base, chassis robotic arm, communication system, and scientific measurement tools.</p>
            <div className={styles.p}>
            <br></br>
            </div>
            <p>Enabling SSS to gain valuable industry skills in controls, autonomous movement, manufacturing, PCB design, firmware, and much more.</p>
          </div>
          <a>
            <button className={styles.button}>Launching Soon</button>
          </a>
        </div>
      </div>


      <div className={styles.container}>
        {/* Left column - Image */}
        <div className={styles.imageColumn3}>
          <img src="/image3.jpg"/>
        </div>
        
        {/* Right column - Text */}
        <div className={styles.textColumn}>
          <p className={styles.second_title}>Unmanned Aerial Systems</p>
          <div className={styles.small_text}>
            <p>Mission: Create Unmanned Aerial Systems (UAS) for URC and help train the Army Reserve Officer Training Corps (ROTC).</p>
          </div>
          <div className={styles.norm_text}>
            <p>UAS is a drone project with two purposes. The first being to create a drone to support the rover in URC (see above).</p>
            <div className={styles.p}>
            <br></br>
            </div>
            <p>The second purpose is to support the UC Davis ROTC with simulated drone warfare, helping them prepare for modern combat.</p>
          </div>
          <a>
            <button className={styles.button}>Launching Soon</button>
          </a>
        </div>
      </div>
    </main>
  );
}