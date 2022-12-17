import React, { useState } from 'react';
import {
  SearchButton,
  SearchForm,
  SearchFormLabel,
  SearchFormInput,
  SearchbarStyled,
} from './Searchbar.styled';
import propTypes from 'prop-types';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const onFormSubmit = evt => {
    evt.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  return (
    <SearchbarStyled>
      <SearchForm onSubmit={onFormSubmit}>
        <SearchButton type="submit" disabled={query === ''}>
          <SearchOutlinedIcon></SearchOutlinedIcon>
          <SearchFormLabel>Search</SearchFormLabel>
        </SearchButton>

        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={evt => setQuery(evt.target.value.toLowerCase().trim())}
        />
      </SearchForm>
    </SearchbarStyled>
  );
};

Searchbar.propTypes = {
  onSubmit: propTypes.func.isRequired,
};
