/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link'; // Wraps <a> elements
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link href="/">
          <a className={styles.headerLogoLink}>
            <span className={styles.filmyteLogo}>Filmyte</span>
          </a>
        </Link>
        <nav className={styles.navWrapper}>
          <ul className={styles.navList}>
            <li>
              <Link href="/discover">
                <a>Discover</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
