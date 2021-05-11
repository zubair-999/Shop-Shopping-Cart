import {SALES_ALL_FAIL, SALES_ALL_REQUEST, SALES_ALL_SUCCESS} from "../constants/Constants";
import Axios from "../../axios/Axios";

export const SalesTableAction = () => async (dispatch) => {
  try {
    dispatch({ type: SALES_ALL_REQUEST })
    const { data } = await Axios.get('/salesreport/dashboard', {
      headers: {
        'x-auth': `${(localStorage.getItem('token'))}`
      }
    })
    dispatch({
      type: SALES_ALL_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: SALES_ALL_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}
