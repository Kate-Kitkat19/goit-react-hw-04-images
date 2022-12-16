import React, { Component } from 'react';
import {
  SearchButton,
  SearchForm,
  SearchFormLabel,
  SearchFormInput,
  SearchbarStyled,
} from './Searchbar.styled';
import propTypes from 'prop-types';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  setQuery = evt => {
    const value = evt.target.value.toLowerCase().trim();
    this.setState({ query: value });
  };

  onFormSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <SearchbarStyled>
        <SearchForm onSubmit={this.onFormSubmit}>
          <SearchButton type="submit" disabled={this.state.query === ''}>
            <SearchOutlinedIcon></SearchOutlinedIcon>
            <SearchFormLabel>Search</SearchFormLabel>
          </SearchButton>

          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.setQuery}
          />
        </SearchForm>
      </SearchbarStyled>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: propTypes.func.isRequired,
};
