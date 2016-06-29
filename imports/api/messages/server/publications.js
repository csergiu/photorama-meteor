import { Messages } from '../messages.js';

Meteor.publish("messageList", () => {
	return Messages.find({});
});