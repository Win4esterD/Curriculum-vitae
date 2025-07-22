import styles from './JobPositions.module.scss';

export function JobPositions() {
  return (
    <section className="jobs" id="jobs">
      <div className={styles.jobsWrapper}>
        <h2 className="jobs__title">Job Positions:</h2>
        <br />
        <table className={styles.jobsTable}>
          <thead className={styles.jobsTHead}>
            <tr className={styles.jobsTR}>
              <th className={styles.jobsTH}>Company</th>
              <th className={styles.jobsTH}>Position</th>
              <th className={styles.jobsTH}>Start Date</th>
              <th className={styles.jobsTH}>End Date</th>
            </tr>
          </thead>
          <tbody className="jobs__tbody">
            <tr className={styles.jobsTR}>
              <td className={styles.jobsTD}>
                <a href="https://www.linkedin.com/company/owner-panel/posts/?feedView=all">
                  Owner Panel
                </a>
              </td>
              <td className={styles.jobsTD}>Frontend Developer</td>
              <td className={styles.jobsTD}>May 2024</td>
              <td className={styles.jobsTD}>Working now</td>
            </tr>
            <tr className={styles.jobsTR}>
              <td className={styles.jobsTD}>
                <a href="https://www.solvd.com/">Solvd</a>
              </td>
              <td className={styles.jobsTD}>Trainee Frontend Developer</td>
              <td className={styles.jobsTD}>Jun. 2023</td>
              <td className={styles.jobsTD}>Dec. 2023</td>
            </tr>
            <tr className={styles.jobsTR}></tr>
            <tr className={styles.jobsTR}>
              <td className={styles.jobsTD}>
                <a href="https://join.itechart.com/">iTechArt</a>
              </td>
              <td className={styles.jobsTD}>Trainee Python Developer</td>
              <td className={styles.jobsTD}>Feb. 2022</td>
              <td className={styles.jobsTD}>April. 2022</td>
            </tr>
            <tr className={styles.jobsTR}>
              <td className={styles.jobsTD}>
                <a href="http://cran.by/">ODO Jupiter</a>
              </td>
              <td className={styles.jobsTD}>Marketing specialist</td>
              <td className={styles.jobsTD}>Jan. 2019</td>
              <td className={styles.jobsTD}>Mar. 2020</td>
            </tr>
            <tr className={styles.jobsTR}>
              <td className={styles.jobsTD}>
                <a href="https://deal.by/cs/2312">OOO Design</a>
              </td>
              <td className={styles.jobsTD}>Extruder operator</td>
              <td className={styles.jobsTD}>Aug. 2011</td>
              <td className={styles.jobsTD}>Dec. 2018</td>
            </tr>
            <tr className={styles.jobsTR}>
              <td className={styles.jobsTD}>
                <a href="https://www.oaobate.by/">OAO BATE</a>
              </td>
              <td className={styles.jobsTD}>CNC Operator</td>
              <td className={styles.jobsTD}>Aug. 2010</td>
              <td className={styles.jobsTD}>Dec. 2011</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
