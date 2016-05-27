import React, { Component } from 'react';
import { RegisterForm } from './RegisterForm.jsx';
import {
  Modal,
  FormGroup,
  InputGroup,
  FormControl,
  Button
} from 'react-bootstrap';

export class RegisterModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(state) {
    this.setState(state);
  }

  render() {
    let close = () => this.toggleModal({ show: false });

    return (
      <div className="register-modal-container">
        <Button className="btn-sign-up"
                bsStyle="primary"
                onClick={() => { this.toggleModal({ show: true }) }}>
          Sign Up
        </Button>
        <Modal
          show={this.state.show}
          onHide={close}
          container={this}
          >
          <Modal.Header>
            <Modal.Title>
              Sign up for Photorama
            </Modal.Title>
          </Modal.Header>
            <Modal.Body>
              <RegisterForm />
            </Modal.Body>
        </Modal>
      </div>
    )
  }
}