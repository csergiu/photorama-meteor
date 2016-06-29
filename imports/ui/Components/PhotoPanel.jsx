import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ExifParser from 'exif-parser';
import { Albums } from '../../api/albums/albums.js';
import $ from 'jquery';
import Select2 from 'react-select2';
import {
	Panel,
	ControlLabel
} from 'react-bootstrap';

export class PhotoPanel extends Component {
	constructor(props) {
		super(props);

		this.state = {
			uploadStatus: false
		};
	}

	componentWillMount() {
	  Slingshot.fileRestrictions("userPhoto", {
	    allowedFileTypes: ["image/png", "image/jpeg", "image/gif"],
	    maxSize: 30 * 1024 * 1024 // 30 megs max
	  });
	}

	uploadPhoto(e) {
		var photoName = this.refs.photoName.value;
		var photoAlbum = $(this.refs.selectedAlbum.el).val();

		var formattedExif = {};

		var reader = new FileReader();

		reader.onload = (e) => {
			var arrayBuffer = reader.result;

			var parser = ExifParser.create(arrayBuffer);
			var exifData = parser.parse().tags;

			var gpsLat = exifData.GPSLatitude || "No information";
			var gpsLon = exifData.GPSLongitude || "No information";

			formattedExif = {
				model: exifData.Model || "No information",
				timestamp: exifData.ModifyDate || "No information",
				focal: Math.floor(exifData.FocalLength) + "mm" || "No information",
				iso: exifData.ISO || "No information",
				aperture: "f/" + exifData.FNumber || "No information",
				shutter: "1/" + 1 / exifData.ExposureTime || "No information",
				flash: exifData.Flash > 0 ? "Yes" : "No, auto",
				exposureMode: exifData.ExposureMode > 0 ? "Program (P)" : "Auto (A)",
				whiteBalance: exifData.WhiteBalance > 0 ? "Manual" : "Auto",
				gps: gpsLat + ", " + gpsLon,
				fullExif: exifData
			};
		};

		reader.readAsArrayBuffer(this.props.fileObj);

		var uploader = new Slingshot.Upload("userPhoto");
		uploader.send(this.props.fileObj, (error, downloadUrl) => {
			if (error) {
			  console.error('Error uploading', uploader.xhr.response);
			  alert(error);
			}
			else {
				let photo = {
					photoName: photoName,
					photoAlbum: photoAlbum,
					photoUrl: downloadUrl,
					by: Meteor.user().profile.username,
					exifData: formattedExif
				};

				Meteor.call('photos.insert', photo, (err) => {
					if (err) {
						console.error('Something went wrong: ', err);
        				alert('Something went wrong: ', err);
					} else {
						this.setState({
							uploadStatus: true
						});
					}
				});
			}
		});
	}

	removePanel(e) {
		this.props.removePanel(this.props.id);
	}

	render() {
		let successOverlay;

		if (this.state.uploadStatus) {
			successOverlay = (
				<div className="success-overlay">
					<span>Photo uploaded succesfully!</span>
				</div>
			);
		}

		return (
			<Panel className="photo-panel">
				{ successOverlay }
        		<div className="image-container">
					<img src={this.props.imageUrl} />
        		</div>
					<input ref="photoName" className="photo-name form-control" type="text" placeholder="Photo name" />
        		<ControlLabel className="album-label">Select album:</ControlLabel>
        		<Select2 ref="selectedAlbum"
        			data={this.props.albums.map((album) => {
        				return (
        					album.albumName
    					);
        			})}
				/>
				<button onClick={this.uploadPhoto.bind(this)} className="btn btn-upload btn-primary">Upload</button>
				<button onClick={this.removePanel.bind(this)} className="btn btn-delete btn-danger">Delete</button>
		    </Panel>
		);
	}
}

PhotoPanel.propTypes = {
	albums: React.PropTypes.array
};

export default PhotoPanelContainer = createContainer(() => {
	const albumListHandle = Meteor.subscribe("albumList");
	const loading = albumListHandle.ready();
	const albumList = Albums.find({"userId": Meteor.userId()});

	return {
		albums: loading ? albumList.fetch() : [],
	}
}, PhotoPanel);