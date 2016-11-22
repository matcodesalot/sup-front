import { handleActions } from 'redux-actions';
import * as actions from '../actions/index';

const INITIAL_STATE = {
    isAuthenticated: false,
    currentUser: null,
    error: null
};

export default handleActions({
	[actions.loginSuccessful]: (state,action) => {
		return {...state, currentUser: action.payload, error: null };
	},
	
	[actions.loginFail]: (state,action) => {
		return {...state, error: action.payload };
	},
	
	
}, INITIAL_STATE);