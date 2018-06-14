import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

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

const mapStateToProps = state => ({
  count: state.movies.toJS().total,
  fetching: state.fetching,
  movies: state.movies.toJS().data,
  searchBy: state.searchBy,
  sortBy: state.sortBy
})

const mapDispatchToProps = dispatch => ({
  onSearch(query, searchBy) {
    dispatch(searchMovies(query, searchBy))
  },
  onSearchMoviesByGenre() {
    dispatch(searchMoviesByGenre())
  },
  onSearchMoviesByTitle() {
    dispatch(searchMoviesByTitle())
  },
  onSelectMovie(movieId) {
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
