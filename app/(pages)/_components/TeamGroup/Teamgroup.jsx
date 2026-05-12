import styles from "./Teamgroup.module.scss";
import MemberCard from "../MemberCard/Card";

export default function TeamGroup({ title, members }) {
  return (
    <section className={styles.group}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <div className={styles.grid}>
        {members.map((member, index) => (
          <MemberCard
            key={index}
            name={member.name}
            title={member.title}
            study={member.study}
            photo={member.photo}
            email={member.email}
          />
        ))}
      </div>
    </section>
  );
}
