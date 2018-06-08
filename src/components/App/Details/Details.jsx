/* @flow */

import * as React from 'react'

import Movie from './Movie'
import ErrorBoundary from '../../shared/ErrorBoundary'
import MoviesList from '../../shared/MoviesList'
import { Movies, SingleMovie } from '../../../types'

import './Details.scss'

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

export default Details
