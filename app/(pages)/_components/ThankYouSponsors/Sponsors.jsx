import styles from "./Sponsors.module.scss";

function SponsorTier({ tierName, tierAmount, sponsorList }) {
  return (
    <div className={styles.sponsorCard}>
      <div className={styles.sponsorTier}>
        <p className={styles.tierName}> {tierName} </p>
        <p className={styles.tierAmount}> {tierAmount} </p>
      </div>
      <div className={styles.sponsorList}>
        {sponsorList.length === 0 ? ( // if no sponsors, show "Landing Soon"
          <p className={styles.landingSoon}> Landing Soon</p>
        ) : (
          sponsorList.map((sponsor, j) => (
            <div key={j}>
              {sponsor.imgURL?.trim() ? ( // if sponsor has logo/img, show it, else, show name
                <img
                  src={sponsor.imgURL}
                  alt={sponsor.name}
                  className={styles.sponsorImage}
                />
              ) : (
                <p> {sponsor.name} </p>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default function Sponsors({
  voyagerList,
  junoList,
  opportunityList,
  apolloList,
  sputnikList,
}) {
  return (
    <div className={styles.sponsorContainer}>
      <h2>Thank you to our sponsors!</h2>
      <SponsorTier
        tierName="Voyager I"
        tierAmount="$10,000+"
        sponsorList={voyagerList}
      />
      <SponsorTier
        tierName="Juno"
        tierAmount="$5,000+"
        sponsorList={junoList}
      />
      <SponsorTier
        tierName="Opportunity"
        tierAmount="$1,000+"
        sponsorList={opportunityList}
      />
      <SponsorTier
        tierName="Apollo 11"
        tierAmount="$500+"
        sponsorList={apolloList}
      />
      <SponsorTier
        tierName="Sputnik I"
        tierAmount="$100+"
        sponsorList={sputnikList}
      />
    </div>
  );
}
