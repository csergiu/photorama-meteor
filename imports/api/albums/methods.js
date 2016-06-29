import { Albums } from './albums.js';

if (Meteor.isServer) {
	Meteor.methods({
		'albums.insert' (album) {
			Albums.insert({
				albumName: album,
				userId: Meteor.userId()
			});
		},
		'albums.remove' (album) {
			Albums.remove({
				albumName: album
			});
		}
	});
}
