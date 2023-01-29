import { CHANGE_ACTIVE_SALARY, CHANGE_SALARY, CHANGE_SHOW_TAX } from './salaryTypes';

export const changeSalary = (salary: number) => ({
  type: CHANGE_SALARY,
  payload: salary,
});

export const changeActiveSalary = (id: string) => ({
  type: CHANGE_ACTIVE_SALARY,
  payload: id,
});

export const changeShowTax = () => ({
  type: CHANGE_SHOW_TAX,
});
