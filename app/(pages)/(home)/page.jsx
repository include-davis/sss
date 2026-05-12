import styles from "./page.module.scss";
import ComeJoinUs from "../_components/ComeJoinUs/comeJoinUs";
import WhoAreWe from "../_components/WhoAreWe/who-are-we";
import WhatWereUpTo from "../_components/WhatWereUpTo/whatWereUpTo";
import Hero from "../_components/Hero/Hero";
import ThankYouSponsors from "../_components/ThankYouSponsors/Sponsors";

async function getVoyager() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_CMS_BASE_URL}/api/content/voyager?_published=true`,
      { next: { revalidate: 60 } },
    );
    const data = await res.json();
    if (!data.ok || !data.body) {
      throw new Error(data.error);
    }
    if (data.body.length === 0) {
      return [];
    }
    const parsedData = data.body.map((sponsor) => {
      console.log(sponsor.logo);
      return {
        imgURL: sponsor.logo?.[0]?.src ?? null,
        name: sponsor.name,
      };
    });
    return parsedData;
  } catch (e) {
    console.error(`Failed to fetch sponsors: ${e.message}`);
    return [];
  }
}

async function getJuno() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_CMS_BASE_URL}/api/content/juno?_published=true`,
      { next: { revalidate: 60 } },
    );
    const data = await res.json();
    if (!data.ok || !data.body) {
      throw new Error(data.error);
    }
    if (data.body.length === 0) {
      return [];
    }
    const parsedData = data.body.map((sponsor) => {
      console.log(sponsor.logo);
      return {
        imgURL: sponsor.logo?.[0]?.src ?? null,
        name: sponsor.name,
      };
    });
    return parsedData;
  } catch (e) {
    console.error(`Failed to fetch sponsors: ${e.message}`);
    return [];
  }
}

async function getOpportunity() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_CMS_BASE_URL}/api/content/opportunity?_published=true`,
      { next: { revalidate: 60 } },
    );
    const data = await res.json();
    if (!data.ok || !data.body) {
      throw new Error(data.error);
    }
    if (data.body.length === 0) {
      return [];
    }
    const parsedData = data.body.map((sponsor) => {
      console.log(sponsor.logo);
      return {
        imgURL: sponsor.logo?.[0]?.src ?? null,
        name: sponsor.name,
      };
    });
    return parsedData;
  } catch (e) {
    console.error(`Failed to fetch sponsors: ${e.message}`);
    return [];
  }
}

async function getApollo() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_CMS_BASE_URL}/api/content/apollo?_published=true`,
      { next: { revalidate: 60 } },
    );
    const data = await res.json();
    if (!data.ok || !data.body) {
      throw new Error(data.error);
    }
    if (data.body.length === 0) {
      return [];
    }
    const parsedData = data.body.map((sponsor) => {
      console.log(sponsor.logo);
      return {
        imgURL: sponsor.logo?.[0]?.src ?? null,
        name: sponsor.name,
      };
    });
    return parsedData;
  } catch (e) {
    console.error(`Failed to fetch sponsors: ${e.message}`);
    return [];
  }
}

async function getSputnik() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_CMS_BASE_URL}/api/content/sputnik?_published=true`,
      { next: { revalidate: 60 } },
    );
    const data = await res.json();
    if (!data.ok || !data.body) {
      throw new Error(data.error);
    }
    if (data.body.length === 0) {
      return [];
    }
    const parsedData = data.body.map((sponsor) => {
      console.log(sponsor.logo);
      return {
        imgURL: sponsor.logo?.[0]?.src ?? null,
        name: sponsor.name,
      };
    });
    return parsedData;
  } catch (e) {
    console.error(`Failed to fetch sponsors: ${e.message}`);
    return [];
  }
}

export default async function Home() {
  const voyagerSponsors = await getVoyager();
  const junoSponsors = await getJuno();
  const opportunitySponsors = await getOpportunity();
  const apolloSponsors = await getApollo();
  const sputnikSponsors = await getSputnik();

  const paragraphs = [
    "Space and Satellite Systems (SSS) was established in 2014. Since then, we have trained 400+ alumni and started projects in Satellites, Rovers, and Drones as a fully undergraduate led club.",
    "We aim to create an environment for all students to make meaningful contributions to projects and learn highly relevant industry skills.",
    "At SSS, we strive for great technical depth through creating custom components over off the shelf solutions to promote understanding how things work.",
  ];

  return (
    <main>
      <Hero
        textContent={<HeroText />}
        imageSrc="/hero/home-graphic.svg"
        imageAlt="Hero graphic"
      />
      <WhoAreWe
        heading="Who are we?"
        paragraphs={paragraphs}
        imageSrc="/whoarewe.png"
        imageAlt="who are we"
      />
      <WhatWereUpTo />
      <ComeJoinUs />
      <ThankYouSponsors
        voyagerList={voyagerSponsors}
        junoList={junoSponsors}
        opportunityList={opportunitySponsors}
        apolloList={apolloSponsors}
        sputnikList={sputnikSponsors}
      />
    </main>
  );
}

function HeroText() {
  return (
    <div>
      <h1>Space and Satellite Systems</h1>
      <h2>at UC Davis</h2>
    </div>
  );
}
