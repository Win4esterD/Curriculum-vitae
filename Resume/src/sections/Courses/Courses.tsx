import styles from './Courses.module.scss';
import { courses } from '../../data/courses';

export function Courses() {
  return (
    <section className="courses" id="courses">
      <div className={styles.coursesWrapper}>
        <h2 className="courses__title">Courses and Certificates:</h2>
        <br />
        <table className={styles.coursesTable}>
          <thead className={styles.coursesTHead}>
            <tr className="courses__tr">
              <th className={styles.coursesTH}>Course Name</th>
              <th className={styles.coursesTH}>Course provider</th>
              <th className={styles.coursesTH}>Course link</th>
              <th className={`${styles.coursesTH} ${styles.year}`}>Completed</th>
              <th className={styles.coursesTH}>Certificate</th>
            </tr>
          </thead>
          <tbody className="courses__tbody">
            {courses.reverse().map((course) => (
              <tr className={styles.coursesTR}>
                <td className={styles.coursesTD}>{course.name}</td>
                <td className={styles.coursesTD}>{course.provider}</td>
                <td className={styles.coursesTD}>
                  <a href={course.link}>link</a>
                </td>
                <td className={styles.coursesTD}>{course.year}</td>
                <td className={styles.coursesTD}>
                  {course.certificate? <a href={course.certificate}>Yes</a>: 'No'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
