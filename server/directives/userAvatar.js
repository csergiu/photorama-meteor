Slingshot.fileRestrictions("userAvatar", {
  allowedFileTypes: ["image/png", "image/jpeg", "image/jpg"],
  maxSize: 2 * 500 * 500 // 2 megs max
});


Slingshot.createDirective("userAvatar", Slingshot.S3Storage, {
  bucket: "photoramaimages",

  acl: "public-read",

  authorize: function (file, metaContext) {
    
    //Deny uploads if user is not logged in.
    if (!this.userId) {
      var message = "Please login before posting files";
      throw new Meteor.Error("Login Required", message);
    }

    return true;
  },

  key: function (file, metaContext) {
    var user = Meteor.users.findOne(this.userId);
    return "users/" + user._id + "/" + Date.now() + "-avatar-" + file.name;
  }
});