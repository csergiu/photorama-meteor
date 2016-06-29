import { Albums } from '../albums/albums.js';

if (Meteor.isServer) {
	Meteor.methods({
		'users.insert' (user) {

			/* custom password validation */
			if (user.password.length < 6 || user.password.length > 20) {
				throw new Meteor.Error(500, "Error: Password validation failed");
			}

			const userId = Accounts.createUser({
		      email: user.email,
		      password: user.password,
		      profile: {
		      	avatar: user.profile.avatar,
		      	username: user.profile.username,
		      	country: {
		      		name: user.profile.country.name,
		      		code: user.profile.country.code
		      	}
		      }
		    });

		    Albums.insert({
		    	albumName: 'Default',
		    	userId: userId
		    });
		},

		'users.get' (userId) {
		    return Meteor.users.find({"_id": userId}).fetch();
		}
	});
}
