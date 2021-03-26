import { login } from '../Api-Calls/apiCalls';
import * as ACTIONS from './Constants';

export const logoutSuccess = () => {
    return {
        type: ACTIONS.LOGOUT_SUCCESS
    };
}

export const loginSuccess = (authState) => {
    return{
        type: ACTIONS.LOGIN_SUCCESS,
        payload: authState
    }
}


export const loginHandler = creds => {
    return async function(dispatch){
        const response = await login(creds);
        const authState = {
            ...response.data
        };
        dispatch(loginSuccess(authState));
        return response;
    }
}

export const updateId = (id ,admin)=> {
    return {
        type: ACTIONS.UPDATE_ID,
        payload: {id: id,
                  username: admin }
    }
}