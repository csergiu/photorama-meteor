import React, { Component, PropTypes } from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
import { createContainer } from 'meteor/react-meteor-data';
import { Homepage } from './Views/Homepage.jsx';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import Sidebar from './Components/Sidebar.jsx';

export class MainLayout extends Component {
	loading() {
		return <div className="login-preloader"><img src="preloader.gif" /></div>;
	}

	getDefaultView() {
		return this.props.currentUser ? FlowRouter.go('/photos') : <Homepage {...this.props} />;
	}

	getView() {
		return this.props.canView() ? this.props.content(this.props) : this.getDefaultView();
	}

	mainLayout() {
		let mainClasses = "main-layout-container ";
		this.props.currentUser ? mainClasses += "logged-in " : "";

		return (
			<div className={mainClasses}>
				<Header currentUser={ this.props.currentUser } />				

			    <div className="content-container clearfix">
			    	{ this.props.currentUser ? <Sidebar {...this.props} /> : '' }
			    	<div className="view-container">
			    		{ this.getView() }
			    		<Footer />
		    		</div>
			    </div>
			</div>
		);
	}

	render() {
		return (
			<div className="main-container">
				{ this.props.loggingIn ? this.loading() : this.mainLayout() }
    		</div>
		);
	}
};

MainLayout.propTypes = {
    currentUser: PropTypes.object
};

export default createContainer(() => {
	return {
		currentUser: Meteor.user(),
		loggingIn: Meteor.loggingIn(),
		isValid(route) {
			let publicRoutes = [
				'homepage',
				'register'
			];

			let authenticatedRoutes = [
				'photos',
				'photo',				
				'upload',
				'people',
				'messages',
				'profile'
			];

			return this.currentUser ? authenticatedRoutes.indexOf(route) > -1 : publicRoutes.indexOf(route) > -1;
		},
		canView() {
			return this.isValid(FlowRouter.current().route.name);
		}
	}
}, MainLayout);