import React from 'react'
import PropTypes from 'prop-types'

import Movie from './Movie'
import MoviesList from '../../shared/MoviesList'
import './Details.scss'

const Details = ({ movies, onSelectMovie, singleMovie }) => (
  <div className="details">
    <Movie {...singleMovie} />
    <div className="filmsBy">Films by {singleMovie.genres[0]} genre</div>
    <MoviesList movies={movies} onSelectMovie={onSelectMovie} />
  </div>
)

Details.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSelectMovie: PropTypes.func.isRequired,
  singleMovie: PropTypes.shape({
    overview: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    release_date: PropTypes.string.isRequired,
    runtime: PropTypes.number.isRequired,
    tagline: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired
  }).isRequired
}

export default Details
