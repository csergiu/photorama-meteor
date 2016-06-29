import React, { Component } from 'react';


export class AvatarUploader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      avatar: this.props.avatar
    }
  }

  componentWillMount() {
    Slingshot.fileRestrictions("avatar", {
      allowedFileTypes: ["image/png", "image/jpeg", "image/gif"],
      maxSize: 2 * 1024 * 1024
    });
  }

  uploadAvatar(e) {
    var uploader = new Slingshot.Upload("userAvatar");
    uploader.send(e.target.files[0], function (error, downloadUrl) {
      if (error) {
        console.error('Error uploading', uploader.xhr.response);
        alert(error);
      }
      else {
        this.setState({avatar: downloadUrl});
      }
    });
  }

  render() {

    return (
      <div className="avatar-container">
        <img src={this.state.avatar} className="avatar" />
        <div className="upload-overlay"></div>
        <input onChange={this.uploadAvatar.bind(this)} type="file" id="avatarInput" name="avatarInput" />
      </div>
    )
  }
}