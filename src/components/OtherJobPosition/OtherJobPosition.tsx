import styles from './OtherJobPosition.module.scss';

type OtherJobPositionProps = {
  positionName: string;
  company: string;
  companySiteLink?: string;
  city: string;
  workingPeriod: string;
  jobDescription?: string;
  responsibilities: string[];
};

export function OtherJobPosition({
  positionName,
  company,
  companySiteLink,
  city,
  workingPeriod,
  jobDescription,
  responsibilities,
}: OtherJobPositionProps) {
  return (
    <div className={styles.jobWrapper}>
      <h3>{positionName}</h3>
      <p>
        <b>Company: </b>
        <a href={companySiteLink}>{company}</a> | {city} | {workingPeriod}
      </p>
      {jobDescription && <p className={styles.jobDescription}>{jobDescription}</p>}
      <h4 className={styles.keyResponsibilitiesTitle}>Key responsibilities:</h4>
      <ol className={styles.responsibilities}>
        {responsibilities.map((responsibility, i) => (
          <li key={i}>{responsibility}</li>
        ))}
      </ol>
    </div>
  );
}
