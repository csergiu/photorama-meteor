import React, { Component } from 'react';
import {
	PageHeader
} from 'react-bootstrap';

export class Dashboard extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
		  <div className="dashboard-container">
		  	<PageHeader>Dashboard</PageHeader>
		  </div>
		)
	}
}