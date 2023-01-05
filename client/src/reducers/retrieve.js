import {
    RETRIEVE_PRESCRIPTION,
    REGISTER_FAIL, RETRIEVE_FAIL
} from "../actions/types";

const initialState = {
    // token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
}

export default function(state = initialState, action){
    const {type, payload} = action;

    switch (type){
        case RETRIEVE_PRESCRIPTION:
            localStorage.setItem('token', payload.token);
            return{
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false,
                prescription: payload
            }
        case RETRIEVE_FAIL:
            return{
                ...state,
                isAuthenticated: true,
                loading: false
            }
        default:
            return state;
    }
}