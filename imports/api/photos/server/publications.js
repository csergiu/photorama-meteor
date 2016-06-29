import { Photos } from '../photos.js';

Meteor.publish("photoList", () => {
	return Photos.find({});
});