// Core
import { FC } from 'react';

// Components
import SalariesList from './SalariesList/SalariesList';
import Input from './Input/Input';
import TaxToggle from './TaxToggle/TaxToggle';
import SalaryTax from './SalaryTax/SalaryTax';

// Styles
// @ts-ignore:next-line
import styles from './Salaries.module.scss';

const Salaries: FC = () => {
  return (
    <div className={styles.container}>
      <SalariesList />
      <TaxToggle />
      <Input />
      <SalaryTax />
    </div>
  );
};

export default Salaries;
