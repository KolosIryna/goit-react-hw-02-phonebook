import { Component } from 'react';
import { nanoid } from 'nanoid';

import { PhoneName } from './PhoneName/PhoneName';
import { Contacts } from './Contacts/Contacts';

import css from './App.module.css';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleAddNewContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleSubmit = event => {
    event.preventDefault();

    const newContact = {
      name: this.state.name,
      id: nanoid(),
      number: this.state.number,
    };

    this.setState(prevState => ({
      name: '',
      number: '',
      contacts: [...prevState.contacts, newContact],
    }));
  };

  render() {
    return (
      <div className={css.container}>
        <PhoneName
          name={this.state.name}
          number={this.state.number}
          onChange={this.handleInputChange}
          onSubmit={this.handleSubmit}
        />
        <Contacts contacts={this.state.contacts} />
      </div>
    );
  }
}
