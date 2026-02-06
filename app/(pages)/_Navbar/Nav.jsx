"use client";

import {useState} from "react";
import Link from "next/link";
import styles from "./Nav.module.scss";
import Image from "next/image";

export default function Navbar({logoSrc, logoAl, pages}) {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>
        <Image
          src="/favicon.png"
          alt="Space and Satellite Systems"
          width={48}
          height={48}
          priority
        />
      </Link>
      <ul className={styles.pages}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/missions">Missions</Link></li>
        <li><Link href="/teams">Teams</Link></li>
        <li><Link href="/sponsor">Sponsor Us</Link></li>
        <li><Link href="/join">Join Us</Link></li>
      </ul>
    </nav>
  );
}

