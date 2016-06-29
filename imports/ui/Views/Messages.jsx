import React, { Component } from 'react';
import { NewMessageModal } from '../Components/NewMessageModal.jsx';
import {
	PageHeader,
	Button,
	Panel
} from 'react-bootstrap';

export class Messages extends Component {
	constructor(props) {
		super(props);

		this.state = {
			messages: []
		};
	}

	componentWillMount() {
		Meteor.call('messages.getAll', Meteor.user().profile.username, (err, messages) => {
	      if (err) {
	        console.error('Something went wrong: ', err);
	        alert('Something went wrong: ', err);
	      } else {
	        this.setState({
	        	messages: messages
	        });
	      }
	    });
	}

	render() {
		var messageList = [];
		this.state.messages.forEach((msg) => {
			const title = (
				<div className="message-header">
					<span>From: </span>@{msg.from}
				</div>
			);

			messageList.push(
				<Panel key={msg._id} className="message-panel" header={title}>
					{msg.body}
			    </Panel>
			);
		});
		
		return (
		  <div className="messages-container">
		  	<PageHeader>Messages</PageHeader>
		  	<NewMessageModal />
		  	{messageList}
		  </div>
		)
	}
}