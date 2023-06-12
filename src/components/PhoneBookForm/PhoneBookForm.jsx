import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { BookForm, NameInput, AddBtn, Label, Div, TelInput } from './PhoneBookFormStyled';
import { nanoid } from 'nanoid';
import { useFormik } from 'formik';

export function PhoneBookForm({ changeContacts }) {
  const validate = values => {
    const errors = {};
    if (!values.nameContact) {
      errors.nameContact = 'Required';
    } else if (
      !/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/i.test(values.nameContact)
    ) {
      errors.nameContact = 'Invalid name';
    }

    if (!values.numberContact) {
      errors.numberContact = 'Required';
    } else if (
      !/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/i.test(
        values.numberContact
      )
    ) {
      errors.numberContact = 'Invalid number';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: { nameContact: '', numberContact: '' },
    validate,
    onSubmit: values => {
      // evt.preventDefault();
      const newContact = {
        nameContact,
        id: nanoid(),
        numberContact,
      };
      changeContacts(newContact);
      reset();
    },
  });

  const [nameContact, setNameContact] = useState(formik.values.nameContact);
  const [numberContact, setNumberContact] = useState(formik.values.numberContact);
  const reset = () => {
    setNameContact('');
    setNumberContact('');
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Div>
        <Label htmlFor="nameContact">Name</Label>
        <NameInput
          id="nameContact"
          name="nameContact"
          type="text"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={formik.handleChange}
          value={formik.values.nameContact}
        />
        {formik.errors.nameContact ? <div>{formik.errors.nameContact}</div> : null}

        <Label htmlFor="numberContact">Number</Label>
        <TelInput
          id="numberContact"
          name="numberContact"
          type="tel"
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={formik.handleChange}
          value={formik.values.numberContact}
        />
        {formik.errors.numberContact ? <div>{formik.errors.numberContact}</div> : null}

        <AddBtn type="submit">Submit</AddBtn>
      </Div>
    </form>
  );
}
// export function PhoneBookForm({ changeContacts }) {
//   const [nameContact, setNameContact] = useState('');
//   const [numberContact, setNumberContact] = useState('');

//   const changeBook = evt => {
//     evt.preventDefault();
//     const newContact = {
//       nameContact,
//       id: nanoid(),
//       numberContact,
//     };
//     changeContacts(newContact);
//     reset();
//   };

// const reset = () => {
//   setNameContact('');
//   setNumberContact('');
// };

//   const handleChangeName = ({ target }) => {
//     setNameContact(target.value);
//   };

//   const handleChangeNumber = ({ target }) => {
//     setNumberContact(target.value);
//   };

//   return (
//     <BookForm onSubmit={evt => changeBook(evt)}>
//       <Div>
//         <Paragraph>Name</Paragraph>
//         <NameInput
//           type="text"
//           name="name"
// // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
// title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
// required
//           value={nameContact}
//           onChange={evt => handleChangeName(evt)}
//         />
//         <Paragraph>Number</Paragraph>
//         <TelInput
//           type="tel"
//           name="number"
// // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
// title =
//   'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +';
//           required
//           value={numberContact}
//           onChange={evt => handleChangeNumber(evt)}
//         ></TelInput>
//         <AddBtn type="submit">Add contact</AddBtn>
//       </Div>
//     </BookForm>
//   );
// }

PhoneBookForm.propTypes = {
  changeContacts: PropTypes.func.isRequired,
};
