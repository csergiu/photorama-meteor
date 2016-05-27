import React, { Component, PropTypes } from 'react';
import $ from 'jquery';
import { Meteor } from 'meteor/meteor';
import {
  Navbar
} from 'react-bootstrap';

export class UserHeaderArea extends Component {
	constructor(props) {
		super(props);

		this.state = {
			profileDropdown: false
		};
	}

	handleLogout(e) {
		e.preventDefault();
		return Meteor.logout( () => FlowRouter.go( '/' ) );
	}

	toggleDropdown(e) {
		e.preventDefault();
		this.setState({
			profileDropdown: true
		});
	}

	render() {
		console.log('se rerandeazan plm');
		return (
		  <div className="user-header-area-container">
		  	<div className="toolbar-icon" onClick={this.toggleDropdown.bind(this)}>
		  		<div className="user-avatar"><img className="img-circle" src={this.props.currentUser.profile.avatar} /></div>
		  		<span className="user-email">{ this.props.currentUser.emails[0].address }</span>
		  		<ul className="dropdown-menu userinfo {this.state.profileDropdown ? display-block : ''}">
					<li><a href="/profile"><span>Profile</span></a></li>
					<li><a href="/stats"><span>Stats</span></a></li>
					<li className="divider"></li>
					<li><a href="#" onClick={ this.handleLogout.bind(this) }><span>Sign Out</span></a></li>
				</ul>
		  	</div>
		  	<div className="toolbar-icon">
		  		<a alt="Messages" className="full-link" href="#"><i className="fa fa-envelope"></i></a>
		  	</div>
		  	<div className="toolbar-icon">
		  		<a alt="Upload" href="#" className="upload-btn full-link"><i className="fa fa-cloud-upload"></i></a>
		  	</div>
		  </div>
		);
	}
};