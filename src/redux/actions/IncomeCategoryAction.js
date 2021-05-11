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
} from "../constants/Constants";
import Axios from '../../axios/Axios'
export const IncomeCategorySaveAction = (name) => async (dispatch) => {
  try {
    dispatch({ type: INCOME_CATEGORY_SAVE_REQUEST })
    const { data } = await Axios.post('/income', { ...name }, {
      headers: {
        'x-auth': `${(localStorage.getItem('token'))}`
      }
    })
    dispatch({
      type: INCOME_CATEGORY_SAVE_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: INCOME_CATEGORY_SAVE_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}
export const IncomeCategoryTabelAction = () => async (dispatch) => {
  try {
    dispatch({ type: INCOME_CATEGORY_TABLE_REQUEST })
    const { data } = await Axios.get('/income-cate-all', {
      headers: {
        'x-auth': `${(localStorage.getItem('token'))}`
      }
    })
    dispatch({
      type: INCOME_CATEGORY_TABLE_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: INCOME_CATEGORY_TABLE_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}
export const IncomeCategoryEditAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: INCOME_CATEGORY_EDIT_REQUEST })
    const { data } = await Axios.get(`/income/${id}`, {
      headers: {
        'x-auth': `${(localStorage.getItem('token'))}`
      }
    })
    dispatch({
      type: INCOME_CATEGORY_EDIT_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: INCOME_CATEGORY_EDIT_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const IncomeCategoryUpdateAction = ({ name }, id, callback) => async (dispatch) => {
  try {
    dispatch({ type: INCOME_CATEGORY_UPDATE_REQUEST })
    const { data } = await Axios.put(`/income/${id}`, { ...name }, {
      headers: {
        'x-auth': `${(localStorage.getItem('token'))}`
      }
    })
    dispatch({
      type: INCOME_CATEGORY_UPDATE_SUCCESS,
      payload: data
    });
    callback()
  } catch (error) {
    dispatch({
      type: INCOME_CATEGORY_UPDATE_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}
export const IncomeCategoryDeleteAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: INCOME_CATEGORY_DELETE_REQUEST })
    await Axios.delete(`/income--del/${id}`, {
      headers: {
        'x-auth': `${(localStorage.getItem('token'))}`
      }
    })
    dispatch({
      type: INCOME_CATEGORY_DELETE_SUCCESS,
    });

  } catch (error) {
    dispatch({
      type: INCOME_CATEGORY_DELETE_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}
