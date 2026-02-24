import styles from './page.module.scss';


export default function sponsortiers(){
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>Sponsor Tiers</h1>
            <div className={styles.benefitSponsorContainer}>
            <div className={styles.benfitContainer}>
                <h2 className={styles.BenefitLevelContainer}>
                    <h3 className={styles.BenefitLevel}>Voyager I</h3>
                    <p classname={styles.Benefitamount}>$10,000+</p>
                </h2>
                <ul className={styles.benefitForSponsor}>
                    <li>Collaboration with company/donor to aid corporate marketing and recruitment efforts (Photo Ops, Articles, etc.)</li>
                    <li>Includes all benefits from previous tiers</li>
                </ul>
            </div>
            </div>

            <div className={styles.benefitSponsorContainer}>
            <div className={styles.benfitContainer}>
                <h2 className={styles.BenefitLevelContainer}>
                    <h3 className={styles.BenefitLevel}>Juno</h3>
                    <p classname={styles.Benefitamount}>$5,000+</p>
                </h2>
                <ul className={styles.benefitForSponsor}>
                    <li>Large Logo on the website and logo on the satellite</li>
                    <li>Includes all benefits from previous tiers</li>
                </ul>
            </div>
            </div>

            <div className={styles.benefitSponsorContainer}>
            <div className={styles.benfitContainer}>
                <h2 className={styles.BenefitLevelContainer}>
                    <h3 className={styles.BenefitLevel}>Opportunity</h3>
                    <p classname={styles.Benefitamount}>$1,000+</p>
                </h2>
                <ul className={styles.benefitForSponsor}>
                    <li>Donor name listed on Club merchandise</li>
                    <li>Access to leadership resume packet</li>
                    <li>Includes all benefits from previous tiers</li>
                </ul>
            </div>
            </div>
            
            <div className={styles.benefitSponsorContainer}>
            <div className={styles.benfitContainer}>
                <h2 className={styles.BenefitLevelContainer}>
                    <h3 className={styles.BenefitLevel}>Apollo 11</h3>
                    <p classname={styles.Benefitamount}>$500+</p>
                </h2>
                <ul className={styles.benefitForSponsor}>
                    <li>Club Social Media Recognition</li>
                    <li>Includes all benefits from previous tiers</li>
                </ul>
            </div>
            </div>

            <div className={styles.benefitSponsorContainer}>
            <div className={styles.benfitContainer}>
                <h2 className={styles.BenefitLevelContainer}>
                    <h3 className={styles.BenefitLevel}>Sputnik I</h3>
                    <p classname={styles.Benefitamount}>$100+</p>
                </h2>
                <ul className={styles.benefitForSponsor}>
                    <li>Thank you Letter</li>
                    <li>Donor name listed on SSS website</li>
                </ul>
            </div>
            </div>

            <div className={styles.SponsorPacket}>
                <p className={styles.SponsorLearnMore}>
                Learn more through our Sponsor Packet or email us!
                </p>
                <button className={styles.SponsorPacketButton}>
                    <p className={styles.SponosorPacketStyle}>Sponsor Packet</p>
                </button>
            </div>
        </div>
    );
}


