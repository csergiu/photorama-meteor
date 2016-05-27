import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import {
  Navbar
} from 'react-bootstrap';

export default class Sidebar extends Component {
  render() {
    return (
		<div className="sidebar-wrapper">
	        <div className="sidebar">
				<div className="widget">
			        <div className="widget-body">
			            <div className="userinfo">
			                <div className="avatar">
			                    <img src={this.props.currentUser.profile.avatar} className="img-responsive img-circle" /> 
			                </div>
			                <div className="info">
			                    <span className="username">Edwin Bryan</span>
			                    <span className="useremail">bryan@december.com</span>
			                </div>
			            </div>
			        </div>
	    		</div>
				<div className="widget stay-on-collapse" id="widget-sidebar">
	        		<nav role="navigation" className="widget-body">
						<ul className="acc-menu">
							<li className="nav-separator"><span>Navigation</span></li>
							<li className="active"><a href="/dashboard"><i className="fa fa-home"></i><span>Dashboard</span></a></li>
						</ul>
					</nav>
	    		</div>
			</div>
	    </div>
    );
  }
};