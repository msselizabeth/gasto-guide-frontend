import React from 'react';
import css from './SearchInput.module.css';

const SearchInput = ({ searchValue, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Введіть назву країни"
      value={searchValue}
          onChange={onChange}
          className={css.searchInput}
    />
  );
};

export default SearchInput;
