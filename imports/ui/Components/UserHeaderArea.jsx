import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Meteor } from 'meteor/meteor';
import {
  Navbar
} from 'react-bootstrap';

export class UserHeaderArea extends Component {
	constructor(props) {
		super(props);

		this.state = {
			dropdownStatus: false
		};
	}

	handleLogout(e) {
		e.preventDefault();
		return Meteor.logout( () => FlowRouter.go( '/' ) );
	}

	toggleDropdown(e) {
		e.preventDefault();
		this.setState({
			dropdownStatus: this.state.dropdownStatus ? false : true
		});
	}

	render() {
		let dropdownMenuClasses = "dropdown-menu userinfo ";
		this.state.dropdownStatus ? dropdownMenuClasses += "display-block " : "";

		return (
		  <div className="user-header-area-container">
		  	<div className="toolbar-icon" onClick={this.toggleDropdown.bind(this)}>
		  		<div className="user-avatar"><img className="img-circle" src={this.props.currentUser.profile.avatar[0] == 'h' ? this.props.currentUser.profile.avatar : "/" + this.props.currentUser.profile.avatar} /></div>
		  		<span className="user-email noselect">{ this.props.currentUser.emails[0].address }</span>
		  		<ul ref="dropdownMenu" className={dropdownMenuClasses}>
					<li><a href={"/profile/" + this.props.currentUser._id}><span>Profile</span></a></li>
					<li className="divider"></li>
					<li><a href="#" onClick={ this.handleLogout.bind(this) }><span>Sign Out</span></a></li>
				</ul>
		  	</div>
		  	<div className="toolbar-icon">
		  		<a alt="Messages" className="full-link" href="/messages"><i className="fa fa-envelope"></i></a>
		  	</div>
		  	<div className="toolbar-icon">
		  		<a alt="Upload" href="/upload" className="upload-btn full-link"><i className="fa fa-cloud-upload"></i></a>
		  	</div>
		  </div>
		);
	}
};