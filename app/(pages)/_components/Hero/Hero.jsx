import Image from "next/image";
import styles from "./Hero.module.scss";

/**
 *
 * @param layoutStyle Optional. "default" or "custom". defaults to default. if "custom" or other,
 *                      use customContent for children instead of textContent or imageContent
 * @param imageSrc Optional string. URL of image to display when "default" layoutStyle is used
 * @param imageAlt Optional string (required if imageSrc is provided). Alt text for image
 * @param textContent Optional ReactNode. Text to display in Hero when "default" layoutStyle is used.
 *                    Note: Provide unstyled elements.
 * @param customContent Optional. If given AND layoutStyle isn't "default", render customContent as children
 * @returns
 */
export default function Hero({
  layoutStyle = "default",
  textContent,
  imageSrc,
  imageAlt,
  customContent,
}) {
  if (layoutStyle === "default") {
    return (
      <div className={styles.hero}>
        <div className={styles.textContainer}>{textContent}</div>
        <div className={styles.imageContainer}>
          <Image src={imageSrc} alt={imageAlt} fill />
        </div>
      </div>
    );
  }

  return <div className={styles.hero}>{customContent}</div>;
}
