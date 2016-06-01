import React, { Component } from 'react';
import {
	PageHeader
} from 'react-bootstrap';

export class People extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
		  <div className="people-container">
		  	<PageHeader>People</PageHeader>
		  </div>
		)
	}
}