/* @flow */

import * as React from 'react'
import { Link } from 'react-router-dom'

import {
  StyledSearchBar,
  StyledSearchBarTitle,
  StyledSearchInput,
  StyledSearchFooter,
  StyledSearchBy,
  StyledSearchByBtns,
  StyledSearchByBtn,
  StyledSearchBtn
} from './StyledSearchBar'
import Logo from '../../../../shared/Logo'
import StyledLink from '../../../../shared/styled/StyledLink'
import { SEARCH_BY, GENRES } from '../../../../../constants/global'

type Props = {
  onSearch: (searchText: string, searchBy: string) => void,
  onSearchMoviesByGenre: () => void,
  onSearchMoviesByTitle: () => void,
  searchBy: string,
}

type State = {
  searchText: string,
}

class SearchBar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      searchText: ''
    }
  }

  render() {
    const {
      onSearch,
      onSearchMoviesByGenre,
      onSearchMoviesByTitle,
      searchBy
    } = this.props

    return (
      <StyledSearchBar>
        <StyledLink to="/">
          <Logo />
        </StyledLink>
        <StyledSearchBarTitle>Find your movie</StyledSearchBarTitle>
        <StyledSearchInput
          placeholder="Start typing movie title or genre"
          type="text"
          onChange={event => this.setState({
            searchText: event.target.value
          })}
          list="genres"
        />
        {searchBy === SEARCH_BY.genre &&
          <datalist id="genres">
            {GENRES.map(genre => <option key={genre} value={genre} />)}
          </datalist>
        }
        <StyledSearchFooter>
          <StyledSearchBy>Search by </StyledSearchBy>
          <StyledSearchByBtns>
            <StyledSearchByBtn
              selected={searchBy === SEARCH_BY.title}
              onClick={onSearchMoviesByTitle}
            >
              Title
            </StyledSearchByBtn>
            <StyledSearchByBtn
              selected={searchBy === SEARCH_BY.genre}
              onClick={onSearchMoviesByGenre}
            >
              Genre
            </StyledSearchByBtn>
          </StyledSearchByBtns>
          <Link to={`/search/${searchBy}/${this.state.searchText}`}>
            <StyledSearchBtn
              onClick={() => onSearch(this.state.searchText, searchBy)}
            >
              Search
            </StyledSearchBtn>
          </Link>
        </StyledSearchFooter>
      </StyledSearchBar>
    )
  }
}

export default SearchBar
