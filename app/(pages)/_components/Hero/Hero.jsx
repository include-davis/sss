import styles from "./Hero.module.scss";

/**
 * 
 * @param layoutStyle "default" or "custom". defaults to default. if "custom" or other, 
 *                      use customContent for children instead of textContent or imageContent
 * @param textContent Text to display in Hero. Should be ReactNode
 * @param imageContent Image to display in Hero. Should be a Next <Image> component ReactNode with fill=true
 * @param customContent Default to null. If given AND layoutStyle isn't "default", render customContent as children
 * @returns 
 */
export default function Hero({
  layoutStyle = "default",
  textContent,
  imageContent,
  customContent = null,
}) {
  if (layoutStyle === "default") {
    return (
      <div className={styles.hero}>
        <div className={styles.textContainer}>{textContent}</div>
        <div className={styles.imageContainer}>{imageContent}</div>
      </div>
    );
  }

  return <div className={styles.hero}>{customContent}</div>;
}
