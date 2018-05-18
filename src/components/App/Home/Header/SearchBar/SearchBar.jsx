import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './SearchBar.scss'
import Logo from '../../../../shared/Logo'
import { SEARCH_BY, GENRES } from '../../../../../constants/global'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
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
        <Logo />
        <p className="searchBarTitle">Find your movie</p>
        <input
          placeholder="Start typing movie title or genre"
          className="searchInput"
          type="text"
          ref={this.inputRef}
          onKeyPress={event => event.key === 'Enter' && onSearch(event.target.value, searchBy)}
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
              className={`searchByTitleBtn ${searchBy === SEARCH_BY.title && 'selected'}`}
              onClick={onSearchMoviesByTitle}
            >
              Title
            </button>
            <button
              className={`searchByGenreBtn ${searchBy === SEARCH_BY.genre && 'selected'}`}
              onClick={onSearchMoviesByGenre}
            >
              Genre
            </button>
          </div>
          <button
            className="searchBtn"
            onClick={() => onSearch(this.inputRef.current.value, searchBy)}
          >
            Search
          </button>
        </div>
      </div>
    )
  }
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onSearchMoviesByGenre: PropTypes.func.isRequired,
  onSearchMoviesByTitle: PropTypes.func.isRequired,
  searchBy: PropTypes.string.isRequired
}

export default SearchBar
