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
    LOGIN_FAIL
} from "./types";

import setAuthToken from "../utils/setAuthToken";

export const loadUser = () => async (disptach) => {
    if(localStorage.token) {
        setAuthToken(localStorage.token);
    }
    try {
        const res = await api.get('/auth');

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
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        // const body = JSON.stringify({IMCN,DocEmail,DocPassword, DocPasswordConf, DocName, DocPhone, DocAddress});

        try {
            const res = await api.post('/surgeries', formData);


            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            });
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
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        // const body = JSON.stringify({
        //     PSIN,
        //     PharmaEmail,
        //     PharmaPassword,
        //     PharmaPasswordConf,
        //     PharmaName,
        //     PharmaPhone,
        //     PharmaAddress
        // });

        try {
            const res = await api.post('/pharmacies', formData);
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            });
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

export const submitPresc = (formData) =>
    async (dispatch) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        // const body = JSON.stringify({IMCN,DocEmail,DocPassword, DocPasswordConf, DocName, DocPhone, DocAddress});

        try {
            const res = await api.post('/prescriptions', formData);


            dispatch({
                type: PRESCRIPTION_SUBMITTED,
                payload: res.data
            });
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


//     Login  User
export const loginDoc = (DocEmail, DocPassword) => async (dispatch) => {
        const body = {DocEmail, DocPassword};



        try {
            const res = await api.post('/surgeries', body);


            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });
            dispatch(loadUser());
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
        const res = await api.post('/pharmacies', body);


        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });
        dispatch(loadUser());
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