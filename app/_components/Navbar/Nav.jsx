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
          width={100}
          height={100}
        />
      </Link>
      <div className={styles.right}>
      <ul className={styles.pages}>
        <li><Link href="/Home">Home</Link></li>
        <li><Link href="/missions">Missions</Link></li>
        <li><Link href="/teams">Teams</Link></li>
        <li><Link href="/sponsor">Sponsor Us</Link></li>
        <li><Link href="/join">Join Us</Link></li>
      </ul>
      </div>
    </nav>
  );
}

