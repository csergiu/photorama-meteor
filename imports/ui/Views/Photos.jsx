import React, { Component } from 'react';
import {
	PageHeader
} from 'react-bootstrap';

export class Photos extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
		  <div className="photos-container">
		  	<PageHeader>Photos</PageHeader>
		  </div>
		)
	}
}