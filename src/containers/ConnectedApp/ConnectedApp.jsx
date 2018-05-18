import { connect } from 'react-redux'

import {
  fetchMovies,
  searchMovies,
  searchMoviesByGenre,
  searchMoviesByTitle,
  selectMovie,
  sortMovies,
  sortMoviesByRating,
  sortMoviesByRelaseDate
} from '../../actions'
import App from '../../components/App'
import { SORT_BY } from '../../constants/global'

const mapStateToProps = state => ({
  fetching: state.fetching,
  movies: state.movies,
  searchBy: state.searchBy,
  selectedMovie: state.selectedMovie,
  sortBy: state.sortBy
})

const mapDispatchToProps = dispatch => ({
  onFetchMovies() {
    dispatch(fetchMovies())
  },
  onSearch(text, searchBy) {
    dispatch(searchMovies({ text, searchBy }))
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

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)

export default ConnectedApp
