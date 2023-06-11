import React, { useState, useEffect } from 'react';
import { MainTitle } from './AppStyled';
import { Title } from './PhoneBookList/PhoneBookListStyled';
import { Section } from './AppStyled';
import { PhoneBookForm } from './PhoneBookForm';
import { Filter } from './Filter';
import { PhoneBookList } from './PhoneBookList/PhoneBookList';
import { saveToLocal, loadFromLocal } from '../Services/localStorage';

const INITIAL_STATE = {
  contacts: [
    { id: 'id-1', nameContact: 'Rosie Simpson', numberContact: '459-12-56' },
    { id: 'id-2', nameContact: 'Hermione Kline', numberContact: '443-89-12' },
    { id: 'id-3', nameContact: 'Eden Clements', numberContact: '645-17-79' },
    { id: 'id-4', nameContact: 'Annie Copeland', numberContact: '227-91-26' },
  ],
  keyLocalStorage: 'phoneBook',
};

export function App() {
  const [stateArray, setStateArray] = useState(
    () => loadFromLocal(INITIAL_STATE.keyLocalStorage) ?? [...INITIAL_STATE.contacts]
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    saveToLocal(INITIAL_STATE.keyLocalStorage, stateArray);
  }, [stateArray]);

  const changeContacts = newContact => {
    if (
      stateArray.some(el => {
        return el.nameContact.toLowerCase().includes(newContact.nameContact.toLowerCase());
      })
    ) {
      return alert(`${newContact.nameContact} is already in list!`);
    }
    setStateArray(prevArray => [...prevArray, newContact]);
  };

  const handleChangeSearch = ({ target }) => {
    setFilter(target.value.toLowerCase().trim());
  };

  const arrayWithSearch = () => {
    return stateArray.filter(el => el.nameContact.toLowerCase().includes(filter));
  };

  const deleteItem = btnId => {
    setStateArray(prevArray => [...prevArray].filter(el => el.id !== btnId));
  };

  return (
    <Section>
      <MainTitle>Phonebook</MainTitle>
      <PhoneBookForm changeContacts={changeContacts} />
      <Title>Contacts</Title>
      <Filter handleChangeSearch={handleChangeSearch} />
      <PhoneBookList array={arrayWithSearch()} deleteItem={deleteItem} />
    </Section>
  );
}
