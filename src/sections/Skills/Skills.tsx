import styles from './Skills.module.scss';

export function Skills() {
  return (
    <section className="proficiency" id="proficiency">
      <div className={styles.proficiencyWrapper}>
        <h2 className="proficiency__title">Skills and Proficiency:</h2>
        <br />    
        <p>
          <b>Core</b>: JavaScript, TypeScript, React, Next.js, HTML5, CSS3 (Sass)
        </p>
        <p>
          <b>State Management:</b> Redux Toolkit, Zustand, Tanstack Query
        </p>
        <p>
          <b>UI Libraries:</b> Mantine, Material UI
        </p>
        <p>
          <b>Testing:</b> Jest, React Testing Library, Cypress, Storybook
        </p>
        <p>
          <b>Tools & Practices:</b> Webpack, Git, i18n, Spec-Driven Development, AI-assisted coding
          (Cursor, Claude)
        </p>
        <p>
          <b>Languages:</b> English (C1), Spanish (B2), Russian (Native)
        </p>
      </div>
    </section>
  );
}
