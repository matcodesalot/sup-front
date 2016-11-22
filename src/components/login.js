import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

class Login extends Component {
	goHome() {
		this.props.router.push('/');
	}

	onLogin() {
		//if the user signed in correctly
		this.props.dispatch(actions.loginRequest(this.refs.username.value, this.refs.password.value));
		if(this.props.isAuthenticated) {
			this.props.router.push('/message');
		}
		console.log("isAuthenticated", this.props.isAuthenticated);
	}

	render() {
		return(
			<div>
				<h2>Please log in</h2>

				<label>Username</label>
				<input type="text" ref="username" placeholder="enter username" name="username" required />

				<label>Password</label>
				<input type="password" ref="password" placeholder="enter password" name="password" required />

				<button type="submit" onClick={this.onLogin.bind(this)}>Login</button>
				<button type="submit" onClick={this.goHome.bind(this)}>Home</button>
			</div>
		);
	}
}

let mapStateToProps = function(state, props) {
	return {
		isAuthenticated: state.isAuthenticated
	}
}

export default connect(mapStateToProps)(Login);