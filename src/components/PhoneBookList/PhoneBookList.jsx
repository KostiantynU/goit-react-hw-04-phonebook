import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DivContacts, ListContacts } from './PhoneBookListStyled';
import { BookItem } from 'components/PhoneBookListItem';

export class PhoneBookList extends Component {
  render() {
    const { array, deleteItem } = this.props;
    return (
      <DivContacts>
        <ListContacts>
          {array.map(({ name, id, number }) => {
            return (
              <BookItem
                key={id}
                contactName={name}
                number={number}
                btnId={id}
                deleteItem={deleteItem}
              />
            );
          })}
        </ListContacts>
      </DivContacts>
    );
  }
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
