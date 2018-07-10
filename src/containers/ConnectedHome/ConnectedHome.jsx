/* @flow */

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import type { Dispatch } from 'redux'

import {
  searchMovies,
  searchMoviesByGenre,
  searchMoviesByTitle,
  selectMovie,
  sortMovies,
  sortMoviesByRating,
  sortMoviesByRelaseDate
} from '../../actions'
import Home from '../../components/App/Home'
import { SORT_BY } from '../../constants/global'

import type { MoviesAction, MoviesData, State } from '../../types'

type StateToProps = {
  count: number,
  fetching: boolean,
  movies: MoviesData,
  searchBy: string,
  sortBy: string
}

type DispatchToProps = {
  onSearch: (query?: string, searchBy?: string) => void,
  onSearchMoviesByGenre: () => void,
  onSearchMoviesByTitle: () => void,
  onSelectMovie: (id: number) => void,
  onSortMoviesByRating: () => void,
  onSortMoviesByRelaseDate: () => void,
}

const mapStateToProps = (state: State): StateToProps => ({
  count: state.movies.toJS().total,
  fetching: state.fetching,
  movies: state.movies.toJS().data,
  searchBy: state.searchBy,
  sortBy: state.sortBy
})

const mapDispatchToProps = (dispatch: Dispatch<MoviesAction>): DispatchToProps => ({
  onSearch(query?: string, searchBy?: string) {
    dispatch(searchMovies(query, searchBy))
  },
  onSearchMoviesByGenre() {
    dispatch(searchMoviesByGenre())
  },
  onSearchMoviesByTitle() {
    dispatch(searchMoviesByTitle())
  },
  onSelectMovie(movieId: number) {
    dispatch(selectMovie(movieId))
  },
  onSortMoviesByRating() {
    dispatch(sortMoviesByRating())
    dispatch(sortMovies(SORT_BY.rating))
  },
  onSortMoviesByRelaseDate() {
    dispatch(sortMoviesByRelaseDate())
    dispatch(sortMovies(SORT_BY.releaseDate))
  }
})

const ConnectedHome = withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))

export default ConnectedHome
