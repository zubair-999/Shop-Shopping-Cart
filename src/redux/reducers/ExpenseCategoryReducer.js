import {
  EXPENSE_CATEGORY_SAVE_REQUEST,
  EXPENSE_CATEGORY_SAVE_SUCCESS,
  EXPENSE_CATEGORY_SAVE_FAIL,
  EXPENSE_CATEGORY_TABLE_REQUEST,
  EXPENSE_CATEGORY_TABLE_SUCCESS,
  EXPENSE_CATEGORY_TABLE_FAIL,
  EXPENSE_CATEGORY_EDIT_REQUEST,
  EXPENSE_CATEGORY_EDIT_SUCCESS,
  EXPENSE_CATEGORY_EDIT_FAIL,
  EXPENSE_CATEGORY_UPDATE_REQUEST,
  EXPENSE_CATEGORY_UPDATE_SUCCESS,
  EXPENSE_CATEGORY_UPDATE_FAIL,
  EXPENSE_CATEGORY_DELETE_REQUEST,
  EXPENSE_CATEGORY_DELETE_SUCCESS,
  EXPENSE_CATEGORY_DELETE_FAIL
} from "../constants/Constants"

export const ExpenseCategorySaveReducer = (state = {}, action) => {
  switch (action.type) {
    case EXPENSE_CATEGORY_SAVE_REQUEST:
      return { loading: true }
    case EXPENSE_CATEGORY_SAVE_SUCCESS:
      return { loading: false, excategorydata: action.payload }
    case EXPENSE_CATEGORY_SAVE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state;
  }
};
export const ExpenseCategoryTableReducer = (state = { excategories: [] }, action) => {
  switch (action.type) {
    case EXPENSE_CATEGORY_TABLE_REQUEST:
      return { loading: true, excategories: [] }
    case EXPENSE_CATEGORY_TABLE_SUCCESS:
      return { loading: false, excategories: action.payload }
    case EXPENSE_CATEGORY_TABLE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state;
  }
};

export const ExpenseCategoryEditReducer = (state = {}, action) => {
  switch (action.type) {
    case EXPENSE_CATEGORY_EDIT_REQUEST:
      return { loading: true }
    case EXPENSE_CATEGORY_EDIT_SUCCESS:
      return { loading: false, excategoryedit: action.payload }
    case EXPENSE_CATEGORY_EDIT_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state;
  }
};
export const ExpenseCategoryUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case EXPENSE_CATEGORY_UPDATE_REQUEST:
      return { loading: true }
    case EXPENSE_CATEGORY_UPDATE_SUCCESS:
      return { loading: false, excategoryupdate: action.payload }
    case EXPENSE_CATEGORY_UPDATE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state;
  }
};
export const ExpenseCategoryDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case EXPENSE_CATEGORY_DELETE_REQUEST:
      return { loading: true }
    case EXPENSE_CATEGORY_DELETE_SUCCESS:
      return { loading: false, success: true }
    case EXPENSE_CATEGORY_DELETE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state;
  }
};
