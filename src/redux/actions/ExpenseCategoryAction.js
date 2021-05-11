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
} from "../constants/Constants";
import Axios from '../../axios/Axios'
export const ExpenseCategorySaveAction = (name) => async (dispatch) => {
  try {
    dispatch({ type: EXPENSE_CATEGORY_SAVE_REQUEST })
    const { data } = await Axios.post('/expense', { ...name }, {
      headers: {
        'x-auth': `${(localStorage.getItem('token'))}`
      }
    })
    dispatch({
      type: EXPENSE_CATEGORY_SAVE_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: EXPENSE_CATEGORY_SAVE_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}
export const ExpenseCategoryTabelAction = () => async (dispatch) => {
  try {
    dispatch({ type: EXPENSE_CATEGORY_TABLE_REQUEST })
    const { data } = await Axios.get('/expense--all', {
      headers: {
        'x-auth': `${(localStorage.getItem('token'))}`
      }
    })
    dispatch({
      type: EXPENSE_CATEGORY_TABLE_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: EXPENSE_CATEGORY_TABLE_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}
export const ExpenseCategoryEditAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: EXPENSE_CATEGORY_EDIT_REQUEST })
    const { data } = await Axios.get(`/expense/${id}`, {
      headers: {
        'x-auth': `${(localStorage.getItem('token'))}`
      }
    })
    dispatch({
      type: EXPENSE_CATEGORY_EDIT_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: EXPENSE_CATEGORY_EDIT_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const ExpenseCategoryUpdateAction = ({ name }, id, callback) => async (dispatch) => {
  try {
    dispatch({ type: EXPENSE_CATEGORY_UPDATE_REQUEST })
    const { data } = await Axios.put(`/expense/${id}`, { ...name }, {
      headers: {
        'x-auth': `${(localStorage.getItem('token'))}`
      }
    })
    dispatch({
      type: EXPENSE_CATEGORY_UPDATE_SUCCESS,
      payload: data
    });
    callback()
  } catch (error) {
    dispatch({
      type: EXPENSE_CATEGORY_UPDATE_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}
export const ExpenseCategoryDeleteAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: EXPENSE_CATEGORY_DELETE_REQUEST })
    await Axios.delete(`/expense--del/${id}`, {
      headers: {
        'x-auth': `${(localStorage.getItem('token'))}`
      }
    })
    dispatch({
      type: EXPENSE_CATEGORY_DELETE_SUCCESS,
    });

  } catch (error) {
    dispatch({
      type: EXPENSE_CATEGORY_DELETE_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}
