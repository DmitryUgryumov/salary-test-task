// Core
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classnames from 'classnames';

// Interfaces
import { SalaryStore } from '../../../interfaces/salaryStore.interface';

// Actions
import { changeShowTax } from '../../../redux/salary/salaryActions';

// Styles
// @ts-ignore:next-line
import styles from './TaxToggle.module.scss';

const TaxToggle: FC = () => {
  const isShowSalaryTax = useSelector((state: SalaryStore) => state.isShowSalaryTax);
  const dispatch = useDispatch();

  const onChangeShowTax = () => dispatch(changeShowTax());

  return (
    <div className={styles.toggleContainer}>
      <p className={isShowSalaryTax ? styles.titleActive : styles.title}>Указать с НДФЛ</p>
      <div
        className={classnames(styles.toggle, {
          [styles.toggleActive]: isShowSalaryTax,
        })}
        onClick={onChangeShowTax}
      >
        <div
          className={classnames(styles.circle, {
            [styles.circleActive]: isShowSalaryTax,
          })}
        />
      </div>
      <p className={isShowSalaryTax ? styles.title : styles.titleActive}>Указать без НДФЛ</p>
    </div>
  );
};

export default TaxToggle;
