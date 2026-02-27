import styles from "./Card.module.scss";
import { Mail } from "lucide-react";

export default function Membercard({
    name,
    title,
    department,
    image,
    emailLink
}) {
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                {image ? (
                    <img src={image} alt={name}/>
                ) : (
                    <div className={styles.placeholder}/>
                )}
            </div>

            <div className={styles.info}>
                <div className={styles.topRow}>
                    <h3 className={styles.name}>{name}</h3>

                    {emailLink && (
                        <a href={`mailto:${emailLink}`} className={styles.email}>
                            <Mail size ={27} />
                        </a>
                    )}
                </div>

                <p className={styles.title}>{title}</p>
                <p className={styles.department}>{department}</p>
            </div>
        </div>
    );
}