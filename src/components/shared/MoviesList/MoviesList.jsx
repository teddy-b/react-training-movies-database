/* @flow */

import React from 'react'

import Loading from '../Loading'
import MovieItem from './MovieItem'
import { ITEMS_TO_SHOW } from '../../../constants/global'
import { Movies } from '../../../types'

import './MoviesList.scss'

type Props = {
  count: number,
  fetching: boolean,
  movies: Movies,
  onSelectMovie: () => void
}

const MoviesList = (props: Props) => {
  const { count, fetching, movies, onSelectMovie } = props
  return (
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
}

export default MoviesList
