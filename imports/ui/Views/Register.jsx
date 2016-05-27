import React, { Component } from 'react';
import { RegisterForm } from '../Components/RegisterForm.jsx';
import {
  FormGroup,
  InputGroup,
  FormControl,
  Button
} from 'react-bootstrap';


export class Register extends Component {
  render() {
    return (
      <div className="register-container">
        <RegisterForm />
      </div>
    )
  }
}