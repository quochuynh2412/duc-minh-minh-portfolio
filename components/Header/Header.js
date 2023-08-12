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
                        className='flex flex-row'>
                        <Image className={styles.logo} src="/DMM.svg" width={50} height={50} alt="logo" />
                    </Link>
                </div>
                <div>
                    <ul className={styles.menu}>
                        <li>
                            <Link href="/projects">Projects</Link>
                        </li>
                        <li>
                            <Link href="/test">About</Link>
                        </li>
                        <li>
                            <Link href="/test">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className={styles.scroller} id='scroller'></div>
        </div>
    );
}
