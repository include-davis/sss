import styles from './whysponsorus.module.scss';
import Image from 'next/image';

export default function WhySponsorUs(){
    return(
        <div className={styles.container}>
            <div className={styles.textPictureContainer}>
            {/*use this if path to image don't work <Image src="/public/Mask-group 1.png" alt="Team Picture" className={styles.picture} ></Image>*/}
                <img src="/Mask-group_1.png" alt="TeamPicture" className={styles.picture} ></img>
                <div className={styles.textContainer}>
                    <h1 className={styles.SponsorUsTitle}>Why should you sponsor us?</h1>
                        <ul className={styles.benefit}>
                            <li>Tax Benefits for a charitable donation</li>
                            <li>Every dollar is put into the club to train members</li>
                            <li>Invest in the next generation of engineers</li>
                            <li>Help Students connect theory and pracitcal</li>
                            <li>Recruit from our club for interns or full time offers</li>
                        </ul>
                </div>
            </div>
        </div>


    );
}  