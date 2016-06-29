import { Albums } from '../albums.js';

Meteor.publish("albumList", () => {
	return Albums.find({});
});