import React, { Component } from 'react'

import Movie from './Movie'
import MoviesList from '../../shared/MoviesList'
import './Details.scss'

const Details = ({ movies, onSelectMovie, singleMovie }) => (
  <div className='details'>
    <Movie {...singleMovie} />
    <div className="filmsBy">Films by {singleMovie.genres[0]} genre</div>
    <MoviesList movies={movies} onSelectMovie={onSelectMovie} />
  </div>
)

export default Details
