/* @flow */

import * as React from 'react'

import MovieItem from './MovieItem'
import { StyledMoviesList, StyledNoMovies, StyledMoreBtn } from './StyledMoviesList'
import Loading from '../Loading'
import { ITEMS_TO_SHOW } from '../../../constants/global'

import type { MovieItemData, MoviesData } from '../../../types'

type Props = {
  count: number,
  fetching: boolean,
  movies: MoviesData,
  onSelectMovie: () => void
}

const MoviesList = ({ count, fetching, movies, onSelectMovie }: Props): React.Node => (fetching ?
  <Loading /> :
  <StyledMoviesList>
    {count === 0 && <StyledNoMovies>No films found</StyledNoMovies>}
    {movies.slice(0, ITEMS_TO_SHOW).map((movie: MovieItemData): React.Node => (
      <MovieItem
        key={movie.id}
        onSelectMovie={onSelectMovie}
        {...movie}
      />
    ))}
    {count > ITEMS_TO_SHOW && <StyledMoreBtn>Show more</StyledMoreBtn>}
  </StyledMoviesList>
)

export default MoviesList
