import {
  PRODUCT_DELETE_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PROFILE_REQUEST, PROFILE_SUCCESS, PROFILE_UPDATE_FAIL, PROFILE_UPDATE_REQUEST, PROFILE_UPDATE_SUCCESS
} from "../constants/Constants";

export const ProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case PROFILE_REQUEST:
      return { loading: true }
    case PROFILE_SUCCESS:
      return { loading: false, success: true, profileData: action.payload }
    case PRODUCT_DELETE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state;
  }
};
export const ProfileUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case PROFILE_UPDATE_REQUEST:
      return { loading: true }
    case PROFILE_UPDATE_SUCCESS:
      return { loading: false, success: true, profileUpdate: action.payload }
    case PROFILE_UPDATE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state;
  }
};
