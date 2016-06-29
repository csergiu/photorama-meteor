import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Dropzone from 'react-dropzone';
import Select2 from 'react-select2';
import AlbumManagerContainer, { AlbumManager } from '../Components/AlbumManager.jsx';
import { PhotoPanel } from '../Components/PhotoPanel.jsx';
import $ from 'jquery';
import {
	PageHeader,
	Well,
	Panel,
	ControlLabel,
	FormControl,
	ListGroup,
	ListGroupItem
} from 'react-bootstrap';

export class Upload extends Component {
	constructor(props) {
		super(props);

		this.removePanel = this.removePanel.bind(this);

		this.state = {
			photoPanels: []
		};
	}

	removePanel(panel) {
		this.state.photoPanels.forEach((photoPanel, index) => {
			if (photoPanel.props.id == panel) {
				var newPanels = this.state.photoPanels;
				newPanels.splice(index, 1);
				this.setState({
					photoPanels: newPanels
				});
			}
		});
	}

	componentDidMount() {
		// dropzone
		let dropzone = ReactDOM.findDOMNode(this.refs.dropzone);

		$(dropzone).on("dragover dragenter", function() {
			$(dropzone).addClass("is-dragover");
		});

		$(dropzone).on("dragleave dragend drop", function() {
			$(dropzone).removeClass("is-dragover");
		});
	}

	dropHandler(files) {
		var panels = this.state.photoPanels;

		files.forEach((file) => {
			panels.push(<PhotoPanelContainer id={file.preview} fileObj={file} key={file.preview} imageUrl={file.preview} removePanel={this.removePanel} />);
		})

		this.setState({
			photoPanels: panels
		});
	}

	render() {
		return (
		  <div className="upload-container clearfix">
		  	<PageHeader>Upload</PageHeader>
		  	<Dropzone ref="dropzone" accept="image/png, image/jpeg, image/jpg" className="dropzone" onDrop={this.dropHandler.bind(this)}>
		  		<Well>
		  			<div className="circle">
			  			<i className="fa fa-cloud-upload"></i>
			  		</div>
			  		<div className="info-message">Try dropping some files here, or click to select files to upload.</div>
		  		</Well>
            </Dropzone>
            <hr />
            <div className="photo-list-container clearfix">
            	{this.state.photoPanels}
            </div>
            <AlbumManagerContainer />
		  </div>
		)
	}
}