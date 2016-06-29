import { Messages } from './messages.js';

if (Meteor.isServer) {
	Meteor.methods({
		'messages.send' (message) {
			Messages.insert({
				username: message.username,
				from: message.from,
				body: message.body
			});
		},

		'messages.getAll' (username) {
			return Messages.find({"username": username}).fetch();
		}
	});
}
