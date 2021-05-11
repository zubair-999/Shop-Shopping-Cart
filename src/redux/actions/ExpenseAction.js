import {
  EXPENSES_SAVE_REQUEST, EXPENSES_SAVE_SUCCESS, EXPENSES_SAVE_FAIL,
  EXPENSES_TABLE_REQUEST, EXPENSES_TABLE_SUCCESS, EXPENSES_TABLE_FAIL,
  EXPENSES_EDIT_REQUEST, EXPENSES_EDIT_SUCCESS, EXPENSES_EDIT_FAIL,
  EXPENSES_DELETE_REQUEST, EXPENSES_DELETE_SUCCESS, EXPENSES_DELETE_FAIL,
  EXPENSES_UPDATE_REQUEST, EXPENSES_UPDATE_SUCCESS, EXPENSES_UPDATE_FAIL,

} from "../constants/Constants";
import Axios from '../../axios/Axios'
export const ExpensesSaveAction = ({ date, category, quantity, total_amount }) => async (dispatch) => {
  try {
    dispatch({ type: EXPENSES_SAVE_REQUEST })
    const { data } = await Axios.post('/expense-input', { ...date, ...category, ...quantity, ...total_amount }, {
      headers: {
        'x-auth': `${(localStorage.getItem('token'))}`
      }
    })
    dispatch({
      type: EXPENSES_SAVE_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: EXPENSES_SAVE_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}
export const ExpensesTabelAction = () => async (dispatch) => {
  try {
    dispatch({ type: EXPENSES_TABLE_REQUEST })
    const { data } = await Axios.get('/expense-all', {
      headers: {
        'x-auth': `${(localStorage.getItem('token'))}`
      }
    })
    dispatch({
      type: EXPENSES_TABLE_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: EXPENSES_TABLE_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}
export const ExpensesEditAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: EXPENSES_EDIT_REQUEST })
    const { data } = await Axios.get(`/expense-get/${id}`, {
      headers: {
        'x-auth': `${(localStorage.getItem('token'))}`
      }
    })
    dispatch({
      type: EXPENSES_EDIT_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: EXPENSES_EDIT_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const ExpensesUpdateAction = ({ name }, id, callback) => async (dispatch) => {
  try {
    dispatch({ type: EXPENSES_UPDATE_REQUEST })
    const { data } = await Axios.put(`/expense-update/${id}`, { ...name }, {
      headers: {
        'x-auth': `${(localStorage.getItem('token'))}`
      }
    })
    dispatch({
      type: EXPENSES_UPDATE_SUCCESS,
      payload: data
    });
    callback()
  } catch (error) {
    dispatch({
      type: EXPENSES_UPDATE_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}
export const ExpensesDeleteAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: EXPENSES_DELETE_REQUEST })
    await Axios.delete(`/expense-del/${id}`, {
      headers: {
        'x-auth': `${(localStorage.getItem('token'))}`
      }
    })
    dispatch({
      type: EXPENSES_DELETE_SUCCESS,
    });

  } catch (error) {
    dispatch({
      type: EXPENSES_DELETE_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}
