import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import {
	PageHeader,
	InputGroup,
	FormControl,
	Table
} from 'react-bootstrap';

class UserList extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		var filteredUsers = [];

		this.props.users.forEach((user) => {
			if (user.profile.username.indexOf(this.props.filterQuery) === -1) {
				return;
			}
			filteredUsers.push(user);
		});

		return (
			<div className="people-blocks-container">
				<Table striped bordered condensed hover>
				    <thead>
				      <tr>
				        <th>Username</th>
				        <th>Location</th>
				      </tr>
				    </thead>
				    <tbody>
				    	{filteredUsers.map((user) => {
				    		return (
				    			<tr key={user._id}>
							        <td><a href={"/profile/" + user._id}>@{user.profile.username}</a></td>
							        <td>{user.profile.country.name}</td>
								</tr>
			    			);
				    	})}
				    </tbody>
				</Table>
			</div>
		);
	}
}

export class People extends Component {
	constructor(props) {
		super(props);

		this.state = {
			filterQuery: ""
		};
	}

	filterUsers(e) {
		this.setState({
			filterQuery: e.target.value
		});
	}

	render() {
		return (
			<div className="people-container">
				<PageHeader>People</PageHeader>
				<div className="filter-people-container">
					<InputGroup className="username">
						<InputGroup.Addon>@</InputGroup.Addon>
						<FormControl onChange={this.filterUsers.bind(this)} type="text" placeholder="Username" />
					</InputGroup>
				</div>
				<UserList filterQuery={this.state.filterQuery} users={this.props.users} />
			</div>
		)
	}
}

People.propTypes = {
	users: React.PropTypes.array
};

export default PeopleContainer = createContainer(() => {
	const userListHandle = Meteor.subscribe("userList");
	const loading = !userListHandle.ready();
	const userList = Meteor.users.find({});

	return {
		users: !loading ? userList.fetch() : [],
	}
}, People);