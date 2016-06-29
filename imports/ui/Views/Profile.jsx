import React, { Component } from 'react';
import {
	PageHeader,
	InputGroup,
	FormControl,
	Table,
	Image
} from 'react-bootstrap';

export class Profile extends Component {
	constructor(props) {
		super(props);

		this.state = {
			theUser: {},
			loaded: false
		};
	}

	componentWillMount() {
		Meteor.call("users.get", this.props.userId, (err, userReceived) => {
			if (err) {
				console.error('Something went wrong: ', err);
				alert('Something went wrong: ', err);
			} else {
				this.setState({
					theUser: userReceived[0],
					loaded: true
				});
			}
		});
	}

	render() {
		var loaded;
		if (this.state.loaded) {
			loaded = (
				<div className="profile-header">
				  	<Image circle src={this.state.theUser.profile.avatar[0] == 'h' ? this.state.theUser.profile.avatar : "/" + this.state.theUser.profile.avatar} />
				  	<p className="username">@{this.state.theUser.profile.username}</p>
				  	<hr />
				  	<h5>Join date: {this.state.theUser.createdAt.toISOString().substring(0,10)}</h5>
				  	<h5>Country: {this.state.theUser.profile.country.name}</h5>
			  	</div>
			);
		}
		return (
		  <div className="people-container">
		  	<PageHeader>Profile</PageHeader>
		  	<div className="profile-body text-center">
			  	{loaded}
		  	</div>
		  </div>
		)
	}
}