import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Albums } from '../../api/albums/albums.js';
import {
	Panel,
	FormControl,
	ListGroup,
	ListGroupItem
} from 'react-bootstrap';

export class AlbumManager extends Component {
	constructor(props) {
		super(props);
	}

	addNewAlbum(e) {
		if (e.key === 'Enter') {
			Meteor.call('albums.insert', e.target.value, (err) => {
				if (err) {
					console.error('Something went wrong: ', err);
					alert('Something went wrong: ', err);
				}
			});
			e.target.value = "";
		}
	}

	deleteAlbum(e) {
		Meteor.call('albums.remove', e.target.getAttribute('data-album'), (err) => {
			if (err) {
				console.error('Something went wrong: ', err);
				alert('Something went wrong: ', err);
			}
		});
	}

	render() {
		return (
			<div className="album-manager-container">
            	<Panel header="Album manager" bsStyle="info">
            		<FormControl onKeyPress={this.addNewAlbum.bind(this)} className="album-name" type="text" placeholder="Add new album" />
            		<ListGroup className="album-list" fill>
            			<ListGroupItem><i className="fa fa-folder"></i>Default</ListGroupItem>
            			{this.props.albums.map((album, index) => {
            				if (album.albumName == "Default") return;

            				return (
            					<ListGroupItem key={album._id}><i className="fa fa-folder"></i>{ album.albumName }<a data-album={album.albumName} onClick={this.deleteAlbum.bind(this)} className="delete text-danger"><i data-album={album.albumName} className="fa fa-close"></i></a></ListGroupItem>
        					);
            			})}
						
						
				    </ListGroup>
			    </Panel>
            </div>
		);
	}
}

AlbumManager.propTypes = {
	albums: React.PropTypes.array
};

export default AlbumManagerContainer = createContainer(() => {
	const albumListHandle = Meteor.subscribe("albumList");
	const loading = albumListHandle.ready();
	const albumList = Albums.find({"userId": Meteor.userId()});

	return {
		albums: loading ? albumList.fetch() : [],
	}
}, AlbumManager);