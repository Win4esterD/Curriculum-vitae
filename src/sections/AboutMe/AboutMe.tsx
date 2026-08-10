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
          <span> Minsk</span>
        </p>
        <p className={styles.aboutMe}>
          I'm a Frontend developer with 4 years of experience, capable of developing complex web
          applications that require modern approaches in development. I have decent experience
          working with modern Frontend technologies, you can find my technical stack below. I
          actively use AI to increase my performance and reduce the time needed for implementation
          of new features and tests, but carefully review it, to prevent the introduction of large
          amounts of unmaintainable code. I'm capable of working both in a team and independently,
          understanding other people's code, having business conversations and understanding
          clients' needs and requirements. I have well-developed emotional intelligence, that allows
          me to understand other people and get along well with them, find effective and mutually
          beneficial solutions for business and product development. I possess such soft skills
          as&nbsp;
          <b>
            problem-solving, critical thinking, interpersonal communication, self-learning, time
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
