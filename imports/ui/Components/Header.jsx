import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { RegisterModal } from './RegisterModal.jsx';
import { UserHeaderArea } from './UserHeaderArea.jsx';
import { LoginForm } from './LoginForm.jsx';
import {
  Navbar,
  Nav,
  NavItem,
  MenuItem,
  NavDropdown,
  FormGroup,
  FormControl,
  Button
} from 'react-bootstrap';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false
    };
  }

  render() {
    let loggedIn;
    let appHomepage = "/";

    if (this.props.currentUser) {
      loggedIn = <UserHeaderArea {...this.props} />;
      appHomepage = "/photos"
    } else {
      loggedIn = <LoginForm />;
    }

    return (
      <div className="header-container">
        <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <a className="photorama-logo" href={ appHomepage }>
                <span>Photorama<span className="dot">.</span></span>
              </a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              { loggedIn }
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
};