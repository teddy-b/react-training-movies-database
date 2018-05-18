import React from 'react'
import PropTypes from 'prop-types'

import Details from './Details'
import Footer from './Footer'
import Home from './Home'
import ErrorBoundary from '../shared/ErrorBoundary'

const App = (props) => {
  const {
    fetching,
    movies,
    onSearch,
    onSearchMoviesByGenre,
    onSearchMoviesByTitle,
    onSelectMovie,
    onSortMoviesByRating,
    onSortMoviesByRelaseDate,
    searchBy,
    selectedMovie,
    sortBy
  } = props
  const singleMovie = movies.find(m => m.id === selectedMovie)

  return (
    <div className="container">
      <ErrorBoundary>
        {!selectedMovie && <Home
          fetching={fetching}
          movies={movies}
          onSearch={onSearch}
          searchBy={searchBy}
          onSelectMovie={onSelectMovie}
          sortBy={sortBy}
          onSortMoviesByRelaseDate={onSortMoviesByRelaseDate}
          onSortMoviesByRating={onSortMoviesByRating}
          onSearchMoviesByTitle={onSearchMoviesByTitle}
          onSearchMoviesByGenre={onSearchMoviesByGenre}
        />}
      </ErrorBoundary>
      <ErrorBoundary>
        {selectedMovie && <Details
          singleMovie={singleMovie}
          movies={movies}
          onSelectMovie={onSelectMovie}
        />}
      </ErrorBoundary>
      <ErrorBoundary>
        <Footer />
      </ErrorBoundary>
    </div>
  )
}

App.propTypes = {
  fetching: PropTypes.bool.isRequired,
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSearch: PropTypes.func.isRequired,
  onSearchMoviesByGenre: PropTypes.func.isRequired,
  onSearchMoviesByTitle: PropTypes.func.isRequired,
  onSelectMovie: PropTypes.func.isRequired,
  onSortMoviesByRating: PropTypes.func.isRequired,
  onSortMoviesByRelaseDate: PropTypes.func.isRequired,
  searchBy: PropTypes.string.isRequired,
  selectedMovie: PropTypes.number,
  sortBy: PropTypes.string.isRequired
}

App.defaultProps = { selectedMovie: null }

export default App
