/* @flow */

import React, { Component } from 'react'

import Header from './Header'
import StyledHome from './StyledHome'
import ErrorBoundary from '../../shared/ErrorBoundary'
import MoviesList from '../../shared/MoviesList'
import { Movies } from '../../../types'

type Props = {
  count: number,
  fetching: boolean,
  match: { params: {
    query?: string,
    searchBy?: string
  }},
  movies: Movies,
  onSearch: (query?: string, searchBy?: string) => void,
  onSearchMoviesByGenre: () => void,
  onSearchMoviesByTitle: () => void,
  onSelectMovie: () => void,
  onSortMoviesByRating: () => void,
  onSortMoviesByRelaseDate: () => void,
  searchBy: string,
  sortBy: string
}

class Home extends Component<Props> {
  componentDidMount() {
    const { match: { params: { query, searchBy } }, onSearch } = this.props
    if (query) {
      onSearch(query, searchBy)
    }
  }

  render() {
    const {
      count,
      fetching,
      movies,
      onSearch,
      onSearchMoviesByGenre,
      onSearchMoviesByTitle,
      onSelectMovie,
      onSortMoviesByRating,
      onSortMoviesByRelaseDate,
      searchBy,
      sortBy
    } = this.props

    return (
      <StyledHome>
        <ErrorBoundary>
          <Header
            count={count}
            onSearch={onSearch}
            onSearchMoviesByGenre={onSearchMoviesByGenre}
            onSearchMoviesByTitle={onSearchMoviesByTitle}
            onSortMoviesByRating={onSortMoviesByRating}
            onSortMoviesByRelaseDate={onSortMoviesByRelaseDate}
            searchBy={searchBy}
            sortBy={sortBy}
          />
        </ErrorBoundary>
        <ErrorBoundary>
          <MoviesList
            count={count}
            fetching={fetching}
            movies={movies}
            onSelectMovie={onSelectMovie}
          />
        </ErrorBoundary>
      </StyledHome>
    )
  }
}

export default Home
