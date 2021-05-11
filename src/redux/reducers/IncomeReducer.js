import {
  INCOME_DELETE_FAIL,
  INCOME_DELETE_REQUEST, INCOME_DELETE_SUCCESS,
  INCOME_EDIT_REQUEST,
  INCOME_SAVE_FAIL,
  INCOME_SAVE_REQUEST,
  INCOME_SAVE_SUCCESS,
  INCOME_TABLE_FAIL,
  INCOME_TABLE_REQUEST,
  INCOME_TABLE_SUCCESS, INCOME_UPDATE_FAIL,
  INCOME_UPDATE_REQUEST, INCOME_UPDATE_SUCCESS

} from "../constants/Constants"

export const IncomeSaveReducer = (state = {}, action) => {
  switch (action.type) {
    case INCOME_SAVE_REQUEST:
      return { loading: true }
    case INCOME_SAVE_SUCCESS:
      return { loading: false, incomeData: action.payload }
    case INCOME_SAVE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state;
  }
};
export const IncomeTableReducer = (state = { incomes: [] }, action) => {
  switch (action.type) {
    case INCOME_TABLE_REQUEST:
      return { loading: true, incomes: [] }
    case INCOME_TABLE_SUCCESS:
      return { loading: false, incomes: action.payload }
    case INCOME_TABLE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state;
  }
};

export const IncomeEditReducer = (state = {}, action) => {
  switch (action.type) {
    case INCOME_EDIT_REQUEST:
      return { loading: true }
    case INCOME_TABLE_SUCCESS:
      return { loading: false, incomeedit: action.payload }
    case INCOME_TABLE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state;
  }
};
export const IncomeUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case INCOME_UPDATE_REQUEST:
      return { loading: true }
    case INCOME_UPDATE_SUCCESS:
      return { loading: false, incomeupdate: action.payload }
    case INCOME_UPDATE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state;
  }
};
export const IncomeDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case INCOME_DELETE_REQUEST:
      return { loading: true }
    case INCOME_DELETE_SUCCESS:
      return { loading: false, success: true }
    case INCOME_DELETE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state;
  }
};
