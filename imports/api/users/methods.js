if (Meteor.isServer) {
	Meteor.methods({
		'users.insert' (user) {
			let avatar = user.profile.avatar;

			let userId = Accounts.createUser({
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
		}
	});
}
