import { Component } from 'react';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <div>
        <input type="text" name="name" required />
      </div>
    );
  }
}
