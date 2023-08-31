import styles from './Header.module.css';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
export default function Header() {
    return (
        <div className={styles.header}>
            <nav className={styles.navbar}>
                <div className={styles.title}>
                    <Link href="/"
                        className='font-bold text-white hover:text-[#FFC939]'>
                        {/* <Image className={styles.logo} src="/DMM.svg" width={50} height={50} alt="logo" /> */}
                        ducmvx
                    </Link>
                </div>
                <div>
                    <ul className={styles.menu}>
                        <li>
                            <Link href="/projects">projects</Link>
                        </li>
                        <li>
                            <Link href="/test">about</Link>
                        </li>
                        <li>
                            <Link href="/test">contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className={styles.scroller} id='scroller'></div>
        </div>
    );
}
