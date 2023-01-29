// Types
import { CHANGE_ACTIVE_SALARY, CHANGE_SALARY, CHANGE_SHOW_TAX } from './salaryTypes';

// Interfaces
import { SalaryActions, SalaryStore } from '../../interfaces/salaryStore.interface';

// Enums
import { Period } from '../../enums/period.enum';

// Utils
import calculateSalary from '../../utils/calculateSalary';

// Data
import { salaryInitialData } from '../../data/salaryInitialData';

const initialState = {
  salaries: salaryInitialData,
  activeSalary: salaryInitialData[0],
  isShowSalaryTax: false,
  period: Period.Month,
  salary: 40000,
};

const salaryReducer = (state: SalaryStore = initialState, action: SalaryActions) => {
  switch (action.type) {
    case CHANGE_SALARY:
      return {
        ...state,
        salary: action.payload,
      };
    case CHANGE_SHOW_TAX:
      return {
        ...state,
        isShowSalaryTax: !state.isShowSalaryTax,
      };
    case CHANGE_ACTIVE_SALARY:
      const newActiveSalary = state.salaries.find((salary) => salary.id === action.payload);

      if (!newActiveSalary) {
        return state;
      }

      const salary = calculateSalary(state.salary, state.period, newActiveSalary.period);
      return {
        ...state,
        activeSalary: newActiveSalary,
        salary,
        period: typeof newActiveSalary.fixedSalary === 'number' ? state.period : newActiveSalary.period,
      };
    default:
      return state;
  }
};

export default salaryReducer;
