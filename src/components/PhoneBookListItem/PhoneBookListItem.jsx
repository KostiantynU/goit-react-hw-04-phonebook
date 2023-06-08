import React from 'react';
import PropTypes from 'prop-types';
import { PhoneBookListItem, NameSpan, TelSpan } from './PhoneBookListItemStyled';
import { DeleteBtn } from 'components/PhoneBookForm/PhoneBookFormStyled';

export function BookItem({ contactName, number, btnId, deleteItem }) {
  return (
    <PhoneBookListItem>
      <NameSpan>{contactName} :</NameSpan> <TelSpan>{number}</TelSpan>
      <DeleteBtn type="button" onClick={() => deleteItem(btnId)}>
        Delete
      </DeleteBtn>
    </PhoneBookListItem>
  );
}
BookItem.propTypes = {
  contactName: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  btnId: PropTypes.string.isRequired,
  deleteItem: PropTypes.func.isRequired,
};
