import {
  PROFILE_FAIL,
  PROFILE_REQUEST, PROFILE_SUCCESS, PROFILE_UPDATE_FAIL, PROFILE_UPDATE_REQUEST, PROFILE_UPDATE_SUCCESS
} from "../constants/Constants";
import Axios from "../../axios/Axios";

export const ProfileAction = () => async (dispatch) => {
  try {
    dispatch({ type: PROFILE_REQUEST })
    const { data } = await Axios.get('/shop/me', {
      headers: {
        'x-auth': `${(localStorage.getItem('token'))}`
      }
    })
    dispatch({
      type: PROFILE_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: PROFILE_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const ProfileUpdateAction = ({ shop }, callback) => async (dispatch) => {
  debugger;
  try {
    dispatch({ type: PROFILE_UPDATE_REQUEST })
    const { data } = await Axios.put('/shop/me', { ...shop }, {
      headers: {
        'x-auth': `${(localStorage.getItem('token'))}`
      }
    })
    dispatch({
      type: PROFILE_UPDATE_SUCCESS,
      payload: data
    });
    callback()
  } catch (error) {
    dispatch({
      type: PROFILE_UPDATE_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}
