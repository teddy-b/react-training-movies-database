import React from 'react'

import PropTypes from 'prop-types'

import Loading from '../Loading'
import MovieItem from './MovieItem'
import { ITEMS_TO_SHOW } from '../../../constants/global'

import './MoviesList.scss'

const MoviesList = ({ count, fetching, movies, onSelectMovie }) => (
  <div className="movies">
    {fetching ?
      <Loading /> :
      <div className="moviesList">
        {count === 0 && <div className="noMovies">No films found</div>}
        {movies.slice(0, ITEMS_TO_SHOW).map(movie => (
          <MovieItem
            key={movie.id}
            onSelectMovie={onSelectMovie}
            {...movie}
          />
        ))}
        {count > ITEMS_TO_SHOW && <button className="moreBtn">Show more</button>}
      </div>
    }
  </div>
)

MoviesList.propTypes = {
  count: PropTypes.number.isRequired,
  fetching: PropTypes.bool.isRequired,
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSelectMovie: PropTypes.func.isRequired
}

export default MoviesList
