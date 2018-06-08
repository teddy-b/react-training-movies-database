/* @flow */

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../../../shared/Logo'
import { SEARCH_BY, GENRES } from '../../../../../constants/global'

import './SearchBar.scss'

type Props = {
  onSearch: (searchText: string, searchBy: string) => void,
  onSearchMoviesByGenre: () => void,
  onSearchMoviesByTitle: () => void,
  searchBy: string,
}

type State = {
  searchText: string,
}

class SearchBar extends Component<Props, State> {
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
      <div className="searchBar">
        <Link
          // style={{ textDecoration: 'none' }}
          to="/"
        >
          <Logo />
        </Link>
        <p className="searchBarTitle">Find your movie</p>
        <input
          placeholder="Start typing movie title or genre"
          className="searchInput"
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
        <div className="searchFooter">
          <div className="searchBy">Search by </div>
          <div className="searchByBtns">
            <button
              className={`searchByTitleBtn ${searchBy === SEARCH_BY.title ? 'selected' : ''}`}
              onClick={onSearchMoviesByTitle}
            >
              Title
            </button>
            <button
              className={`searchByGenreBtn ${searchBy === SEARCH_BY.genre ? 'selected' : ''}`}
              onClick={onSearchMoviesByGenre}
            >
              Genre
            </button>
          </div>
          <Link to={`/search/${searchBy}/${this.state.searchText}`}>
            <button className="searchBtn" onClick={() => onSearch(this.state.searchText, searchBy)}>
              Search
            </button>
          </Link>
        </div>
      </div>
    )
  }
}

export default SearchBar
