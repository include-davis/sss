import Image from "next/image";
import styles from "./Hero.module.scss";

/**
 *
 * @param layoutStyle Optional. "default" or "custom". defaults to default. if "custom" or other,
 *                      use customContent for children instead of textContent or imageContent
 * @param imagesrc Optional string. URL of image to display when "default" layoutStyle is used
 * @param textContent Optional ReactNode. Text to display in Hero when "default" layoutStyle is used.
 * @param customContent Optional. If given AND layoutStyle isn't "default", render customContent as children
 * @returns
 */
export default function Hero({
  layoutStyle = "default",
  textContent,
  imageSrc,
  customContent,
}) {
  if (layoutStyle === "default") {
    return (
      <div className={styles.hero}>
        <div className={styles.textContainer}>{textContent}</div>
        <div className={styles.imageContainer}>
          <Image src={imageSrc} fill />
        </div>
      </div>
    );
  }

  return <div className={styles.hero}>{customContent}</div>;
}
