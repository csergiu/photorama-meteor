import React, { Component } from 'react';
import {
	PageHeader
} from 'react-bootstrap';

export class Messages extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
		  <div className="messages-container">
		  	<PageHeader>Messages</PageHeader>
		  </div>
		)
	}
}