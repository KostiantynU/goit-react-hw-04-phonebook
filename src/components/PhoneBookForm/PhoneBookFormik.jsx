import React from 'react';
import PropTypes from 'prop-types';
import { BookForm, NameInput, AddBtn, Label, Div, TelInput, ErrorDiv } from './PhoneBookFormStyled';
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
      const newContact = {
        nameContact: values.nameContact,
        id: nanoid(),
        numberContact: values.numberContact,
      };
      changeContacts(newContact);
      values.nameContact = '';
      values.numberContact = '';
    },
  });

  return (
    <BookForm onSubmit={formik.handleSubmit}>
      <Div>
        <Label htmlFor="nameContact">Name</Label>
        <NameInput
          id="nameContact"
          name="nameContact"
          type="text"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.nameContact}
        />
        {formik.touched.nameContact && formik.errors.nameContact ? (
          <ErrorDiv>{formik.errors.nameContact}</ErrorDiv>
        ) : null}

        <Label htmlFor="numberContact">Number</Label>
        <TelInput
          id="numberContact"
          name="numberContact"
          type="tel"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.numberContact}
        />
        {formik.touched.numberContact && formik.errors.numberContact ? (
          <ErrorDiv>{formik.errors.numberContact}</ErrorDiv>
        ) : null}

        <AddBtn type="submit">Submit</AddBtn>
      </Div>
    </BookForm>
  );
}

PhoneBookForm.propTypes = {
  changeContacts: PropTypes.func.isRequired,
};
