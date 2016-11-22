import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

class Register extends Component {
	onRegister(feedback) {
		let pass = this.refs.password.value;
		let confirmPass = this.refs.confirmPassword.value;

		if(pass === confirmPass && pass !== '' && confirmPass !== '') {
			this.props.router.push('/login');
		}
		else {
			console.log("passwords do not match");
		}
	}

	render() {
		return(
			<div>
				<h2>Register a new account</h2>

				<label>Username</label>
				<input type="text" placeholder="enter username" name="username" required />

				<label>Password</label>
				<input type="password" ref="password" placeholder="enter password" name="password" required />

				<label>Confirm Password</label>
				<input type="password" ref="confirmPassword" placeholder="confirm password" name="confirm-password" required />

				<button type="submit" onClick={this.onRegister.bind(this)}>Register</button>
			</div>
		);
	}
}

export default connect()(Register);