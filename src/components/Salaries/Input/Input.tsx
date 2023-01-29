// Core
import { ChangeEvent, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Interfaces
import { SalaryStore } from '../../../interfaces/salaryStore.interface';

// Actions
import { changeSalary } from '../../../redux/salary/salaryActions';

// Utils
import formatSalary from '../../../utils/formatSalary';

// Styles
// @ts-ignore:next-line
import styles from './Input.module.scss';

const Input: FC = () => {
  const salary = useSelector((state: SalaryStore) => state.salary);
  const activeSalary = useSelector((state: SalaryStore) => state.activeSalary);
  const dispatch = useDispatch();

  const onChangeSalary = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const parsedValue = parseInt(value.replace(/\s/g, ''));

    if (!isNaN(Number(parsedValue))) {
      dispatch(changeSalary(Number(parsedValue)));
    }

    if (value === '') {
      dispatch(changeSalary(0));
    }
  };

  return (
    <div className={styles.inputContainer}>
      <input
        className={styles.input}
        type="text"
        value={formatSalary(activeSalary.fixedSalary || salary)}
        onChange={onChangeSalary}
        disabled={Boolean(activeSalary.fixedSalary)}
      />
      <div>₽ {activeSalary.periodTitle}</div>
    </div>
  );
};

export default Input;
