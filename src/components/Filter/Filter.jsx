import React, { Component } from 'react';
import { SearchInput, Paragraph } from '../PhoneBookForm/PhoneBookFormStyled';
import PropTypes from 'prop-types';
export class Filter extends Component {
  render() {
    const { handleChangeSearch } = this.props;
    return (
      <>
        <Paragraph>Find contacts by name</Paragraph>
        <SearchInput onChange={handleChangeSearch} />
      </>
    );
  }
}
Filter.propTypes = {
  handleChangeSearch: PropTypes.func.isRequired,
};
