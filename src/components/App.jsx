import { Component } from 'react';
import { nanoid } from 'nanoid';

import { PhoneName } from './PhoneName/PhoneName';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleAdd = newContact => {
    console.log(newContact);
    // this.setState(prevState => {
    //   return {
    //     contacts: [...newContact]
    //   }
    // });
  };

  handleSubmit = event => {
    event.preventDefault();

    const newContact = { name: this.state.name, id: nanoid() };

    this.handleAdd(newContact);

    this.setState({
      name: '',
    });
  };

  render() {
    return (
      <PhoneName
        name={this.state.name}
        onChange={this.handleInputChange}
        onSubmit={this.handleSubmit}
      />
    );
  }
}
