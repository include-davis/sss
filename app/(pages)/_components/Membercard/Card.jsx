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
            <div className={styles.image}>
                    <img src={image || "images/avatar-placeholder.svg"} alt={name}/>
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