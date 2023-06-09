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
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  // filter: '',
  // nameLocalStorage: 'phoneBook',
};

export function App() {
  //   state = { ...INITIAL_STATE };
  const [stateArray, setStateArray] = useState([...INITIAL_STATE.contacts]);
  const [filter, setFilter] = useState('');
  const [nameLocalStorage, setNameLocalStorage] = useState('phonebook');

  useEffect(() => {
    const phoneBookArray = loadFromLocal(nameLocalStorage);
    console.log('phoneBookArray', phoneBookArray);
    if (phoneBookArray) {
      setStateArray([...phoneBookArray]);
      console.log('if phonebookArray true');
    }
  }, []);

  useEffect(() => {
    setStateArray(prevState => {
      console.log('prevState', prevState);
      if (prevState) {
        if (prevState !== stateArray.length) {
          console.log('previous', prevState);
          console.log('different');
          console.log('current', stateArray);
          saveToLocal(nameLocalStorage, stateArray);
        }
      }
    });
  }, [stateArray]);

  const changeContacts = newContact => {
    if (
      stateArray.some(el => {
        return el.name.toLowerCase().includes(newContact.name.toLowerCase());
      })
    ) {
      return alert(`${newContact.name} is already in list!`);
    }
    setStateArray([...stateArray, newContact]);
  };

  const handleChangeSearch = ({ target }) => {
    setFilter(target.value.toLowerCase().trim());
    setStateArray(stateArray.filter(el => el.name.toLowerCase().includes(filter)));
  };
  // console.log(stateArray);
  // const arrayWithSearch = () => {
  //   // const searchQuery = filter;
  //   console.log(stateArray);
  // };

  const deleteItem = btnId => {
    setStateArray([...stateArray].filter(el => el.id !== btnId));
    // this.setState(prevState => {
    //   return {
    //     contacts: [
    //       ...prevState.contacts.filter(el => {
    //         return el.id !== btnId;
    //       }),
    //     ],
    //   };
    // });
  };

  return (
    <Section>
      <MainTitle>Phonebook</MainTitle>
      <PhoneBookForm changeContacts={changeContacts} />
      <Title>Contacts</Title>
      <Filter handleChangeSearch={handleChangeSearch} />
      <PhoneBookList array={stateArray} deleteItem={deleteItem} />
    </Section>
  );
}
