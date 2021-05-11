import {
  EXPENSES_SAVE_REQUEST,
  EXPENSES_SAVE_SUCCESS,
  EXPENSES_SAVE_FAIL,
  EXPENSES_TABLE_REQUEST,
  EXPENSES_TABLE_SUCCESS,
  EXPENSES_TABLE_FAIL,
  EXPENSES_EDIT_REQUEST,
  EXPENSES_EDIT_SUCCESS,
  EXPENSES_EDIT_FAIL,
  EXPENSES_UPDATE_REQUEST,
  EXPENSES_UPDATE_SUCCESS,
  EXPENSES_UPDATE_FAIL,
  EXPENSES_DELETE_REQUEST,
  EXPENSES_DELETE_SUCCESS,
  EXPENSES_DELETE_FAIL
} from "../constants/Constants"

export const ExpensesSaveReducer = (state = {}, action) => {
  switch (action.type) {
    case EXPENSES_SAVE_REQUEST:
      return { loading: true }
    case EXPENSES_SAVE_SUCCESS:
      return { loading: false, expensdata: action.payload }
    case EXPENSES_SAVE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state;
  }
};
export const ExpensesTableReducer = (state = { expenses: [] }, action) => {
  switch (action.type) {
    case EXPENSES_TABLE_REQUEST:
      return { loading: true, expenses: [] }
    case EXPENSES_TABLE_SUCCESS:
      return { loading: false, expenses: action.payload }
    case EXPENSES_TABLE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state;
  }
};

export const ExpensesEditReducer = (state = {}, action) => {
  switch (action.type) {
    case EXPENSES_EDIT_REQUEST:
      return { loading: true }
    case EXPENSES_EDIT_SUCCESS:
      return { loading: false, expenseedit: action.payload }
    case EXPENSES_EDIT_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state;
  }
};
export const ExpensesUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case EXPENSES_UPDATE_REQUEST:
      return { loading: true }
    case EXPENSES_UPDATE_SUCCESS:
      return { loading: false, expenseupdate: action.payload }
    case EXPENSES_UPDATE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state;
  }
};
export const ExpensesDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case EXPENSES_DELETE_REQUEST:
      return { loading: true }
    case EXPENSES_DELETE_SUCCESS:
      return { loading: false, success: true }
    case EXPENSES_DELETE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state;
  }
};
