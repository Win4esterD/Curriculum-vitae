import styles from './Education.module.scss';

export function Education() {
  return (
    <section className="education" id="education">
      <div className={styles.educationWrapper}>
        <h2 className="education__title">Education:</h2>
        <br />
        <table className={styles.educationTable}>
          <thead className={styles.educationTHead}>
            <tr className={styles.educationTR}>
              <th className={styles.educationTH}>Name of the educational institution</th>
              <th className={styles.educationTH}>Years of study</th>
              <th className={styles.educationTH}>Specialization</th>
              <th className={styles.educationTH}>Profession</th>
            </tr>
          </thead>
          <tbody className="education__tbody">
            <tr className={styles.educationTR}>
              <td className={styles.educationTD}>
                <a href="http://bseu.by/">Belorussian State Economics University</a>
              </td>
              <td className={styles.educationTD}>2011 - 2017</td>
              <td className={styles.educationTD}>International Economy</td>
              <td className={styles.educationTD}>Economist</td>
            </tr>
            <tr className={styles.educationTR}>
              <td className={styles.educationTD}>
                <a href="https://bgk-borisov.by/">Borisov State College</a>
              </td>
              <td className={styles.educationTD}>2007 - 2010</td>
              <td className={styles.educationTD}>Mechanical Engineering</td>
              <td className={styles.educationTD}>CNC Operator / Adjuster</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
