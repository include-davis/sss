"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Nav.module.scss";
import Image from "next/image";

export default function Navbar() {
  const [linkMenuOpen, toggleLinkMenu] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={`${styles.mobileTop} ${linkMenuOpen ? styles.open : ""}`}>
      <Link href="/">
        <Image
          src="/icon.png"
          alt="Space and Satellite Systems"
          width={105}
          height={105}
          className={styles.logo}
        />
      </Link>
      <button
        className={styles.hamburger}
        onClick={() => toggleLinkMenu(!linkMenuOpen)}
      >
        {linkMenuOpen ? (<Image src="/x.svg" width={19.5} height={19.5} alt="menu"/>) : (<Image src="/hamburger-menu.svg" width={19.5} height={19.5} alt="menu"/>)}
      </button>
      </div>
      <div className={`${styles.pages} ${linkMenuOpen ? styles.open : ""}`}>
        <Link href="/">Home</Link>
        <Link href="/missions">Missions</Link>
        <Link href="/teams">Teams</Link>
        <Link href="/sponsor">Sponsor Us</Link>
        <Link href="/join">Join Us</Link>
      </div>
    </nav>
  );
}

