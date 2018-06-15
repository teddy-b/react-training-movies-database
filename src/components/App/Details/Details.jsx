/* @flow */

import * as React from 'react'

import Movie from './Movie'
import { StyledDetails, StyledFilmsBy } from './StyledDetails'
import ErrorBoundary from '../../shared/ErrorBoundary'
import MoviesList from '../../shared/MoviesList'
import { Movies, SingleMovie } from '../../../types'

type Props = {
  count: number,
  fetching: boolean,
  match: { params: { id: string } },
  movies: Movies,
  onSelectMovie: (id: number) => void,
  selectedMovie: SingleMovie
}

class Details extends React.Component<Props> {
  componentDidMount() {
    const { match: { params: { id } }, onSelectMovie } = this.props
    onSelectMovie(parseInt(id, 10))
  }

  render() {
    const { count, fetching, movies, onSelectMovie, selectedMovie } = this.props

    return (
      <StyledDetails>
        <ErrorBoundary>
          <Movie {...selectedMovie} />
        </ErrorBoundary>
        <ErrorBoundary>
          {selectedMovie.genres.length &&
            <StyledFilmsBy>Films by {selectedMovie.genres[0]} genre</StyledFilmsBy>
          }
          <MoviesList
            count={count}
            fetching={fetching}
            movies={movies}
            onSelectMovie={onSelectMovie}
          />
        </ErrorBoundary>
      </StyledDetails>
    )
  }
}

export default Details
