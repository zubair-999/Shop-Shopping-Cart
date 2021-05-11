import {PRODUCT_ADD_REQUEST, PRODUCT_ADD_SUCCESS, PRODUCT_ADD_FAIL, PRODUCT_DELETE_REQUEST, PRODUCT_DELETE_SUCCESS, PRODUCT_DELETE_FAIL,
PRODUCT_UPDATE_REQUEST, PRODUCT_UPDATE_SUCCESS, PRODUCT_UPDATE_FAIL, PRODUCT_EDIT_FAIL, PRODUCT_EDIT_SUCCESS, PRODUCT_EDIT_REQUEST} from "../constants/Constants";
import Axios from "../../axios/Axios";


export const ProductAddAction = ({ name, price, stock, category, description }) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_ADD_REQUEST })
        const { data } = await Axios.post('/product', { ...name, ...price, ...stock, ...category, ...description}, {
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

export const ProductUpdateAction = ({ name,price, stock, category, description }, id, callback) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_UPDATE_REQUEST })
        const { data } = await Axios.put(`/product/${id}`, { ...name, ...price, ...stock, ...category, ...description }, {
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


