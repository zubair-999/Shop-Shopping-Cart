import {
  INCOME_DELETE_FAIL,
  INCOME_DELETE_REQUEST, INCOME_DELETE_SUCCESS,
  INCOME_EDIT_FAIL,
  INCOME_EDIT_REQUEST,
  INCOME_EDIT_SUCCESS,
  INCOME_SAVE_FAIL,
  INCOME_SAVE_REQUEST,
  INCOME_SAVE_SUCCESS,
  INCOME_TABLE_FAIL,
  INCOME_TABLE_REQUEST,
  INCOME_TABLE_SUCCESS, INCOME_UPDATE_FAIL,
  INCOME_UPDATE_REQUEST, INCOME_UPDATE_SUCCESS


} from "../constants/Constants";
import Axios from '../../axios/Axios'
export const IncomeSaveAction = ({ date, category, quantity, total_amount }) => async (dispatch) => {
  try {
    dispatch({ type: INCOME_SAVE_REQUEST })
    const { data } = await Axios.post('/income-input', { ...date, ...category, ...quantity, ...total_amount }, {
      headers: {
        'x-auth': `${(localStorage.getItem('token'))}`
      }
    })
    dispatch({
      type: INCOME_SAVE_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: INCOME_SAVE_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}
export const IncomeTabelAction = () => async (dispatch) => {
  try {
    dispatch({ type: INCOME_TABLE_REQUEST })
    const { data } = await Axios.get('/income-get-all', {
      headers: {
        'x-auth': `${(localStorage.getItem('token'))}`
      }
    })
    dispatch({
      type: INCOME_TABLE_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: INCOME_TABLE_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}
export const IncomeEditAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: INCOME_EDIT_REQUEST })
    const { data } = await Axios.get(`/income-get/${id}`, {
      headers: {
        'x-auth': `${(localStorage.getItem('token'))}`
      }
    })
    dispatch({
      type: INCOME_EDIT_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: INCOME_EDIT_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const IncomeUpdateAction = ({ name }, id, callback) => async (dispatch) => {
  try {
    dispatch({ type: INCOME_UPDATE_REQUEST })
    const { data } = await Axios.put(`/income-update/${id}`, { ...name }, {
      headers: {
        'x-auth': `${(localStorage.getItem('token'))}`
      }
    })
    dispatch({
      type: INCOME_UPDATE_SUCCESS,
      payload: data
    });
    callback()
  } catch (error) {
    dispatch({
      type: INCOME_UPDATE_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}
export const IncomeDeleteAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: INCOME_DELETE_REQUEST })
    await Axios.delete(`/income-del/${id}`, {
      headers: {
        'x-auth': `${(localStorage.getItem('token'))}`
      }
    })
    dispatch({
      type: INCOME_DELETE_SUCCESS,
    });

  } catch (error) {
    dispatch({
      type: INCOME_DELETE_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}
