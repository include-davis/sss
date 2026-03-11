import styles from "./Teamgroup.module.scss";
import Membercard from "../Membercard/Card";

export default function Teamgroup({title, members}){
    return(
        <section className={styles.group}>
            {title && <h2 className={styles.title}>{title}</h2>}

            <div className={styles.grid}>
                {members.map((member, index)=> (
                    <Membercard
                    key={index}
                    name={member.name}
                    title={member.title}
                    department={member.department}
                    image={member.image}
                    emailLink={member.emailLink}/>
                ))}
            </div>
        </section>
    );
}