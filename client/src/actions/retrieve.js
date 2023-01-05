import api from '../utils/api';
import axios from 'axios';
import {setAlert} from "./alert";
import {
    RETRIEVE_PRESCRIPTION,
    RETRIEVE_FAIL,
    REGISTER_FAIL, USER_LOADED, AUTH_ERROR
} from "./types";
import setAuthToken from "../utils/setAuthToken";

export const retrievePresc = () => async (disptach) => {
    if(localStorage.token) {
        setAuthToken(localStorage.token);
    }
    try {
        const res = await api.get('/prescGetPut');

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
