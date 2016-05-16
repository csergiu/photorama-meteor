import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
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
  render() {
    return (
      <div className="header-container">
        <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <a className="photorra-logo" href="/">
                <span className="word-01">Photo</span>
                <span className="word-02">rra</span>
              </a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <form>
                <Navbar.Form>
                  <FormGroup>
                    <FormControl
                      type="text"
                      placeholder="Email"
                    >
                    </FormControl>
                  </FormGroup>
                  <FormGroup>
                    <FormControl
                      type="password"
                      placeholder="Password"
                    >
                    </FormControl>
                  </FormGroup>
                  <Button className="btn-sign-in"
                          bsStyle="success"
                          submit>
                    Sign In
                  </Button>
                  <Button className="btn-sign-up"
                          bsStyle="primary"
                          href="/signup">
                    Sign Up
                  </Button>
                </Navbar.Form>
              </form>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
};