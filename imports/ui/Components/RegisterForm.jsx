import React, { Component } from 'react';
import { AvatarUploader } from './AvatarUploader.jsx';
import countries from 'country-list';
import {
  FormGroup,
  InputGroup,
  FormControl,
  ControlLabel,
  Button
} from 'react-bootstrap';


export class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      avatar: 'default-avatar.jpg'
    }
  }

  componentWillMount() {
      Slingshot.fileRestrictions("userAvatar", {
        allowedFileTypes: ["image/png", "image/jpeg", "image/gif"],
        maxSize: 2 * 1024 * 1024
      });
  }

  onSubmit(e) {
    e.preventDefault();

    var user = {
      email: e.target.email.value,
      password: e.target.password.value,
      profile: {
        avatar: this.state.avatar,
        username: e.target.username.value,
        country: {
          name: e.target.country[e.target.country.selectedIndex].innerHTML,
          code: e.target.country.value
        }
      }
    };

    Meteor.call('users.insert', user, (err) => {
      if (err) {
        console.error('Something went wrong: ', err);
        alert('Something went wrong: ', err);
      }
      else {
        var avatar = this.refs.avatarInput.files[0] || null;

        Meteor.loginWithPassword(user.email, user.password, (err) => {
          if (err) {
            alert('Something went wrong: ', err);
          } else {
            if (avatar !== null) {
              var uploader = new Slingshot.Upload("userAvatar");
            
              uploader.send(avatar, function (error, downloadUrl) {
                if (error) {
                  console.error('Error uploading', uploader.xhr.response);
                  alert(error);
                }
                else {
                  Meteor.users.update(Meteor.user()._id, {$set: {"profile.avatar": downloadUrl}});
                }
              });
            }
            FlowRouter.go('/dashboard');
          }
        });
      }
    });
  }

  updateAvatar(e) {
    let tempAvatarURL = URL.createObjectURL(e.target.files[0]);
    this.setState({avatar: tempAvatarURL});
  }

  render() {

    var myCountries = [];
    countries().getData().forEach(({name, code}) => {
      myCountries.push(<option key={code} value={code}>{name}</option>);
    });

    return (
      <div className="register-form-container">
        <form className="text-center" onSubmit={ this.onSubmit }>
          <div className="avatar-container">
            <img src={this.state.avatar} className="avatar" />
            <div className="upload-overlay"></div>
            <input ref="avatarInput" onChange={this.updateAvatar.bind(this)} type="file" id="avatarInput" name="avatarInput" />
          </div>
          <FormGroup>
            <InputGroup>
              <InputGroup.Addon>Username</InputGroup.Addon>
              <FormControl name="username" type="text" />
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputGroup>
              <InputGroup.Addon>Email</InputGroup.Addon>
              <FormControl name="email" type="text" />
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputGroup>
              <InputGroup.Addon>Password</InputGroup.Addon>
              <FormControl name="password" type="password" />
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputGroup>
              <InputGroup.Addon>Confirm password</InputGroup.Addon>
              <FormControl name="confirm" type="password" />
            </InputGroup>
          </FormGroup>
          <FormGroup controlId="formControlsSelect">
            <ControlLabel>Select country...</ControlLabel>
            <FormControl name="country" componentClass="select">
              {myCountries}
            </FormControl>
          </FormGroup>
          <FormGroup>
            <Button type="submit">
              Register
            </Button>
          </FormGroup>
        </form>
      </div>
    )
  }
}