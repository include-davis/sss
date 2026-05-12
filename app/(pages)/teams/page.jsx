import Image from "next/image";
import Hero from "../_components/Hero/Hero";
import styles from "./page.module.scss";
import TeamGroup from "../_components/TeamGroup/Teamgroup";

async function getAdvisors() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_CMS_BASE_URL}/api/content/advisors?_published=true`,
      { next: { tags: ["cms"] } },
    );
    const data = await res.json();
    if (!data.ok || !data.body) {
      throw new Error(data.error);
    }
    if (data.body.length === 0) {
      return [];
    }
    const parsedData = data.body.map((member) => {
      return {
        photo: member.photo[0],
        name: member.name,
        title: member.title,
        study: member.study,
        email: member.email,
      };
    });
    return parsedData;
  } catch (e) {
    console.error(`Failed to fetch advisors: ${e.message}`);
    return [];
  }
}

async function getAdmins() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_CMS_BASE_URL}/api/content/admin?_published=true`,
      { next: { tags: ["cms"] } },
    );
    const data = await res.json();
    if (!data.ok || !data.body) {
      throw new Error(data.error);
    }
    if (data.body.length === 0) {
      return [];
    }
    const parsedData = data.body.map((member) => {
      return {
        photo: member.photo[0],
        name: member.name,
        title: member.title,
        study: member.study,
        email: member.email,
      };
    });
    return parsedData;
  } catch (e) {
    console.error(`Failed to fetch admins: ${e.message}`);
    return [];
  }
}

async function getEletrical() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_CMS_BASE_URL}/api/content/electrical?_published=true`,
      { next: { tags: ["cms"] } },
    );
    const data = await res.json();
    if (!data.ok || !data.body) {
      throw new Error(data.error);
    }
    if (data.body.length === 0) {
      return [];
    }
    const parsedData = data.body.map((member) => {
      return {
        photo: member.photo[0],
        name: member.name,
        title: member.title,
        study: member.study,
        email: member.email,
      };
    });
    return parsedData;
  } catch (e) {
    console.error(`Failed to fetch electrical members: ${e.message}`);
    return [];
  }
}

async function getLeadership() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_CMS_BASE_URL}/api/content/leadership?_published=true`,
      { next: { tags: ["cms"] } },
    );
    const data = await res.json();
    if (!data.ok || !data.body) {
      throw new Error(data.error);
    }
    if (data.body.length === 0) {
      return [];
    }
    const parsedData = data.body.map((member) => {
      return {
        photo: member.photo[0],
        name: member.name,
        title: member.title,
        study: member.study,
        email: member.email,
      };
    });
    return parsedData;
  } catch (e) {
    console.error(`Failed to fetch executive leadership: ${e.message}`);
    return [];
  }
}

async function getSoftware() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_CMS_BASE_URL}/api/content/software?_published=true`,
      { next: { tags: ["cms"] } },
    );
    const data = await res.json();
    if (!data.ok || !data.body) {
      throw new Error(data.error);
    }
    if (data.body.length === 0) {
      return [];
    }
    const parsedData = data.body.map((member) => {
      return {
        photo: member.photo[0],
        name: member.name,
        title: member.title,
        study: member.study,
        email: member.email,
      };
    });
    return parsedData;
  } catch (e) {
    console.error(`Failed to fetch software members: ${e.message}`);
    return [];
  }
}

async function getStructures() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_CMS_BASE_URL}/api/content/structures?_published=true`,
      { next: { tags: ["cms"] } },
    );
    const data = await res.json();
    if (!data.ok || !data.body) {
      throw new Error(data.error);
    }
    if (data.body.length === 0) {
      return [];
    }
    const parsedData = data.body.map((member) => {
      return {
        photo: member.photo[0],
        name: member.name,
        title: member.title,
        study: member.study,
        email: member.email,
      };
    });
    return parsedData;
  } catch (e) {
    console.error(`Failed to fetch structures members: ${e.message}`);
    return [];
  }
}

export default async function Teams() {
  const advisors = await getAdvisors();
  const leadership = await getLeadership();
  const electrical = await getEletrical();
  const structures = await getStructures();
  const software = await getSoftware();
  const admins = await getAdmins();

  return (
    <main>
      <div className={styles.heroContent}>
        <Image
          src="/hero/doublestars-graphic.png"
          height={55}
          width={62}
          className={styles.firstStar}
          alt="stars"
        />
        <h1>Meet the Teams</h1>
        <Image
          src="/hero/doublestars-graphic.png"
          height={55}
          width={62}
          className={styles.desktopSecond}
          alt="stars"
        />
        <Image
          src="/hero/singlestar-graphic.svg"
          height={31}
          width={31}
          className={styles.mobileSecond}
          alt="star"
        />
      </div>
      <TeamGroup title="Advisors" members={advisors} />
      <TeamGroup title="Executive Leadership" members={leadership} />
      <TeamGroup title="Electrical Team" members={electrical} />
      <TeamGroup title="Structures Team" members={structures} />
      <TeamGroup title="Software Team" members={software} />
      <TeamGroup title="Administrative and Finance Team" members={admins} />
    </main>
  );
}
