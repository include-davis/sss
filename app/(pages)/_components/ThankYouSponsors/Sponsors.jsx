import styles from "./Sponsors.module.scss";
import Image from "next/image";

export default function Sponsors() {
    // array with tiers, amount, and sponsors
    const tiers = [
        {
            name: "Voyager I",
            amount: "$10,000+",
            sponsors: [
                { name:"UC Davis Give Day", img: ""}, 
                { name: "Forged Gold ROTC, UC Davis", img: "" },
            ]
        },
        { name: "Juno", amount: "$5,000+", sponsors: [] },
        { 
            name: "Opportunity", 
            amount: "$1,000+", 
            sponsors: [
                { name: "Robinson Family" }, 
                { name: "Wong Family" }, 
                { name: "Solberg Family"}
            ] 
        }, 
        { name:"Apollo 11", amount:"$500+", sponsors:[] }, 
        {
            name: "Sputnik I",
            amount: "$100+",
            sponsors: [
                { name: "Springmeyer Family"}, 
                { name: "See Family"}, 
                { name: "Gill Family"}, 
                { name: "Jadav Family"}, 
                { name: "DeHaeseleer Family"}, 
            ]
        }

    ]
    return(
        <div className={styles.sponsorContainer}>
            <h2>Thank you to our sponsors!</h2>
            {tiers.map((tier, i) => (
            <div key={i} className={styles.sponsorCard}>
                <div className={styles.sponsorTier}>
                    <p className={styles.tierName}> {tier.name} </p>
                    <p className={styles.tierAmount}> {tier.amount} </p>
                </div>
                <div className={styles.sponsorList}>
                    {tier.sponsors.length === 0 ? ( // if no sponsors, show "Landing Soon"
                        <p className={styles.landingSoon}> Landing Soon</p>
                    ) : (
                        tier.sponsors.map((sponsor, j) => (
                            <div key={j}>
                                {sponsor.img ? ( // if sponsor has logo/img, show it, else, show name 
                                    <Image src={sponsor.img} alt={sponsor.name} width={150} height={80} />
                                ) : (
                                    <p> {sponsor.name} </p>
                                )}
                            </div>
                        ))
                    )
                    }
                </div>
            </div>
            ))} 
        </div>
        
    )
}
