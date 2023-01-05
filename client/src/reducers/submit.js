import {
    PRESCRIPTION_SUBMITTED,
    RETRIEVE_PRESCRIPTION,
    RETRIEVE_FAIL, PRESCRIPTION_FAILED
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
        case PRESCRIPTION_SUBMITTED:
            localStorage.setItem('token', payload.token);
            return{
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            }
        case RETRIEVE_FAIL:
        case PRESCRIPTION_FAILED:
            return{
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            }


        case RETRIEVE_PRESCRIPTION: localStorage.setItem('token', payload.token);
                return{
                    ...state,
                    ...payload,
                    isAuthenticated: true,
                    loading: false
                }
        default:
            return state;
    }
}