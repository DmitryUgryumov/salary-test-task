// Core
import { FC } from 'react';
import classnames from 'classnames';

// Components
import HelpDescription from './HelpDescription/HelpDescription';

// Interfaces
import { Salary as ISalary } from '../../../../interfaces/salary.interface';

// Styles
// @ts-ignore:next-line
import styles from './SalaryItem.module.scss';

interface PropsTypes {
  salary: ISalary;
  isActiveSalary: boolean;
  onChangeActiveSalary: (id: string) => void;
}

const SalaryItem: FC<PropsTypes> = ({ salary, isActiveSalary, onChangeActiveSalary }) => {
  return (
    <li className={styles.salary} onClick={() => onChangeActiveSalary(salary.id)}>
      <div
        className={classnames(styles.circle, {
          [styles.circleActive]: isActiveSalary,
        })}
      />
      <div>{salary.title}</div>
      {salary.helpDescription && <HelpDescription description={salary.helpDescription} />}
    </li>
  );
};

export default SalaryItem;
