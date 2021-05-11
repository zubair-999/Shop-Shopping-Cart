
import {
  INCOME_CATEGORY_SAVE_REQUEST,
  INCOME_CATEGORY_SAVE_SUCCESS,
  INCOME_CATEGORY_SAVE_FAIL,
  INCOME_CATEGORY_TABLE_REQUEST,
  INCOME_CATEGORY_TABLE_SUCCESS,
  INCOME_CATEGORY_TABLE_FAIL,
  INCOME_CATEGORY_EDIT_REQUEST,
  INCOME_CATEGORY_EDIT_SUCCESS,
  INCOME_CATEGORY_EDIT_FAIL,
  INCOME_CATEGORY_UPDATE_REQUEST,
  INCOME_CATEGORY_UPDATE_SUCCESS,
  INCOME_CATEGORY_UPDATE_FAIL,
  INCOME_CATEGORY_DELETE_REQUEST,
  INCOME_CATEGORY_DELETE_SUCCESS,
  INCOME_CATEGORY_DELETE_FAIL
} from "../constants/Constants"

export const IncomeCategorySaveReducer = (state = {}, action) => {
  switch (action.type) {
    case INCOME_CATEGORY_SAVE_REQUEST:
      return { loading: true }
    case INCOME_CATEGORY_SAVE_SUCCESS:
      return { loading: false, incategorydata: action.payload }
    case INCOME_CATEGORY_SAVE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state;
  }
};
export const IncomeCategoryTableReducer = (state = { incategories: [] }, action) => {
  switch (action.type) {
    case INCOME_CATEGORY_TABLE_REQUEST:
      return { loading: true, incategories: [] }
    case INCOME_CATEGORY_TABLE_SUCCESS:
      return { loading: false, incategories: action.payload }
    case INCOME_CATEGORY_TABLE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state;
  }
};

export const IncomeCategoryEditReducer = (state = {}, action) => {
  switch (action.type) {
    case INCOME_CATEGORY_EDIT_REQUEST:
      return { loading: true }
    case INCOME_CATEGORY_EDIT_SUCCESS:
      return { loading: false, incategoryedit: action.payload }
    case INCOME_CATEGORY_EDIT_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state;
  }
};
export const IncomeCategoryUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case INCOME_CATEGORY_UPDATE_REQUEST:
      return { loading: true }
    case INCOME_CATEGORY_UPDATE_SUCCESS:
      return { loading: false, incategoryupdate: action.payload }
    case INCOME_CATEGORY_UPDATE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state;
  }
};
export const IncomeCategoryDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case INCOME_CATEGORY_DELETE_REQUEST:
      return { loading: true }
    case INCOME_CATEGORY_DELETE_SUCCESS:
      return { loading: false, success: true }
    case INCOME_CATEGORY_DELETE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state;
  }
};
