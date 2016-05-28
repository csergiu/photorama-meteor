import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Dropzone from 'react-dropzone';
import Select2 from 'react-select2';
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
	}

	componentDidMount() {
		let dropzone = ReactDOM.findDOMNode(this.refs.dropzone);

		$(dropzone).on("dragover dragenter", function() {
			$(dropzone).addClass("is-dragover");
		});

		$(dropzone).on("dragleave dragend drop", function() {
			$(dropzone).removeClass("is-dragover");
		});
	}

	render() {
		return (
		  <div className="upload-container clearfix">
		  	<PageHeader>Upload</PageHeader>
		  	<Dropzone ref="dropzone" accept="image/png, image/jpeg, image/jpg" className="dropzone" onDrop={this.onDrop}>
		  		<Well>
		  			<div className="circle">
			  			<i className="fa fa-cloud-upload"></i>
			  		</div>
			  		<div className="info-message">Try dropping some files here, or click to select files to upload.</div>
		  		</Well>
            </Dropzone>
            <hr />
            <div className="photo-list-container clearfix">
            	<Panel className="photo-panel">
            		<div className="image-container">
						<img src="https://photoramaimages.s3-eu-central-1.amazonaws.com/users/SBkQcRCq2fxd3JHZQ/1464258319792-avatar-bear-avatar.jpg" />
            		</div>
  					<FormControl className="photo-name" type="text" placeholder="Photo name" />
            		<ControlLabel className="album-label">Select album:</ControlLabel>
            		<Select2
            			data={[
            				'Default',
            				'Album 1',
            				'Album 2',
            				'Album 3'
					  	]}
					/>
					<button className="btn btn-upload btn-primary">Upload</button>
					<button className="btn btn-delete btn-danger">Delete</button>
			    </Panel>
			    <Panel className="photo-panel">
            		<div className="image-container">
						<img src="https://photoramaimages.s3-eu-central-1.amazonaws.com/users/SBkQcRCq2fxd3JHZQ/1464258319792-avatar-bear-avatar.jpg" />
            		</div>
  					<FormControl className="photo-name" type="text" placeholder="Photo name" />
            		<ControlLabel className="album-label">Select album:</ControlLabel>
            		<Select2
            			data={[
            				'Default',
            				'Album 1',
            				'Album 2',
            				'Album 3'
					  	]}
					/>
					<button className="btn btn-upload btn-primary">Upload</button>
					<button className="btn btn-delete btn-danger">Delete</button>
			    </Panel>
			    <Panel className="photo-panel">
            		<div className="image-container">
						<img src="https://photoramaimages.s3-eu-central-1.amazonaws.com/users/SBkQcRCq2fxd3JHZQ/1464258319792-avatar-bear-avatar.jpg" />
            		</div>
  					<FormControl className="photo-name" type="text" placeholder="Photo name" />
            		<ControlLabel className="album-label">Select album:</ControlLabel>
            		<Select2
            			data={[
            				'Default',
            				'Album 1',
            				'Album 2',
            				'Album 3'
					  	]}
					/>
					<button className="btn btn-upload btn-primary">Upload</button>
					<button className="btn btn-delete btn-danger">Delete</button>
			    </Panel>
			    <Panel className="photo-panel">
            		<div className="image-container">
						<img src="https://photoramaimages.s3-eu-central-1.amazonaws.com/users/SBkQcRCq2fxd3JHZQ/1464258319792-avatar-bear-avatar.jpg" />
            		</div>
  					<FormControl className="photo-name" type="text" placeholder="Photo name" />
            		<ControlLabel className="album-label">Select album:</ControlLabel>
            		<Select2
            			data={[
            				'Default',
            				'Album 1',
            				'Album 2',
            				'Album 3'
					  	]}
					/>
					<button className="btn btn-upload btn-primary">Upload</button>
					<button className="btn btn-delete btn-danger">Delete</button>
			    </Panel>
			    <Panel className="photo-panel">
            		<div className="image-container">
						<img src="https://photoramaimages.s3-eu-central-1.amazonaws.com/users/SBkQcRCq2fxd3JHZQ/1464258319792-avatar-bear-avatar.jpg" />
            		</div>
  					<FormControl className="photo-name" type="text" placeholder="Photo name" />
            		<ControlLabel className="album-label">Select album:</ControlLabel>
            		<Select2
            			data={[
            				'Default',
            				'Album 1',
            				'Album 2',
            				'Album 3'
					  	]}
					/>
					<button className="btn btn-upload btn-primary">Upload</button>
					<button className="btn btn-delete btn-danger">Delete</button>
			    </Panel>
			    <Panel className="photo-panel">
            		<div className="image-container">
						<img src="https://photoramaimages.s3-eu-central-1.amazonaws.com/users/SBkQcRCq2fxd3JHZQ/1464258319792-avatar-bear-avatar.jpg" />
            		</div>
  					<FormControl className="photo-name" type="text" placeholder="Photo name" />
            		<ControlLabel className="album-label">Select album:</ControlLabel>
            		<Select2
            			data={[
            				'Default',
            				'Album 1',
            				'Album 2',
            				'Album 3'
					  	]}
					/>
					<button className="btn btn-upload btn-primary">Upload</button>
					<button className="btn btn-delete btn-danger">Delete</button>
			    </Panel>
			    <Panel className="photo-panel">
            		<div className="image-container">
						<img src="https://photoramaimages.s3-eu-central-1.amazonaws.com/users/SBkQcRCq2fxd3JHZQ/1464258319792-avatar-bear-avatar.jpg" />
            		</div>
  					<FormControl className="photo-name" type="text" placeholder="Photo name" />
            		<ControlLabel className="album-label">Select album:</ControlLabel>
            		<Select2
            			data={[
            				'Default',
            				'Album 1',
            				'Album 2',
            				'Album 3'
					  	]}
					/>
					<button className="btn btn-upload btn-primary">Upload</button>
					<button className="btn btn-delete btn-danger">Delete</button>
			    </Panel>
			    <Panel className="photo-panel">
            		<div className="image-container">
						<img src="https://photoramaimages.s3-eu-central-1.amazonaws.com/users/SBkQcRCq2fxd3JHZQ/1464258319792-avatar-bear-avatar.jpg" />
            		</div>
  					<FormControl className="photo-name" type="text" placeholder="Photo name" />
            		<ControlLabel className="album-label">Select album:</ControlLabel>
            		<Select2
            			data={[
            				'Default',
            				'Album 1',
            				'Album 2',
            				'Album 3'
					  	]}
					/>
					<button className="btn btn-upload btn-primary">Upload</button>
					<button className="btn btn-delete btn-danger">Delete</button>
			    </Panel>
            </div>
            <div className="album-manager-container">
            	<Panel header="Album manager" bsStyle="info">
            		<FormControl className="album-name" type="text" placeholder="Add new album" />
            		<ListGroup className="album-list" fill>
						<ListGroupItem><i className="fa fa-folder"></i>Default</ListGroupItem>
						<ListGroupItem><i className="fa fa-folder"></i>Item 2<a href="#" className="delete text-danger"><i className="fa fa-close"></i></a></ListGroupItem>
				    </ListGroup>
			    </Panel>
            </div>
		  </div>
		)
	}
}