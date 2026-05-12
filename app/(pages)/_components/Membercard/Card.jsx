import styles from "./Card.module.scss";
import { Mail } from "lucide-react";
import Image from "next/image";

export default function MemberCard({ name, title, study, photo, email }) {
  return (
    <div className={styles.card}>
      <Image
        className={photo ? styles.image : styles.placeholder}
        src={photo || "/images/avatar-placeholder.svg"}
        alt={name}
        width={250}
        height={250}
      />

      <div className={styles.info}>
        <div className={styles.topRow}>
          <h3 className={styles.name}>{name}</h3>

          {email && (
            <a href={`mailto:${email}`} className={styles.email}>
              <Mail size={27} />
            </a>
          )}
        </div>

        <p className={styles.title}>{title}</p>
        <p className={styles.study}>{study}</p>
      </div>
    </div>
  );
}
