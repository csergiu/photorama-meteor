// user list for 'People' page
Meteor.publish("userList", () => {
	return Meteor.users.find({});
});