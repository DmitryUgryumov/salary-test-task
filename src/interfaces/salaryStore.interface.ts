import { Period } from '../enums/period.enum';
import { Salary } from './salary.interface';

export interface SalaryStore {
  salaries: Salary[];
  activeSalary: Salary;
  salary: number;
  isShowSalaryTax: boolean;
  period: Period;
}

export interface SalaryActions {
  type: string;
  payload: any;
}
