import { useState } from 'react';
import PropTypes from 'prop-types';
import { BookForm, NameInput, AddBtn, Paragraph, Div, TelInput } from './PhoneBookFormStyled';
import { nanoid } from 'nanoid';

export function PhoneBookForm({ changeContacts }) {
  const [nameContact, setNameContact] = useState('');
  const [numberContact, setNumberContact] = useState('');

  const changeBook = evt => {
    evt.preventDefault();
    const newContact = {
      nameContact,
      id: nanoid(),
      numberContact,
    };
    changeContacts(newContact);
    reset();
  };

  const reset = () => {
    setNameContact('');
    setNumberContact('');
  };

  const handleChangeName = ({ target }) => {
    setNameContact(target.value);
  };

  const handleChangeNumber = ({ target }) => {
    setNumberContact(target.value);
  };

  return (
    <BookForm onSubmit={evt => changeBook(evt)}>
      <Div>
        <Paragraph>Name</Paragraph>
        <NameInput
          type="text"
          name="name"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={nameContact}
          onChange={evt => handleChangeName(evt)}
        />
        <Paragraph>Number</Paragraph>
        <TelInput
          type="tel"
          name="number"
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={numberContact}
          onChange={evt => handleChangeNumber(evt)}
        ></TelInput>
        <AddBtn type="submit">Add contact</AddBtn>
      </Div>
    </BookForm>
  );
}

PhoneBookForm.propTypes = {
  changeContacts: PropTypes.func.isRequired,
};
