import {combineReducers} from 'redux';
import alert from './alert';
import {registerDoc} from '../actions/auth';
import {registerPharma} from "../actions/auth";
import {submitPresc} from "../actions/submit";
import auth from './auth'



export default combineReducers({
    alert,
    submitPresc,
    registerPharma,
    registerDoc,
    auth
});