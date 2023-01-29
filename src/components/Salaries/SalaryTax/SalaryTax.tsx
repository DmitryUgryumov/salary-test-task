// Core
import { FC } from 'react';
import { useSelector } from 'react-redux';

// Interfaces
import { SalaryStore } from '../../../interfaces/salaryStore.interface';

// Utils
import formatSalary from '../../../utils/formatSalary';

// Styles
// @ts-ignore:next-line
import styles from './SalaryTax.module.scss';

const SalaryTax: FC = () => {
  const salary = useSelector((state: SalaryStore) => state.salary);
  const activeSalary = useSelector((state: SalaryStore) => state.activeSalary);
  const isShowSalaryTax = useSelector((state: SalaryStore) => state.isShowSalaryTax);

  if (!activeSalary.isShowTax) {
    return null;
  }

  return (
    <ul className={styles.taxContainer}>
      <li className={styles.taxItem}>
        <div>
          {`${isShowSalaryTax ? formatSalary(salary * 0.87) : formatSalary(salary)} ₽ `}
          <span>сотрудник будет получать на руки</span>
        </div>
      </li>

      <li className={styles.taxItem}>
        <div>
          {`${isShowSalaryTax ? formatSalary(salary * 0.13) : formatSalary((salary * 0.13) / 0.87)} ₽ `}
          <span>НДФЛ, 13% от оклада</span>
        </div>
      </li>

      <li className={styles.taxItem}>
        <div>
          {`${isShowSalaryTax ? formatSalary(salary) : formatSalary((salary * 0.13) / 0.87 + salary)} ₽ `}
          <span>за сотрудника в месяц</span>
        </div>
      </li>
    </ul>
  );
};

export default SalaryTax;
