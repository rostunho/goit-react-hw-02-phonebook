import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleInput = event => {
    // console.log(event.target.value);
    // console.log(event.target.name);
    this.setState({ name: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    // console.log(event.target);
    const { name } = this.state;

    const newContact = {
      id: nanoid(),
      name,
    };

    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            onChange={this.handleInput}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
      </>
    );
  }
}

export default App;
