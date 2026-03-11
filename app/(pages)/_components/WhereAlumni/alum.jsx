
import styles from "./alumni.module.scss"
import Image from "next/image";
// className={styles.main_title}

export default function Alumni(){

  const images = [
    {src: "/lockheed.svg", height: 108, width: 360, alt: "Lockheed Martin"},
    {src: "/boing.svg", height: 65, width: 379, alt: "Boing"},
    {src: "/JPL.svg", height: 106, width: 377, alt: "Jet Propulsion Laboratory"},
    {src: "/apple.svg", height: 171, width: 304, alt: "Apple"},
    {src: "/nasa.svg", height: 156, width: 183, alt: "NASA"},
    {src: "/divergent.svg", height: 40, width: 318, alt: "Divergent"},
  ]


  const images2 = [
    {src: "/northrop.svg", height: 193, width: 343, alt: "Northrop Grumman"},
    {src: "/maxar.svg", height: 128, width: 303, alt: "Maxar"},
    {src: "/nasa2.svg", height: 187, width: 194, alt: "NASA2"},
    {src: "/amd.svg", height: 167, width: 268, alt: "AMD"},
    {src: "/lawrence.svg", height: 66, width: 339, alt: "Lawrence Livermore National Laboratory"},
    {src: "/rtx.svg", height: 108, width: 280, alt: "RTX"},
    {src: "/cheveron.svg", height: 206, width: 275, alt: "Cheveron"},
  ]

  return (
    <main className={styles.main}>
      <h1 className={styles.header}>Where our Alumni have gone</h1>

      <div className={styles.carousel}>

        <div className={styles.group}>
          {images.map((item, index) => (
            <div key={index} className={styles.box}>
              <div className={styles.image}>
                <Image className={styles.logo} src={item.src} height={item.height} width={item.width} alt={item.alt}/>
              </div>
            </div>
          ))}  
        </div>

        <div aria-hidden className={styles.group}>
          {images.map((item, index) => (
            <div key={index} className={styles.box}>
              <div className={styles.image}>
                <Image className={styles.logo} src={item.src} height={item.height} width={item.width} alt={item.alt}/>
              </div>
            </div>
          ))}  
        </div>
        
      </div>



      <div className={styles.carousel}>
        <div className={styles.group2}>
          {images2.map((item, index) => (
            <div key={index} className={styles.box}>
                <Image className={styles.logo} src={item.src} height={item.height} width={item.width} alt={item.alt}/>
            </div>
          ))}  
        </div>

        <div aria-hidden className={styles.group2}>
          {images2.map((item, index) => (
            <div key={index} className={styles.box}>
                <Image className={styles.logo} src={item.src} height={item.height} width={item.width} alt={item.alt}/>
            </div>
          ))}  
        </div>
      </div>
    </main>
  )
}
