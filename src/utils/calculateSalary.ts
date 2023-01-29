import { Period } from '../enums/period.enum';

const WORK_DAY_IN_MONTH = 21;
const WORK_HOURS_IN_DAY = 8;

const calculateSalary = (salary: number, oldPeriod: Period, newPeriod: Period) => {
  if (oldPeriod === Period.Month && newPeriod === Period.Day) {
    return salary / WORK_DAY_IN_MONTH;
  }

  if (oldPeriod === Period.Month && newPeriod === Period.Hour) {
    return salary / WORK_DAY_IN_MONTH / WORK_HOURS_IN_DAY;
  }

  if (oldPeriod === Period.Day && newPeriod === Period.Hour) {
    return salary / WORK_HOURS_IN_DAY;
  }

  if (oldPeriod === Period.Day && newPeriod === Period.Month) {
    return salary * WORK_DAY_IN_MONTH;
  }

  if (oldPeriod === Period.Hour && newPeriod === Period.Day) {
    return salary * WORK_HOURS_IN_DAY;
  }

  if (oldPeriod === Period.Hour && newPeriod === Period.Month) {
    return salary * WORK_DAY_IN_MONTH * WORK_HOURS_IN_DAY;
  }

  return salary;
};

export default calculateSalary;
