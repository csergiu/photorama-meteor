import React, { Component } from 'react';
import Select2 from 'react-select2';
import $ from 'jquery';
import {
	PageHeader,
	Panel,
	InputGroup,
	FormControl
} from 'react-bootstrap';

class SinglePhoto extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const footer = (
			<div className="photo-footer">
				<span>{this.props.photoName}</span>
				<br />
				<a href={"/" + "profile/" + this.props.userId}>@{this.props.by}</a>
			</div>
		);

		return (
			<Panel className="photo-panel" footer={footer}>
        		<a href={"/photo/" + this.props.id}>
	        		<div className="image-container">
						<img src={this.props.photoUrl} />
	        		</div>
        		</a>
		    </Panel>
		);
	}
}

export class Photos extends Component {
	constructor(props) {
		super(props);

		this.state = {
			photosRaw: [],
			modelQuery: "",
			focalQuery: "",
			apertureQuery: "",
			shutterQuery: "",
			loaded: false
		};
	}

	filterModel(e) {
		this.setState({
			modelQuery: e.target.value
		});
	}

	filterFocal(e) {
		this.setState({
			focalQuery: e.target.value
		});
	}

	filterAperture(e) {
		var filterValue = $(e.target).val();
		if (filterValue == "Aperture") {
			filterValue = ""
		}
		this.setState({
			apertureQuery: filterValue
		});
	}

	filterShutter(e) {
		var filterValue = $(e.target).val();
		if (filterValue == "Shutter speed") {
			filterValue = ""
		}
		this.setState({
			shutterQuery: filterValue
		});
	}

	componentWillMount() {
		Meteor.call("photos.getAll", (err, photos) => {
			if (err) {
				console.error('Something went wrong: ', err);
				alert('Something went wrong: ', err);
			} else {
				this.setState({
					photosRaw: photos,
					loaded: true
				});
			}
		});
	}

	render() {
		var loaded;
		var filteredPhotos = [];

		this.state.photosRaw.forEach((photo) => {
			if (photo.exifData.model.indexOf(this.state.modelQuery) === -1 ||
				photo.exifData.focal.indexOf(this.state.focalQuery) === -1 ||
				photo.exifData.aperture.indexOf(this.state.apertureQuery) === -1 ||
				photo.exifData.shutter.indexOf(this.state.shutterQuery) === -1) {
				return;
			}
			filteredPhotos.push(<SinglePhoto key={photo._id} id={photo._id} userId={photo.userId} photoUrl={photo.photoUrl} photoName={photo.photoName} by={photo.by} />);
		});

		if (this.state.loaded) {
			loaded = (
				<div className="photos-panels-container clearfix">
					{filteredPhotos}
		  		</div>
			);
		}

		return (
		  <div className="photos-container">
		  	<PageHeader>Photos</PageHeader>
		  	<div className="filters-container clearfix">
		  		<InputGroup className="camera">
					<InputGroup.Addon><i className="fa fa-camera-retro"></i></InputGroup.Addon>
					<FormControl onChange={this.filterModel.bind(this)} type="text" placeholder="Camera Model" />
				</InputGroup>
				<InputGroup className="focal-length">
					<InputGroup.Addon><i className="fa fa-eye"></i></InputGroup.Addon>
					<FormControl onChange={this.filterFocal.bind(this)} type="text" placeholder="Focal length" />
				</InputGroup>
				<Select2
					onChange={this.filterAperture.bind(this)}
					className="aperture"
        			data={[
        				'Aperture',
        				'f/1.2',
        				'f/1.4',
        				'f/2',
        				'f/2.4',
        				'f/2.8',
        				'f/4',
        				'f/4.8',
        				'f/5.6',
        				'f/6.7',
        				'f/8',
        				'f/11',
        				'f/16',
        				'f/22',
        				'f/27',
        				'f/32'
				  	]}
				  	options={{
				  		theme: 'bootstrap'
				  	}}
				/>
				<Select2
					onChange={this.filterShutter.bind(this)}
					className="shutter-speed"
        			data={[
        				'Shutter speed',
        				'1/1000',
        				'1/500',
        				'1/250',
        				'1/125',
        				'1/60',
        				'1/30',
        				'1/15',
        				'1/8',
        				'1/4',
        				'1/2',
        				'1/1'
				  	]}
				  	options={{
				  		theme: 'bootstrap'
				  	}}
				/>
		  	</div>
		  	{loaded}
		  </div>
		)
	}
}