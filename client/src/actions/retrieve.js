import api from '../utils/api';
import axios from 'axios';
import {setAlert} from "./alert";
import {
    RETRIEVE_PRESCRIPTION,
    RETRIEVE_FAIL

} from "./types";
import setAuthToken from "../utils/setAuthToken";

export const retrievePresc = (formData) => async (disptach) => {
    if(localStorage.token) {
        setAuthToken(localStorage.token);
    }
    try {
        const res = await api.get('/prescriptions');

        disptach({
            type: RETRIEVE_PRESCRIPTION,
            payload: res.data
        });

    }
    catch(err){

        disptach({
            type: RETRIEVE_FAIL
        });

    }
}
