import styles from './Header.module.scss';
import { useState } from 'react';
import { useMediaQuery } from '../../hooks/useMediaQuery';

export function Header() {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 600px)');

  const setBurgerMenu = () => {
    if (isMobile) {
      setBurgerOpen(!burgerOpen);
    }
  };

  return (
    <header
      className={styles.header}
      style={{
        height:
          (!isMobile && '2.5em') ||
          (isMobile && !burgerOpen && '25px') ||
          (isMobile && burgerOpen && '50px') ||
          '2.5rem',
      }}
    >
      <nav className={styles.nav}>
        <ul className={`${styles.navUl} ${burgerOpen && styles.navUlShown}`}>
          <li className={styles.navLi}>
            <a className={styles.navLink} href="#contacts">
              Contacts
            </a>
          </li>
          <li className={styles.navLi}>
            <a className={styles.navLink} href="#about">
              About
            </a>
          </li>
          <li className={styles.navLi}>
            <a className={styles.navLink} href="#proficiency">
              Skills
            </a>
          </li>
          <li className={styles.navLi}>
            <a className={styles.navLink} href="#projects">
              Projects
            </a>
          </li>
          <li className={styles.navLi}>
            <a className={styles.navLink} href="#education">
              Education
            </a>
          </li>
          <li className={styles.navLi}>
            <a className={styles.navLink} href="#jobs">
              Jobs
            </a>
          </li>
          <li className={styles.navLi}>
            <a className={styles.navLink} href="#courses">
              Courses
            </a>
          </li>
        </ul>
      </nav>
      <div className={styles.burgerMenu}>
        <img
          className="burger-menu__img"
          src="/assets/img/icons/burger_menu.png"
          alt="Burger menu"
          onClick={setBurgerMenu}
        />
      </div>
    </header>
  );
}
