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
        <b>Stack: </b>Next.js, React, React Query, TypeScript, Jest, React Testing Library,
        Storybook, Cypress, Cursor, Claude Code, Spec Driven development, React hook form
      </p>
      <h4 className={styles.aboutProject}>About Project:</h4>
      <p className={styles.serviceDescription}>
        <a href="https://jobs-innowise.com/">Innowise</a> is an outstaff and outsource company. I
        worked there as Frontend Developer for a client from California. Because of non-disclosure
        agreement, I can't tell the name of the client, but can tell about the project. It was -
        digital marketing platform, where the companies from all over the world can advirtise their
        goods and services. Create marketing campaigns and advirtise their products in desired
        countries.
      </p>
      <h4 className={styles.doneInInnowiseTitle}>What was done in Innowise:</h4>
      <ol className={styles.InnowiseAchievementList}>
        <li>
          Suggested implementation of <b>Spec Driven development</b> in team's workflow and was
          first to test this approach. Proved that generation of design doc before feature
          implementation is very good approach, because it allowed to increase feature
          implementation speed by 35% and reduced code review time by 40%. It allowed the team to
          prevent deadline failure in December 2025 and increased development speed.
        </li>
        <li>
          Suggested implementation of <b>Spec Driven testing</b> and succesfully implemented it in
          team's workflow. It reduced time for automatic tests implementation by <b>70%</b>, because
          AI (<b>Claude Sonnet</b>) proved to be very userful for tests development, providing code
          of high quality and covering all necessary test cases.
        </li>
        <li>
          Created Guaranteed impressions campaign form. A form that had to create marketing campaign
          for the clients, who wanted to pay for impressions of their advertising announcement, not
          for clicks. Implemented strong validation by using <b>React Hook Form</b> and{' '}
          <b>Zod Schema</b>.
        </li>
        <li>
          Created reusable component for Image cropping, to allow the users of application to crop
          images of their marketing campaigns inside web application
        </li>
        <li>
          Created reusable component that allowed users to add multiple creatives for their
          marketing campaigns
        </li>
        <li>
          Provided test coverage for all implemented features, using{' '}
          <b>Storybook, React testing library and Cypress</b>
        </li>
        <li>
          After earlier suggested <b>Spec Driven testing</b> proved userful, reduced tech debt of
          the team by <b>70%</b>, by covering all critical functionality by tests, using Spec Driven
          Development (AI driven testing)
        </li>
      </ol>
    </div>
  );
}
