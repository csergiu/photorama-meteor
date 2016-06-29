import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import {FlowRouter} from 'meteor/kadira:flow-router';
import Footer from './Footer.jsx';
import { Meteor } from 'meteor/meteor';
import {
  Navbar
} from 'react-bootstrap';

export default class Sidebar extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div ref="sidebarWrapper" className="sidebar-wrapper">
		        <div className="sidebar">
					<div className="widget">
				        <div className="widget-body">
				            <div className="userinfo">
				                <div className="avatar">
				                    <img src={this.props.currentUser.profile.avatar[0] == 'h' ? this.props.currentUser.profile.avatar : "/" + this.props.currentUser.profile.avatar} className="img-responsive img-circle" /> 
				                </div>
				                <div className="info">
				                    <span className="username">{this.props.currentUser.profile.username}</span>
				                    <span className="useremail">{this.props.currentUser.emails[0].address}</span>
				                </div>
				            </div>
				        </div>
		    		</div>
					<div className="widget">
		        		<nav role="navigation" className="widget-body">
							<ul className="main-menu">
								<li className="menu-title"><span>Navigation</span></li>
								<li className={FlowHelpers.currentRoute('photos')}><a href="/photos"><i className="fa fa-camera"></i>Photos</a></li>
								<li className={FlowHelpers.currentRoute('upload')}><a href="/upload"><i className="fa fa-cloud-upload"></i>Upload</a></li>
								<li className={FlowHelpers.currentRoute('people')}><a href="/people"><i className="fa fa-users"></i>People</a></li>
							</ul>
						</nav>
		    		</div>
				</div>
		    </div>
		);
	}
};