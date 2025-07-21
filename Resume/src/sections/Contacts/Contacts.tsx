import styles from './Contacts.module.scss';

export function Contacts() {
  return (
    <section id="contacts" className="contacts">
      <div className={styles.introduction}>
        <h1 className={styles.introductionName}>Pavel Didenko</h1>
        <br />
        <hr className={styles.hr} />
        <br />
        <h2 className={styles.introductionProfession}>Frontend Developer</h2>
        <br />
      </div>
      <div className={styles.contactInfo}>
        <div className="contact-info__foto">
          <img src="assets/img/foto.jpg" alt="foto" className={styles.foto} />
        </div>
        <div className={styles.contactInformation}>
          <h3>Contact information:</h3>
          <br />
          <p className={styles.contactInfoText}>
            <span>
              <b>Phone:</b>{' '}
            </span>
            <span>+375445379839</span>
          </p>
          <p className={styles.contactInfoText}>
            <span>
              <b>E-mail:</b>{' '}
            </span>
            <span>
              <a href="mailto:win4ester2016@yandex.ru">win4ester2016@yandex.ru</a>
            </span>
          </p>
          <p className={styles.contactInfoText}>
            <span>
              <b>LinkedIn:</b>{' '}
            </span>
            <span>
              <a href="https://www.linkedin.com/in/pavel-didenko-9b6371181/">
                pavel-didenko-9b6371181
              </a>
            </span>
          </p>
          <p className={styles.contactInfoText}>
            <span>
              <b>GitHub:</b>{' '}
            </span>
            <span>
              <a href="https://github.com/Win4esterD">Win4esterD</a>
            </span>
          </p>
        </div>
      </div>
      <div className={styles.dividers}>
        <br />
        <hr className="hr divider" />
        <br />
      </div>
    </section>
  );
}
