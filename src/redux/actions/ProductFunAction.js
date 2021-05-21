import {
  PRODUCT_ADD_REQUEST,
  PRODUCT_ADD_SUCCESS,
  PRODUCT_ADD_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_EDIT_FAIL,
  PRODUCT_EDIT_SUCCESS,
  PRODUCT_EDIT_REQUEST,
  PRODUCT_CATEGORY_REQUEST, PRODUCT_CATEGORY_SUCCESS, PRODUCT_CATEGORY_FAIL
} from "../constants/Constants";
import Axios from "../../axios/Axios";


export const ProductAddAction = ({ name, price, stock, _id, description }) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_ADD_REQUEST })
        const { data } = await Axios.post('/product', { ...name, ...price, ...stock, ..._id, ...description}, {
            headers: {
                'x-auth': `${(localStorage.getItem('token'))}`
            }
        })
        dispatch({
            type: PRODUCT_ADD_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: PRODUCT_ADD_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const ProductEditAction = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_EDIT_REQUEST })
        const { data } = await Axios.get(`/product/${id}`, {
            headers: {
                'x-auth': `${(localStorage.getItem('token'))}`
            }
        })
        dispatch({
            type: PRODUCT_EDIT_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: PRODUCT_EDIT_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const ProductUpdateAction = ({ name,price, stock, _id, description }, id, callback) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_UPDATE_REQUEST })
        const { data } = await Axios.put(`/product/${id}`, { ...name, ...price, ...stock, ..._id, ...description }, {
            headers: {
                'x-auth': `${(localStorage.getItem('token'))}`
            }
        })
        dispatch({
            type: PRODUCT_UPDATE_SUCCESS,
            payload: data
        });
        callback()
    } catch (error) {
        dispatch({
            type: PRODUCT_UPDATE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}
export const ProductDeleteAction = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DELETE_REQUEST })
        await Axios.delete(`/product/${id}`, {
            headers: {
                'x-auth': `${(localStorage.getItem('token'))}`
            }
        })
        dispatch({
            type: PRODUCT_DELETE_SUCCESS,
        });

    } catch (error) {
        dispatch({
            type: PRODUCT_DELETE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}


export const ProductCategoryAction = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_CATEGORY_REQUEST })
    const { data } = await Axios.get('/product-cate-all', {
      headers: {
        'x-auth': `${(localStorage.getItem('token'))}`
      }
    })
    dispatch({
      type: PRODUCT_CATEGORY_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_CATEGORY_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}
