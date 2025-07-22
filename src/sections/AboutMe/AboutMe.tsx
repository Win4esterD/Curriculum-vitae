import styles from './AboutMe.module.scss';

export function AboutMe() {
  return (
    <section className="about" id="about">
      <div className={styles.aboutWrapper}>
        <h2 className="about__title">About me</h2>
        <br />
        <p className={styles.aboutText}>
          <span>
            <b>Country:</b>{' '}
          </span>
          <span> Belarus</span>
        </p>
        <p className={styles.aboutText}>
          <span>
            <b>City:</b>{' '}
          </span>
          <span> Borisov</span>
        </p>
        <p className={styles.aboutText}>
          <span>
            <b>Ready for relocation:</b>{' '}
          </span>
          <span> Yes</span>
        </p>
        <p className={styles.aboutMe}>
          I'm a Frontend developer, capable of developing complex web applications, that require
          modern approaches in development. I have decent experience of working with modern Frontend
          technologies, such as:
          <b>React, Next.js, JavaScript/TypeScript, HTML, CSS, Git, Webpack</b>
          and other technologies. I'm capable of working in a team and single-handedly,
          understanding other people's code, doing business conversations and understanding clients'
          wants and needs. I have a well-developed emotional intelligence, that allows me to
          understand other people and get along well with them, find effective and mutually
          beneficial solutions for business and product development.I posess such soft skills like:
          <b>
            problem-solving, critical thinking, interpersonal communication, self learning, time
            management, emotional intelligence.
          </b>
        </p>
      </div>
      <div className={styles.dividers}>
        <br />
        <hr className="hr divider" />
        <br />
      </div>
    </section>
  );
}
