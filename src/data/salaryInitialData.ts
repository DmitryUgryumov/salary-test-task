import { Period } from '../enums/period.enum';
import { Salary } from '../interfaces/salary.interface';

export const salaryInitialData: Salary[] = [
  {
    id: '1',
    title: 'Оклад',
    isShowTax: true,
    period: Period.Month,
  },
  {
    id: '2',
    title: 'МРОТ',
    isShowTax: false,
    fixedSalary: 10000,
    period: Period.Minimal,
    helpDescription: 'МРОТ - минимальный размер оплаты труда. Разный для разных регионов',
  },
  {
    id: '3',
    title: 'Оплата за день',
    isShowTax: false,
    period: Period.Day,
    periodTitle: 'в день',
  },
  {
    id: '4',
    title: 'Оплата за час',
    isShowTax: false,
    period: Period.Hour,
    periodTitle: 'в час',
  },
];
