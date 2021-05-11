import {
    PRODUCT_ADD_REQUEST,
    PRODUCT_ADD_SUCCESS,
    PRODUCT_ADD_FAIL,
    PRODUCT_EDIT_REQUEST,
    PRODUCT_EDIT_SUCCESS,
    PRODUCT_EDIT_FAIL,
    PRODUCT_UPDATE_REQUEST,
    PRODUCT_UPDATE_SUCCESS,
    PRODUCT_UPDATE_FAIL,
    PRODUCT_DELETE_REQUEST, PRODUCT_DELETE_SUCCESS, PRODUCT_DELETE_FAIL
} from "../constants/Constants";

export const ProductAddReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_ADD_REQUEST:
            return { loading: true }
        case PRODUCT_ADD_SUCCESS:
            return { loading: false, productData: action.payload }
        case PRODUCT_ADD_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
};

export const ProductEditReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_EDIT_REQUEST:
            return { loading: true }
        case PRODUCT_EDIT_SUCCESS:
            return { loading: false, productEdit: action.payload }
        case PRODUCT_EDIT_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
};
export const ProductUpdateReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_UPDATE_REQUEST:
            return { loading: true }
        case PRODUCT_UPDATE_SUCCESS:
            return { loading: false, productUpdate: action.payload }
        case PRODUCT_UPDATE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
};
export const ProductDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_DELETE_REQUEST:
            return { loading: true }
        case PRODUCT_DELETE_SUCCESS:
            return { loading: false, success: true }
        case PRODUCT_DELETE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
};
