import React, { Component, PropTypes } from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
import { createContainer } from 'meteor/react-meteor-data';
import { Homepage } from './Views/Homepage.jsx';
import { Dashboard } from './Views/Dashboard.jsx';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import Sidebar from './Components/Sidebar.jsx';

export class MainLayout extends Component {
	loading() {
		return <div className="login-preloader"><img src="preloader.gif" /></div>;
	}

	getDefaultView() {
		return this.props.currentUser ? <Dashboard {...this.props} /> : <Homepage {...this.props} />;
	}

	getView() {
		return this.props.canView() ? this.props.content(this.props) : this.getDefaultView();
	}

	mainLayout() {
		return (
			<div className="main-layout-container">
				<Header currentUser={ this.props.currentUser } />				

			    <div className="content-container">
			    	{ this.props.currentUser ? <Sidebar {...this.props} /> : '' }
			    	{ this.getView() }
			    </div>

	    		<Footer />
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
				'dashboard'
			];

			return this.currentUser ? authenticatedRoutes.indexOf(route) > -1 : publicRoutes.indexOf(route) > -1;
		},
		canView() {
			return this.isValid(FlowRouter.current().route.name);
		}
	}
}, MainLayout);