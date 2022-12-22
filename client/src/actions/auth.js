import api from '../utils/api';
import axios from 'axios';
import {setAlert} from "./alert";
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL, PRESCRIPTION_SUBMITTED
} from "./types";

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