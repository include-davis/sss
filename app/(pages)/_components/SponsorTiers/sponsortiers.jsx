import styles from './sponsortiers.module.scss';


const reward_list = [
    {reward_lvl: "Voyager I", amount: "$10,000+", 
    reward: ["Collaboration with company/donor to aid corporate marketing and recruitment efforts (Photo Ops, Articles, etc.)",
    "Includes all benefits from previous tiers"]}, 
    {reward_lvl: "Juno", amount: "$5,000+", 
    reward: ["Large Logo on the website and logo on the satellite",
    "Includes all benefits from previous tiers"]}, 
    {reward_lvl: "Opportunity", amount: "$1,000+", 
    reward: ["Donor name listed on Club merchandise",
    "Access to leadership resume packet",
    "Includes all benefits from previous tiers"]}, 
    {reward_lvl: "Apollo 11", amount: "$500+", 
    reward: ["Club Social Media Recognition",
    "Includes all benefits from previous tiers"]}, 
    {reward_lvl: "Sputnik I", amount: "$100+", 
    reward: ["Thank you Letter",
    "Donor name listed on SSS website"]}
    
];
export default function SponsorTiers(){
    return(
    <div className={styles.container}>
        <div className={styles.childrenContainer}>
            <h1 className={styles.title}>Sponsor Tiers</h1>
            {reward_list.map((tier,i)=> (
                <div key={i} className={styles.benefitSponsorContainer}>
                        <div className={styles.benefitContainer}>
                            <div className={styles.BenefitLevelContainer}>
                                <h3 className={styles.BenefitLevel}>{tier.reward_lvl}</h3>
                                <p className={styles.Benefitamount}>{tier.amount}</p>
                            </div>
                            <ul className={styles.benefitForSponsor}>
                                {tier.reward.map((reward,j) => (
                                    <li key={j}>{reward}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
            ))}

            <div className={styles.SponsorPacket}>
                <p className={styles.SponsorLearnMore}>
                Learn more through our Sponsor Packet or email us!
                </p>
                <a href="https://www.spacesystemsclub.org/_files/ugd/f86cee_85751d3b7a5a4da8b381fa0181e633bd.pdf" className={styles.SponsorPacketButton}>
                    <span className={styles.SponosorPacketStyle}>Sponsor Packet</span>
                </a>
            </div>
        </div>
    </div>
    );
}


