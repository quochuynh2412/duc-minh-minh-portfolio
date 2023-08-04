import classes from './Header.module.css';
import React from 'react';
import Link from 'next/link';
export default function Header() {
    return (
        <div className={classes.header}>
            <nav className={classes.navbar}>
                <div className={classes.title}>
                    <Link href="/">
                        Duc Minh Minh
                    </Link>
                </div>
                <div>
                    <ul className={classes.menu}>
                        <li>
                            <Link href="/test">Projects</Link>
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
            <div className={classes.scroller} id='scroller'></div>
        </div>
    );
}
