import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

class Register extends Component {
	goHome() {
		this.props.router.push('/');
	}
	
	onRegister(feedback) {
		let user = this.refs.username.value;
		let pass = this.refs.password.value;
		let confirmPass = this.refs.confirmPassword.value;

		if(pass !== confirmPass) {
			//this.props.router.push('/login');
			console.log("passwords do not match");
		}
		else {
			this.props.dispatch(actions.createAccount(user, pass));
		}
	}

	render() {
		return(
			<div>
				<h2>Register a new account</h2>

				<label>Username</label>
				<input type="text" ref="username" placeholder="enter username" name="username" required />

				<label>Password</label>
				<input type="password" ref="password" placeholder="enter password" name="password" required />

				<label>Confirm Password</label>
				<input type="password" ref="confirmPassword" placeholder="confirm password" name="confirm-password" required />

				<button type="submit" onClick={this.onRegister.bind(this)}>Register</button>
				<button type="submit" onClick={this.goHome.bind(this)}>Home</button>
			</div>
		);
	}
}

export default connect()(Register);