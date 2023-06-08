import React, { Component } from 'react';
import { MainTitle } from './AppStyled';
import { Title } from './PhoneBookList/PhoneBookListStyled';
import { Section } from './AppStyled';
import { PhoneBookForm } from './PhoneBookForm';
import { Filter } from './Filter';
import { PhoneBookList } from './PhoneBookList/PhoneBookList';
import { saveToLocal, loadFromLocal } from '../Services/localStorage';

const INITIAL_STATE = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
  nameLocalStorage: 'phoneBook',
};

export class App extends Component {
  state = { ...INITIAL_STATE };

  componentDidMount() {
    const phoneBookArray = loadFromLocal(this.state.nameLocalStorage);
    if (phoneBookArray) {
      this.setState({ contacts: phoneBookArray });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      saveToLocal(this.state.nameLocalStorage, this.state.contacts);
    }
  }

  changeContacts = newContact => {
    if (
      this.state.contacts.some(el => {
        return el.name.toLowerCase().includes(newContact.name.toLowerCase());
      })
    ) {
      return alert(`${newContact.name} is already in list!`);
    }
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, newContact] };
    });
  };

  handleChangeSearch = ({ target }) => {
    this.setState({ filter: target.value.toLowerCase().trim() });
  };

  arrayWithSearch = () => {
    const searchQuery = this.state.filter;
    return this.state.contacts.filter(el => el.name.toLowerCase().includes(searchQuery));
  };

  deleteItem = btnId => {
    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts.filter(el => {
            return el.id !== btnId;
          }),
        ],
      };
    });
  };
  render() {
    return (
      <Section>
        <MainTitle>Phonebook</MainTitle>
        <PhoneBookForm changeContacts={this.changeContacts} />
        <Title>Contacts</Title>
        <Filter handleChangeSearch={this.handleChangeSearch} />
        <PhoneBookList array={this.arrayWithSearch()} deleteItem={this.deleteItem} />
      </Section>
    );
  }
}
