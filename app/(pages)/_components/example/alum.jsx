
import styles from "./alumni.module.scss"
import Image from "next/image";
// className={styles.main_title}

export default function Alumni(){

  const images = [
    {src: "/lockheed.svg", height: 120, width: 360, alt: "Lockheed Martin"},
    {src: "/boing.svg", height: 70, width: 360, alt: "Boing"},
    {src: "/JPL.svg", height: 100, width: 360, alt: "Jet Propulsion Laboratory"},
    {src: "/apple.svg", height: 120, width: 360, alt: "Apple"},
    {src: "/nasa.svg", height: 110, width: 360, alt: "NASA"},
    {src: "/divergent.svg", height: 100, width: 360, alt: "Divergent"},
  ]


  const images2 = [
    {src: "/northrop.svg", height: 130, width: 360, alt: "Northrop Grumman"},
    {src: "/maxar.svg", height: 110, width: 360, alt: "Maxar"},
    {src: "/nasa2.svg", height: 130, width: 360, alt: "NASA2"},
    {src: "/amd.svg", height: 130, width: 360, alt: "AMD"},
    {src: "/lawrence.svg", height: 130, width: 360, alt: "Lawrence Livermore National Laboratory"},
    {src: "/rtx.svg", height: 90, width: 360, alt: "RTX"},
    {src: "/cheveron.svg", height: 150, width: 360, alt: "Cheveron"},
  ]

  return (
    <main>
      <h1 className={styles.header}>Where our Alumni have gone</h1>
      <div className={styles.carousel}>
        <div className={styles.group}>
          {images.map((item, index) => (
            <div key={index} className={styles.box}>
              <div className={styles.image}>
                <Image src={item.src} height={item.height} width={item.width} alt={item.alt}/>
              </div>
            </div>
          ))}  
        </div>

        <div aria-hidden className={styles.group}>
          {images.map((item, index) => (
            <div key={index} className={styles.box}>
              <div className={styles.image}>
                <Image src={item.src} height={item.height} width={item.width} alt={item.alt}/>
              </div>
            </div>
          ))}  
        </div>
      </div>



      <div className={styles.carousel}>
        <div className={styles.group2}>
          {images2.map((item, index) => (
            <div key={index} className={styles.box}>
                <Image src={item.src} height={item.height} width={item.width} alt={item.alt}/>
            </div>
          ))}  
        </div>

        <div aria-hidden className={styles.group2}>
          {images2.map((item, index) => (
            <div key={index} className={styles.box}>
                <Image src={item.src} height={item.height} width={item.width} alt={item.alt}/>
            </div>
          ))}  
        </div>
      </div>
    </main>
  )
}
