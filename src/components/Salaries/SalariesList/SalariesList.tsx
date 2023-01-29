// Core
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Components
import SalaryItem from './SalaryItem/SalaryItem';

// Interfaces
import { SalaryStore } from '../../../interfaces/salaryStore.interface';

// Actions
import { changeActiveSalary } from '../../../redux/salary/salaryActions';

// Styles
// @ts-ignore:next-line
import styles from './SalariesList.module.scss';

const SalariesList: FC = () => {
  const salaries = useSelector((state: SalaryStore) => state.salaries);
  const activeSalary = useSelector((state: SalaryStore) => state.activeSalary);
  const dispatch = useDispatch();

  const onChangeActiveSalary = (id: string) => dispatch(changeActiveSalary(id));

  return (
    <div>
      <div className={styles.title}>Сумма</div>
      <ul className={styles.salaries}>
        {salaries.map((salary) => (
          <SalaryItem
            salary={salary}
            key={salary.id}
            isActiveSalary={salary.id === activeSalary.id}
            onChangeActiveSalary={onChangeActiveSalary}
          />
        ))}
      </ul>
    </div>
  );
};

export default SalariesList;
