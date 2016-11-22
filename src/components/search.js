//This component appears once a user logs in

import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

class Search extends Component {
	render() {
		return(
			<div>
				<h1>Hello {this.props.name}</h1>
				<button>Log out</button>
				<h2>Search for a user and start up a conversation!</h2>
				<input type="text" name="username" required />
			</div>
		);
	}
}

let mapStateToProps = function(state) {
	return {
		name: state.currentUser.username
	}
}

export default connect(mapStateToProps)(Search);