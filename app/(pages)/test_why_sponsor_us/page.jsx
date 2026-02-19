import styles from './page.module.scss';

export default function Whysponsorus(){
    return(
        <div className={styles.container}>
            {/* 
            <Image className={styles.picture} src='...' alt='..'  width=.. height...           */} 
            <h1 className={styles.SponsorUsTitle}>Why should you sponsor us?</h1>
            <ul className={styles.benefits}>
                <li>Tax Benefits for a charitable donation</li>
                <li>Every dollar is put into the club to train members</li>
                <li>Invest in the next generation of engineers</li>
                <li>Help Students connect theory and pracitcal</li>
                <li>Recruit from our club for interns or full time offers</li>
            </ul>
        </div>


    );
}