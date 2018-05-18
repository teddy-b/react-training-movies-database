import {
  FETCH_MOVIES_START,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAIL,
  SORT_MOVIES_BY_RELEASE_DATE,
  SORT_MOVIES_BY_RATING,
  SEARCH_MOVIES_BY_TITLE,
  SEARCH_MOVIES_BY_GENRE,
  SELECT_MOVIE
} from '../constants/actionTypes'
import { API } from '../constants/global'

export const fetchMoviesStart = () => ({ type: FETCH_MOVIES_START })

export const fetchMoviesSuccess = movies => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: movies
})

export const fetchMoviesFail = error => ({
  type: FETCH_MOVIES_FAIL,
  payload: error
})

export const sortMoviesByRelaseDate = () => ({ type: SORT_MOVIES_BY_RELEASE_DATE })

export const sortMoviesByRating = () => ({ type: SORT_MOVIES_BY_RATING })

export const searchMoviesByTitle = () => ({ type: SEARCH_MOVIES_BY_TITLE })

export const searchMoviesByGenre = () => ({ type: SEARCH_MOVIES_BY_GENRE })

export const selectMovie = movieId => ({
  type: SELECT_MOVIE,
  payload: movieId
})

export const fetchMovies = url => (dispatch) => {
  dispatch(fetchMoviesStart())

  return fetch(url)
    .then(response => response.json())
    .then(movies => dispatch(fetchMoviesSuccess(movies.data)))
    .catch(error => dispatch(fetchMoviesFail(error)))
}

export const sortMovies = sortBy => dispatch =>
  dispatch(fetchMovies(`${API}?sortBy=${sortBy}&sortOrder=desc`))

export const searchMovies = ({ text, searchBy }) => dispatch =>
  dispatch(fetchMovies(`${API}?search=${text}&searchBy=${searchBy}`))
