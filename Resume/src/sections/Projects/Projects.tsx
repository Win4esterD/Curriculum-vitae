import styles from './Projects.module.scss';
import { projects } from '../../data/projects';

export function Projects() {
  return (
    <section className="projects" id="projects">
      <div className={styles.projectsWrapper}>
        <h2 className="projects__title">My projects:</h2>
        <br />
        <table className={styles.projectsTable}>
          <thead className={styles.projectsTHead}>
            <tr className={styles.projectsTR}>
              <th className={styles.projectsTH}>Project</th>
              <th className={styles.projectsTH}>GitHub</th>
              <th className={styles.projectsTH}>Technologies</th>
              <th className={styles.projectsTH}>Publishment</th>
            </tr>
          </thead>
          <tbody className="projects__tbody">
            {projects.reverse().map((project) => (
              <tr className={styles.projectsTR}>
                <td className={styles.projectsTD}>{project.name}</td>
                <td className={styles.projectsTD}>
                  <a href={project.link}>link</a>
                </td>
                <td className={styles.projectsTD}>{project.technologies}</td>
                <td className={styles.projectsTD}>
                  <a href={project.publishment}>Published</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
