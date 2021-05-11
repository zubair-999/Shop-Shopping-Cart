import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAIL, VERIFY_SUCCESS } from "../constants/Constants";

export const SignupReducer = (state = {}, action) => {
    switch (action.type) {
        case SIGNUP_REQUEST:
            return { loading: true }
        case SIGNUP_SUCCESS:
            return { loading: false, userInfo: action.payload, authentication: true }
        case SIGNUP_FAIL:
            return { loading: false, error: action.payload, authentication: false }
        case VERIFY_SUCCESS:
            return { loading: false, verify: action.payload }
        default:
            return state;
    }
};
