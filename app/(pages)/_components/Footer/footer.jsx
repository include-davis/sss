import styles from "./footer.module.scss";
import Link from "next/link";
import Image from "next/image";

function Pages() {
  const pages = [
    { title: "Home", path: "/" },
    { title: "Missions", path: "/missions" },
    { title: "Teams", path: "/teams" },
    { title: "Sponsor Us", path: "/sponsor" },
    { title: "Join Us", path: "/join" },
  ];

  return (
    <div className={styles.pages}>
      {pages.map((page, index) => {
        return (
          <Link href={page.path} key={index}>
            {page.title}
          </Link>
        );
      })}
    </div>
  );
}

function Logos({ className }) {
  const logos = [
    {
      alt: "Discord",
      imagePath: "/discord-logo.svg",
      link: "https://discord.gg/zH55CQeK",
    },
    {
      alt: "Instagram",
      imagePath: "/instagram-logo.svg",
      link: "https://www.instagram.com/spacesystemsclub/",
    },
    {
      alt: "Gmail",
      imagePath: "/gmail-logo.svg",
      link: "mailto:spacesystemsclub@gmail.com",
    },
  ];
  return (
    <div className={className}>
      {logos.map((logo, index) => {
        return (
          <Link href={logo.link} key={index}>
            <Image src={logo.imagePath} width={50} height={50} alt={logo.alt} />
          </Link>
        );
      })}
    </div>
  );
}

export default function Footer() {
  return (
    <div>
      <div className={styles.main}>
        <div className={styles.left}>
          <Image
            className={styles.sssLogo}
            src="/icon.png"
            width={170}
            height={170}
            alt="SSS logo"
          />
          <h2 className={styles.title}>Space & Satellite Systems</h2>
          <div className={styles.subtitleContainer}>
            <div className={styles.line} />
            <h3 className={styles.subtitle}>Aggies Ad Astra</h3>
          </div>
          <Logos className={styles.logos} />
        </div>
        <Pages />
        <Logos className={styles.logosMobile} />
      </div>
      <div className={styles.include}>
        <p className={styles.text}>Made with 💛 by #include © 2026</p>
      </div>
    </div>
  );
}
