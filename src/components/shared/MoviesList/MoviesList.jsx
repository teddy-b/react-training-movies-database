import React from 'react'

import MovieItem from './MovieItem'
import './MoviesList.scss'

const MoviesList = ({ movies, onSelectMovie }) => (
  <div className="moviesList">
    {movies.length === 0 && <div className="noMovies">No films found</div>}
    {movies.map((movie) => <MovieItem key={movie.id} {...movie} onSelectMovie={onSelectMovie} />)}
  </div>
)

export default MoviesList
