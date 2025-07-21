import styles from './Header.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navUl}>
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
        <img className="burger-menu__img" src="/assets/img/icons/burger_menu.png" alt="Burger menu" />
      </div>
    </header>
  );
}
