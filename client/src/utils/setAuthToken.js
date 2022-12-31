import api from './api';

const setAuthToken = token => {
    if(token){
        api.default.headers.common['x-auth-token'] = token;
    }
    else {
        delete api.headers.common['x-auth-token'];
    }
}

export default setAuthToken;
