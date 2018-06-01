import React, { Component } from 'react'

import PropTypes from 'prop-types'

import Movie from './Movie'
import ErrorBoundary from '../../shared/ErrorBoundary'
import MoviesList from '../../shared/MoviesList'

import './Details.scss'

class Details extends Component {
  componentDidMount() {
    const { match: { params: { id } }, onSelectMovie } = this.props
    onSelectMovie(id)
  }

  render() {
    const { count, fetching, movies, onSelectMovie, selectedMovie } = this.props

    return (
      <div className="details">
        <ErrorBoundary>
          <Movie {...selectedMovie} />
        </ErrorBoundary>
        <ErrorBoundary>
          {selectedMovie.genres.length && <div className="filmsBy">Films by {selectedMovie.genres[0]} genre</div>}
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

Details.propTypes = {
  count: PropTypes.number.isRequired,
  fetching: PropTypes.bool.isRequired,
  match: PropTypes.shape({ params: PropTypes.shape({ id: PropTypes.string }) }).isRequired,
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSelectMovie: PropTypes.func.isRequired,
  selectedMovie: PropTypes.shape({
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    overview: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    release_date: PropTypes.string.isRequired,
    runtime: PropTypes.number,
    tagline: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired
  }).isRequired
}

export default Details
