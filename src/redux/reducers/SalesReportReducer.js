import {SALES_ALL_FAIL, SALES_ALL_REQUEST, SALES_ALL_SUCCESS} from "../constants/Constants";

export const SalesTableReducer = (state={salesTableData:[]}, action) => {
  switch (action.type) {
    case SALES_ALL_REQUEST:
      return { loading: true }
    case SALES_ALL_SUCCESS:
      return { loading: false, salesTableData: action.payload }
    case SALES_ALL_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state;
  }
};
