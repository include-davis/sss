import styles from "./howCanYouJoin.module.scss"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import discord from '@/public/Vector.svg'

export default function HowCanYouJoin(){
    return(
        <div className={styles.container}>
            <div className={styles.left}>
                <Link href="https://discord.com/invite/e4YvMNVe7Q" className={styles.link}>
                    <div className = {styles.imageContainer}>
                        <Image
                        src ={discord}
                        alt = "Join our discord"
                        width = {200.4}
                        height = {152.73}
                        />
                    </div>
                </Link>
                <p className = {styles.caption}>Click me to join the Discord!</p>
            </div>
            <div className={styles.right}>
                <h1 className ={styles.heading}> How can you join?</h1>
                <div className ={styles.textBlock}>
                    <p className = {styles.text}>We accept members at all times throughout the school year with our best time to join being Fall to participate in the yearly Fall Training. In our commitment to open and accessible engineering we have...</p>
                    <ul className={styles.text}>
                        <li>No Membership Fee</li>
                        <li>No Applications</li>
                        <li>No Interviews</li>
                    </ul>
                    <p className = {styles.text}>Just join the Discord Server, look out for announcements for a general meeting, or reach out to the lead of the department you want to join on Discord saying you're interested and what you should do next!</p>
                </div>
            </div>
        </div>
    )
}