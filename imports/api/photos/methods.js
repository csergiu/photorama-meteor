import { Photos } from './photos.js';

if (Meteor.isServer) {
	Meteor.methods({
		'photos.insert' (photo) {
			Photos.insert({
				photoName: photo.photoName,
				photoAlbum: photo.photoAlbum,
				photoUrl: photo.photoUrl,
				by: photo.by,
				userId: this.userId,
				exifData: photo.exifData
			});
		},

		'photos.getAll' () {
			return Photos.find({}).fetch();
		},

		'photos.getPhoto' (photoId) {
			return Photos.find({"_id": photoId}).fetch();
		}
	});
}
