import {ORDER_LIST_REQUEST, ORDER_LIST_SUCCESS, ORDER_LIST_FAIL} from "../constants/Constants";
import Axios from "../../axios/Axios";

export const OrdersAction = () => async (dispatch) => {
    try {
        dispatch({ type: ORDER_LIST_REQUEST })
        const { data } = await Axios.get('/shoporder', {
            headers: {
                'x-auth': `${(localStorage.getItem('token'))}`
            }
        })
        dispatch({
            type: ORDER_LIST_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: ORDER_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}
