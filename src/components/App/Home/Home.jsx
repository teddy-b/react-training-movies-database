import React, { Component } from 'react'

import PropTypes from 'prop-types'

import Header from './Header'
import ErrorBoundary from '../../shared/ErrorBoundary'
import MoviesList from '../../shared/MoviesList'

import './Home.scss'

class Home extends Component {
  componentDidMount() {
    const { match: { params: { query, searchBy } }, onSearch } = this.props
    if (query) {
      onSearch(query, searchBy)
    }
  }

  render() {
    const {
      count,
      fetching,
      movies,
      onSearch,
      onSearchMoviesByGenre,
      onSearchMoviesByTitle,
      onSelectMovie,
      onSortMoviesByRating,
      onSortMoviesByRelaseDate,
      searchBy,
      sortBy
    } = this.props

    return (
      <div className="home">
        <ErrorBoundary>
          <Header
            count={count}
            onSearch={onSearch}
            onSearchMoviesByGenre={onSearchMoviesByGenre}
            onSearchMoviesByTitle={onSearchMoviesByTitle}
            onSortMoviesByRating={onSortMoviesByRating}
            onSortMoviesByRelaseDate={onSortMoviesByRelaseDate}
            searchBy={searchBy}
            sortBy={sortBy}
          />
        </ErrorBoundary>
        <ErrorBoundary>
          <MoviesList
            count={count}
            fetching={fetching}
            movies={movies}
            onSelectMovie={onSelectMovie}
          />
        </ErrorBoundary>
      </div>
    )
  }
}

Home.propTypes = {
  count: PropTypes.number.isRequired,
  fetching: PropTypes.bool.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      query: PropTypes.string,
      searchBy: PropTypes.string
    })
  }),
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSearch: PropTypes.func.isRequired,
  onSearchMoviesByGenre: PropTypes.func.isRequired,
  onSearchMoviesByTitle: PropTypes.func.isRequired,
  onSelectMovie: PropTypes.func.isRequired,
  onSortMoviesByRating: PropTypes.func.isRequired,
  onSortMoviesByRelaseDate: PropTypes.func.isRequired,
  searchBy: PropTypes.string.isRequired,
  sortBy: PropTypes.string.isRequired
}

Home.defaultProps = {
  match: {
    params: {
      query: '',
      searchBy: ''
    }
  }
}

export default Home
