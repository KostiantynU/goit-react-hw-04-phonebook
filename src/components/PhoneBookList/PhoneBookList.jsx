import React from 'react';
import PropTypes from 'prop-types';
import { DivContacts, ListContacts } from './PhoneBookListStyled';
import { BookItem } from 'components/PhoneBookListItem';

export function PhoneBookList({ array, deleteItem }) {
  return (
    <DivContacts>
      <ListContacts>
        {array.map(({ nameContact, id, numberContact }) => {
          return (
            <BookItem
              key={id}
              nameContact={nameContact}
              numberContact={numberContact}
              btnId={id}
              deleteItem={deleteItem}
            />
          );
        })}
      </ListContacts>
    </DivContacts>
  );
}
PhoneBookList.propTypes = {
  array: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  deleteItem: PropTypes.func.isRequired,
};
