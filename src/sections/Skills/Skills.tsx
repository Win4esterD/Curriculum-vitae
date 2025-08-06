import styles from './Skills.module.scss';

export function Skills() {
  return (
    <section className="proficiency" id="proficiency">
      <div className={styles.proficiencyWrapper}>
        <h2 className="proficiency__title">Skills and Proficiency:</h2>
        <br />
        <ul className={styles.proficiency_Ul}>
          <li className={styles.proficiencyLi}>React</li>
          <li className={styles.proficiencyLi}>Next.js</li>
          <li className={styles.proficiencyLi}>Redux</li>
          <li className={styles.proficiencyLi}>Zustand</li>
          <li className={styles.proficiencyLi}>HTML/CSS</li>
          <li className={styles.proficiencyLi}>SaSS</li>
          <li className={styles.proficiencyLi}>JavaScript</li>
          <li className={styles.proficiencyLi}>TypeScript</li>
          <li className={styles.proficiencyLi}>Webpack</li>
          <li className={styles.proficiencyLi}>Git/GitHub</li>
          <li className={styles.proficiencyLi}>Dayjs</li>
          <li className={styles.proficiencyLi}>Mantine</li>
          <li className={styles.proficiencyLi}>Material UI</li>
          <li className={styles.proficiencyLi}>English (C1)</li>
          <li className={styles.proficiencyLi}>Spanish (B2)</li>
          <li className={styles.proficiencyLi}>Russian (Native)</li>
        </ul>
      </div>
    </section>
  );
}
