import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { RegisterModal } from './RegisterModal.jsx';
import {
  Navbar,
  FormGroup,
  InputGroup,
  FormControl,
  Button
} from 'react-bootstrap';


export class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    let email = e.target.loginEmail.value;
    let password = e.target.password.value;

    Meteor.loginWithPassword(email, password, (err) => {
      if (err) {
        alert("Wrong username or password.");
      } else {
        FlowRouter.go('/dashboard');
      }
    });
  }

  componentDidMount() {
    ReactDOM.findDOMNode(this.refs.login).focus();
  }

  render() {
    return (
      <div className="login-form-container">
        <form action="login" onSubmit={ this.onSubmit }>
          <Navbar.Form>
            <FormGroup>
              <FormControl
                name="loginEmail"
                ref="login"
                type="text"
                placeholder="Email">
              </FormControl>
            </FormGroup>
            <FormGroup>
              <FormControl
                name="password"
                type="password"
                placeholder="Password">
              </FormControl>
            </FormGroup>
            <Button className="btn-sign-in"
                    bsStyle="success"
                    type="submit">
              Sign In
            </Button>
          </Navbar.Form>
        </form>
        <RegisterModal />
      </div>
    )
  }
}