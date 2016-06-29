import React, { Component } from 'react';
import $ from 'jquery';
import {
  Modal,
  FormGroup,
  InputGroup,
  FormControl,
  Button,
  ControlLabel
} from 'react-bootstrap';

export class NewMessageModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      sent: false
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(state) {
    this.setState(state);
  }

  onSubmit(e) {
    e.preventDefault();

    var message = {
      username: e.target.receiver.value,
      from: Meteor.user().profile.username,
      body: $(e.target.messageBody).val()
    };

    Meteor.call('messages.send', message, (err) => {
      if (err) {
        console.error('Something went wrong: ', err);
        alert('Something went wrong: ', err);
      } else {
        this.setState({
          sent: true
        });
      }
    });
  }

  render() {
    let close = () => this.toggleModal({ show: false, sent: false });

    return (
      <div className="newmessage-modal-container">
        <Button className="btn btn-compose btn-primary"
                onClick={() => { this.toggleModal({ show: true }) }}>
          Compose new message
        </Button>
        <Modal
          show={this.state.show}
          onHide={close}
          container={this}
          >
          <Modal.Header>
            <Modal.Title>
              Send new message
            </Modal.Title>
          </Modal.Header>
            <Modal.Body>
              {this.state.sent ? <span>Sent!</span> : ''}
              <form onSubmit={ this.onSubmit.bind(this) }>
                <FormGroup>
                  <InputGroup>
                    <InputGroup.Addon>To</InputGroup.Addon>
                    <FormControl name="receiver" type="text" />
                  </InputGroup>
                </FormGroup>
                <FormGroup controlId="formControlsTextarea">
                  <ControlLabel>Message</ControlLabel>
                  <FormControl name="messageBody" componentClass="textarea" placeholder="Enter your message here..." />
                </FormGroup>
                <Button bsStyle="primary" type="submit">
                  Send
                </Button>
              </form>
            </Modal.Body>
        </Modal>
      </div>
    )
  }
}