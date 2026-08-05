import styles from './InnowiseJobPosition.module.scss';

export function InnowiseJobPosition() {
  return (
    <div className={styles.jobWrapper}>
      <h3>Frontend Developer</h3>
      <p>
        <b>Company: </b>
        <a href="https://jobs-innowise.com/">Innowise</a> | Minsk | September 2025 - September 2026
      </p>
      <p>
        <b>Stack: </b>Next.js, React, React Query, TypeScript, React Testing Library, Storybook,
        Cypress, Cursor, Claude Sonnet
      </p>
      <h4 className={styles.aboutProject}>About Project:</h4>
      <p className={styles.serviceDescription}>
        <a href="https://jobs-innowise.com/">Innowise</a> is an outstaff and outsource company. I
        worked there as Frontend Developer for a client from California. Because of non-disclosure
        agreement, I can't tell the name of the client. The project was - digital marketing
        platform, where the companies from all over the world can advirtise their goods and services.
      </p>
    </div>
  );
}
