Slingshot.fileRestrictions("userPhotos", {
  allowedFileTypes: ["image/png", "image/jpeg", "image/jpg"],
  maxSize: 30 * 1024 * 1024 // 30 megs max
});


Slingshot.createDirective("userPhotos", Slingshot.S3Storage, {
  bucket: "photoramaimages",

  acl: "public-read",

  authorize: function (file, metaContext) {
    
    //Deny uploads if user is not logged in.
    if (!this.userId) {
      var message = "Please login before uploading";
      throw new Meteor.Error("Login Required", message);
    }

    return true;
  },

  key: function (file, metaContext) {
    var user = Meteor.users.findOne(this.userId);
    return "users/" + user._id + "/photos/" + Date.now() + file.name;
  }
});