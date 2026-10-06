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
          Frontend Developer with 4 years of experience in digital marketing, booking, e-commerce,
          and business applications. Stack: React, Next.js, TypeScript/JavaScript, Mantine, Material
          UI, TailwindCSS, HTML, CSS, Storybook, React Testing Library, Cypress, Playwright. I work
          autonomously: I can take a product request, turn it into technical requirements, and drive
          it through to release. I build React components and their interaction with APIs, make
          architectural decisions, own features as a module owner, and take responsibility for code
          quality. I know how to fit into an existing architecture carefully and adapt my solutions
          to it. I use AI agents deliberately in my daily workflow (Claude Opus, Cursor) — for task
          decomposition, validating architectural hypotheses, and finding edge cases. I pick the
          right model for the job: for routine and high-volume operations I use Xiaomi MiMo as a
          cost-efficient option with a high value-to-token-spend ratio, while for complex
          architectural tasks I rely on top-tier models. That said, I always review generated code
          thoroughly and take personal responsibility for the result. I focus on the end business
          outcome, not on code for code's sake.
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
