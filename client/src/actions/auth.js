import api from '../utils/api';
import axios from 'axios';
import {setAlert} from "./alert";
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    PRESCRIPTION_SUBMITTED,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    GOOGLE_AUTH,
    LOGIN_FAIL,
    LOGOUT
} from "./types";

import setAuthToken from "../utils/setAuthToken";

export const loadUser = () => async (disptach) => {
    if(localStorage.token) {
        setAuthToken(localStorage.token);
    }
    try {
        const res = await api.get('/docauth');

        disptach({
            type: USER_LOADED,
            payload: res.data
        });

    }
    catch(err){

        disptach({
            type: AUTH_ERROR
        });

    }
}

export const loadUserDoc = () => async (disptach) => {
    if(localStorage.token) {
        setAuthToken(localStorage.token);
    }
    try {
        const res = await api.get('/docauth');

        disptach({
            type: USER_LOADED,
            payload: res.data
        });

    }
    catch(err){

        disptach({
            type: AUTH_ERROR
        });

    }
}

export const loadUserPharma = () => async (disptach) => {
    if(localStorage.token) {
        setAuthToken(localStorage.token);
    }
    try {
        const res = await api.get('/pharmaauth');

        disptach({
            type: USER_LOADED,
            payload: res.data
        });

    }
    catch(err){

        disptach({
            type: AUTH_ERROR
        });

    }
}


// export const loadUser = () => async (dispatch) => {
//     try {
//         const res = await api.get('/auth');
//
//         dispatch({
//             type: USER_LOADED,
//             payload: res.data
//         });
//     } catch (err) {
//         dispatch({
//             type: AUTH_ERROR
//         });
//     }
// };


export const registerDoc = (formData) =>
    async (dispatch) => {


        try {
            const res = await api.post('/surgeries', formData);


            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            });
            dispatch(loadUserDoc());
        } catch(err){
            const errors = err.response.data.errors;

            if(errors){
                errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
            }

            dispatch({
                type: REGISTER_FAIL,

            })

        }
    }

export const registerPharma = (formData) =>
    async dispatch => {

        try {
            const res = await api.post('/pharmacies', formData);
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            });
            dispatch(loadUserPharma());
        } catch (err) {
            const errors = err.response.data.errors;

            if (errors) {
                errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));

                dispatch({
                    type: REGISTER_FAIL,

                });
            }
        }
    }




//     Login  User
export const loginDoc = (DocEmail, DocPassword) => async (dispatch) => {
        const body = {DocEmail, DocPassword};



        try {
            const res = await api.post('/docauth', body);


            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });
            dispatch(loadUserDoc());
        } catch(err){
            const errors = err.response.data.errors;

            if(errors){
                errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
            }

            dispatch({
                type: LOGIN_FAIL,

            })

        }
    }

export const loginPharma = (PharmaEmail, PharmaPassword) => async (dispatch) => {
    const body = {PharmaEmail, PharmaPassword};



    try {
        const res = await api.post('/pharmaauth', body);


        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });
        dispatch(loadUserPharma());
    } catch(err){
        const errors = err.response.data.errors;

        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: LOGIN_FAIL,

        })

    }
}

export const logout = () => ({type: LOGOUT});