import React, { Component } from 'react';
import propTypes from 'prop-types';
import { nanoid } from 'nanoid';
import {
  Form,
  ContainerInput,
  Input,
  Label,
  Button,
  Message,
} from './ContactForm.styled.jsx';

const FormError = ({ message }) => {
  return <Message>{message}</Message>;
};

export class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.submitButton = React.createRef();
  }

  state = {
    name: '',
    number: '',
    nameError: null,
    numberError: null,
  };

  nameInputId = nanoid();
  telInputId = nanoid();

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value, [`${name}Error`]: null });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;

    if (!name || !number) {
      this.setState({
        nameError: 'Please fill in all fields',
      });
      return;
    }

    const isValidName = /^[\p{L}\s]+$/u;
    if (!isValidName.test(name)) {
      this.setState({ nameError: 'Please enter a valid name' });
      return;
    }

    const isValidNumber = /^[0-9\s-]+$/;
    if (!isValidNumber.test(number)) {
      this.setState({ numberError: 'Please enter a valid number' });
      return;
    }

    const isContactExist = this.props.isContactExist(name);
    if (isContactExist) {
      this.setState({ nameError: 'Already exists!' });
      return;
    }
    this.props.onSubmit(name, number);
    this.reset();
    this.submitButton.current.focus();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <ContainerInput>
          <Label htmlFor={this.nameInputId}>
            Name
            <Input
              className="input"
              type="text"
              name="name"
              placeholder="Enter name"
              id={this.nameInputId}
              value={this.state.name}
              onChange={this.handleChange}
            />
          </Label>
          <>
            {this.state.nameError && (
              <FormError name="name" message={this.state.nameError} />
            )}
          </>
        </ContainerInput>
        <ContainerInput>
          <Label htmlFor={this.telInputId}>
            Phone
            <Input
              className="input"
              type="tel"
              name="number"
              placeholder="Enter phone number"
              id={this.telInputId}
              value={this.state.number}
              onChange={this.handleChange}
            />
          </Label>
          <>
            {this.state.numberError && (
              <FormError name="number" message={this.state.numberError} />
            )}
          </>
        </ContainerInput>
        <Button type="submit" ref={this.submitButton}>
          Add contact
        </Button>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: propTypes.func.isRequired,
  isContactExist: propTypes.func.isRequired,
};
