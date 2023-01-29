import { Period } from '../enums/period.enum';

export interface Salary {
  id: string;
  title: string;
  isShowTax: boolean;
  fixedSalary?: number;
  period: Period;
  helpDescription?: string;
  periodTitle?: string;
}
