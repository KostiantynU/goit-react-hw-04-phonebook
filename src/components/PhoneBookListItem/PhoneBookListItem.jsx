import React from 'react';
import PropTypes from 'prop-types';
import { PhoneBookListItem, NameSpan, TelSpan } from './PhoneBookListItemStyled';
import { DeleteBtn } from 'components/PhoneBookForm/PhoneBookFormStyled';

export function BookItem({ nameContact, numberContact, btnId, deleteItem }) {
  return (
    <PhoneBookListItem>
      <NameSpan>{nameContact} :</NameSpan> <TelSpan>{numberContact}</TelSpan>
      <DeleteBtn type="button" onClick={() => deleteItem(btnId)}>
        Delete
      </DeleteBtn>
    </PhoneBookListItem>
  );
}
BookItem.propTypes = {
  nameContact: PropTypes.string.isRequired,
  numberContact: PropTypes.string.isRequired,
  btnId: PropTypes.string.isRequired,
  deleteItem: PropTypes.func.isRequired,
};
