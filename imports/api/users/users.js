import './server/publications.js';
import './methods.js';

var UserSchema = {};

UserSchema.UserCountry = new SimpleSchema({
    name: {
        type: String
    },
    code: {
        type: String,
        regEx: /^[A-Z]{2}$/
    }
});

UserSchema.UserProfile = new SimpleSchema({
	avatar: {
        type: String,
        optional: true
    },
    username: {
        type: String,
        optional: false
    },
    country: {
        type: UserSchema.UserCountry,
        optional: true
    }/*,
    albums: {
        type: Array,
        optional: true
    },
    "albums.$": {
        type: Object
    },
    "albums.$.name": {
        type: String,
        optional: false
    }
    "albums.$.createdAt": {
        type: Date,
        optional: false
    }*/
});

UserSchema.User = new SimpleSchema({
    emails: {
        type: Array,
        optional: true
    },
    "emails.$": {
        type: Object
    },
    "emails.$.address": {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    createdAt: {
        type: Date
    },
    profile: {
        type: UserSchema.UserProfile,
        optional: false
    },
    services: {
        type: Object,
        optional: true,
        blackbox: true
    }
});

Meteor.users.attachSchema(UserSchema.User);