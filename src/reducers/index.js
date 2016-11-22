import { handleActions } from 'redux-actions';
import * as actions from '../actions/index';

const INITIAL_STATE = {
    isAuthenticated: false,
    currentUser: null,
    error: null
};

export default handleActions({
	[actions.loginSuccessful]: (state,action) => {
		console.log('loginSuccessful called')
		return {...state, isAuthenticated: true, currentUser: action.payload, error: null };
	},
	
	[actions.handleFail]: (state,action) => {
		console.log('handleFail called')
		return {...state, error: action.payload };
	},

	[actions.destroySession]: (state, action) => {
		console.log("you have logged out");
		return {...state, isAuthenticated: false, currentUser: null};
	},

	[actions.createAccountSuccessful]: (state, action) => {
		console.log("account created");
		return {...state};
	}
	
	
}, INITIAL_STATE);