import styles from './Career.module.scss';
import { OwnerPanelJobPosition } from '../../components/OwnerPanelJobPosition/OwnerPanelJobPosition';

export function Career() {
  return (
    <section className={styles.careerWrapper}>
      <h2 className="jobs__title">Job Positions:</h2>
      <OwnerPanelJobPosition />
    </section>
  );
}
