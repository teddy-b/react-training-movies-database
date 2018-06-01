import {
  FETCH_MOVIES_START,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAIL,
  FETCH_SINGLE_MOVIE_START,
  FETCH_SINGLE_MOVIE_SUCCESS,
  FETCH_SINGLE_MOVIE_FAIL,
  SORT_MOVIES_BY_RELEASE_DATE,
  SORT_MOVIES_BY_RATING,
  SEARCH_MOVIES_BY_TITLE,
  SEARCH_MOVIES_BY_GENRE
} from '../constants/actionTypes'
import { API, ITEMS_TO_SHOW, SEARCH_BY, SORT_ORDER } from '../constants/global'

export const fetchMoviesStart = () => ({ type: FETCH_MOVIES_START })

export const fetchMoviesSuccess = movies => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: movies
})

export const fetchMoviesFail = error => ({
  type: FETCH_MOVIES_FAIL,
  payload: error
})

export const fetchSingleMovieStart = () => ({ type: FETCH_SINGLE_MOVIE_START })

export const fetchSingleMovieSuccess = movie => ({
  type: FETCH_SINGLE_MOVIE_SUCCESS,
  payload: movie
})

export const fetchSingleMovieFail = error => ({
  type: FETCH_SINGLE_MOVIE_FAIL,
  payload: error
})

export const sortMoviesByRelaseDate = () => ({ type: SORT_MOVIES_BY_RELEASE_DATE })

export const sortMoviesByRating = () => ({ type: SORT_MOVIES_BY_RATING })

export const searchMoviesByTitle = () => ({ type: SEARCH_MOVIES_BY_TITLE })

export const searchMoviesByGenre = () => ({ type: SEARCH_MOVIES_BY_GENRE })

export const fetchMovies = url => (dispatch) => {
  dispatch(fetchMoviesStart())

  return fetch(url)
    .then(response => response.json())
    .then(movies => dispatch(fetchMoviesSuccess(movies)))
    .catch(error => dispatch(fetchMoviesFail(error)))
}

export const sortMovies = sortBy => dispatch =>
  dispatch(fetchMovies(`${API}?sortBy=${sortBy}&sortOrder=${SORT_ORDER.desc}&limit=${ITEMS_TO_SHOW}`))

export const searchMovies = (query, searchBy) => dispatch =>
  dispatch(fetchMovies(`${API}?search=${query}&searchBy=${searchBy}&limit=${ITEMS_TO_SHOW}`))

export const selectMovie = movieId => (dispatch) => {
  dispatch(fetchSingleMovieStart())

  return fetch(`${API}/${movieId}`)
    .then(response => response.json())
    .then(movie => dispatch(fetchSingleMovieSuccess(movie)))
    .then(movie => dispatch(searchMovies(movie.payload.genres[0], SEARCH_BY.genre)))
    .catch(error => dispatch(fetchSingleMovieFail(error)))
}
