import React, { Component } from 'react';
import {
	PageHeader,
	ListGroup,
	ListGroupItem
} from 'react-bootstrap';

export class Photo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			photo: {},
			loaded: false
		};
	}

	componentWillMount() {
		Meteor.call("photos.getPhoto", this.props.photoId, (err, thePhoto) => {
			if (err) {
				console.error('Something went wrong: ', err);
				alert('Something went wrong: ', err);
			} else {
				this.setState({
					photo: thePhoto[0],
					loaded: true
				});
			}
		});
	}

	showExif(e) {
		e.preventDefault();
		alert(JSON.stringify(this.state.photo.exifData.fullExif));
	}

	render() {
		var photo = this.state.photo;
		var loaded;

		if (this.state.loaded) {
			loaded = (
				<div className="photo-loaded-container">
					<div className="image-container">
				  		<a href={photo.photoUrl}><img src={photo.photoUrl} /></a>
				  	</div>
				  	<div className="info-container">
				  		<ListGroup>
							<ListGroupItem active>Image information</ListGroupItem>
							<ListGroupItem>by <a href="#">@{photo.by}</a></ListGroupItem>
							<ListGroupItem>Album: {photo.photoAlbum}</ListGroupItem>
							<ListGroupItem header="Camera Model">{photo.exifData.model}</ListGroupItem>
							<ListGroupItem header="Timestamp">{photo.exifData.timestamp}</ListGroupItem>
							<ListGroupItem header="Focal length">{photo.exifData.focal}</ListGroupItem>
							<ListGroupItem header="ISO speed">{photo.exifData.iso}</ListGroupItem>
							<ListGroupItem header="Aperture">{photo.exifData.aperture}</ListGroupItem>
							<ListGroupItem header="Shutter speed">{photo.exifData.shutter}</ListGroupItem>
							<ListGroupItem header="Flash">{photo.exifData.flash}</ListGroupItem>
							<ListGroupItem header="Exposure mode">{photo.exifData.exposureMode}</ListGroupItem>
							<ListGroupItem header="White balance">{photo.exifData.whiteBalance}</ListGroupItem>
							<ListGroupItem header="GPS Coordinates">{photo.exifData.gps}</ListGroupItem>
							<ListGroupItem onClick={this.showExif.bind(this)} href="#">View full EXIF info</ListGroupItem>
						</ListGroup>
				  	</div>
				</div>
			);
		}
		
		return (
		  <div className="photo-container clearfix">
		  	<PageHeader>{photo.photoName}</PageHeader>
		  	{ loaded }
		  </div>
		)
	}
}