import styles from './Career.module.scss';
import { OwnerPanelJobPosition } from '../../components/OwnerPanelJobPosition/OwnerPanelJobPosition';
import { OtherJobPosition } from '../../components/OtherJobPosition/OtherJobPosition';

export function Career() {
  return (
    <section className={styles.careerWrapper}>
      <h2 className="jobs__title">Job Positions:</h2>
      <OwnerPanelJobPosition />
      <OtherJobPosition
        positionName={'Python Developer Trainee'}
        company={'iTechArt Group'}
        companySiteLink={'https://itechartgroup.by/'}
        city="Minsk"
        workingPeriod="February 2022 - May 2022"
        responsibilities={[
          'Backend development with Django framework',
          'API testing using PyTest library',
        ]}
      />
      <OtherJobPosition
        positionName={'Marketing Specialist'}
        company={'ODO Jupiter'}
        companySiteLink={'https://www.cran.by'}
        city="Borisov"
        workingPeriod="January 2019 - March 2020"
        responsibilities={[
          'Business conversation',
          'Translation of technical documentation',
          'Studying of the market',
          'Contacts with the clients and suppliers',
        ]}
      />
      <OtherJobPosition
        positionName={'Extruder Maschinist'}
        company={'OOO Design'}
        companySiteLink={'https://deal.by/cs/2312'}
        city="Borisov"
        workingPeriod="January 2011 - December 2018"
        responsibilities={['Production']}
      />
      <OtherJobPosition
        positionName={'CNC Machine Operator'}
        company={'OAO BATE'}
        companySiteLink={'https://www.oaobate.by/'}
        city="Borisov"
        workingPeriod="August 2010 - August 2011"
        responsibilities={['Production']}
      />
    </section>
  );
}
