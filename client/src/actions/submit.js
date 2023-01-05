import api from '../utils/api';
import axios from 'axios';
import {setAlert} from "./alert";
import {
    PRESCRIPTION_FAILED,
    PRESCRIPTION_SUBMITTED,
    REGISTER_FAIL
} from "./types";

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
                type: PRESCRIPTION_FAILED,

            })

        }
    }
