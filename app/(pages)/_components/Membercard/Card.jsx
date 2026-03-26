import styles from "./Card.module.scss";
import { Mail } from "lucide-react";
import Image from "next/image";

export default function MemberCard({
  name,
  title,
  department,
  image,
  emailLink,
}) {
  return (
    <div className={styles.card}>
      <Image
        className={image ? styles.image : styles.placeholder}
        src={image || "/images/avatar-placeholder.svg"}
        alt={name}
        width={250}
        height={257}
      />

      <div className={styles.info}>
        <div className={styles.topRow}>
          <h3 className={styles.name}>{name}</h3>

          {emailLink && (
            <a href={`mailto:${emailLink}`} className={styles.email}>
              <Mail size={27} />
            </a>
          )}
        </div>

        <p className={styles.title}>{title}</p>
        <p className={styles.department}>{department}</p>
      </div>
    </div>
  );
}
