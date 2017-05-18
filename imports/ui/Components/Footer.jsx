import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import {
  Navbar
} from 'react-bootstrap';

export default class Header extends Component {
  render() {
    return (
      <div className="footer-container">
        <footer className="navbar-fixed-bottom text-center">
          <p>&copy; Photorama 2017</p>
        </footer>
      </div>
    );
  }
};