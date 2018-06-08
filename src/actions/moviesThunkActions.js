/* @flow */

import { API, ITEMS_TO_SHOW, SEARCH_BY, SORT_ORDER } from '../constants/global'
import { ThunkAction } from '../types'
import {
  fetchMoviesStart,
  fetchMoviesFail,
  fetchMoviesSuccess,
  fetchSingleMovieStart,
  fetchSingleMovieFail,
  fetchSingleMovieSuccess
} from './moviesActions'

export const fetchMovies = (url: string): ThunkAction => (dispatch) => {
  dispatch(fetchMoviesStart())

  return fetch(url)
    .then(response => response.json())
    .then(movies => dispatch(fetchMoviesSuccess(movies)))
    .catch(error => dispatch(fetchMoviesFail(error)))
}

export const sortMovies = (sortBy: string): ThunkAction => dispatch =>
  dispatch(fetchMovies(`${API}?sortBy=${sortBy}&sortOrder=${SORT_ORDER.desc}&limit=${ITEMS_TO_SHOW}`))

export const searchMovies = (query: string, searchBy: string): ThunkAction => dispatch =>
  dispatch(fetchMovies(`${API}?search=${query}&searchBy=${searchBy}&limit=${ITEMS_TO_SHOW}`))

export const selectMovie = (movieId: number): ThunkAction => (dispatch) => {
  dispatch(fetchSingleMovieStart())

  return fetch(`${API}/${movieId}`)
    .then(response => response.json())
    .then(movie => dispatch(fetchSingleMovieSuccess(movie)))
    .then(movie => dispatch(searchMovies(movie.payload.genres[0], SEARCH_BY.genre)))
    .catch(error => dispatch(fetchSingleMovieFail(error)))
}
