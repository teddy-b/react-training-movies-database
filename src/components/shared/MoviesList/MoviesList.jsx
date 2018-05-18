import React from 'react'
import PropTypes from 'prop-types'

import MovieItem from './MovieItem'
import './MoviesList.scss'

const MoviesList = ({ movies, onSelectMovie }) => (
  <div className="moviesList">
    {movies.length === 0 && <div className="noMovies">No films found</div>}
    {movies.map(movie => <MovieItem key={movie.id} {...movie} onSelectMovie={onSelectMovie} />)}
  </div>
)

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSelectMovie: PropTypes.func.isRequired
}

export default MoviesList
