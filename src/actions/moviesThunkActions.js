/* @flow */

import {
  fetchMoviesStart,
  fetchMoviesFail,
  fetchMoviesSuccess,
  fetchSingleMovieStart,
  fetchSingleMovieFail,
  fetchSingleMovieSuccess
} from './moviesActions'
import { API, ITEMS_TO_SHOW, SEARCH_BY, SORT_ORDER } from '../constants/global'

import type {
  FetchMoviesAction,
  FetchMoviesDispatch,
  FetchMoviesThunkAction,
  FetchSingleMovieAction,
  FetchSingleMovieDispatch,
  FetchSingleMovieThunkAction,
  MoviesData,
  SingleMovieData
} from '../types'

export const fetchMovies = (url: string): FetchMoviesThunkAction =>
  (dispatch: FetchMoviesDispatch): Promise<FetchMoviesAction> => {
    dispatch(fetchMoviesStart())

    return fetch(url)
      .then((response: Response): Promise<string> =>
        response.json())
      .then((movies: MoviesData): Promise<FetchMoviesAction> =>
        dispatch(fetchMoviesSuccess(movies)))
      .catch((error: Error): Promise<FetchMoviesAction> =>
        dispatch(fetchMoviesFail(error)))
  }

export const sortMovies = (sortBy: string): FetchMoviesThunkAction =>
  (dispatch: FetchMoviesDispatch): Promise<FetchMoviesAction> =>
    dispatch(fetchMovies(`${API}?sortBy=${sortBy}&sortOrder=${SORT_ORDER.desc}&limit=${ITEMS_TO_SHOW}`))

export const searchMovies = (query: string, searchBy: string): FetchMoviesThunkAction =>
  (dispatch: FetchMoviesDispatch): Promise<FetchMoviesAction> =>
    dispatch(fetchMovies(`${API}?search=${query}&searchBy=${searchBy}&limit=${ITEMS_TO_SHOW}`))

export const selectMovie = (movieId: number): FetchSingleMovieThunkAction =>
  (dispatch: FetchSingleMovieDispatch): Promise<FetchSingleMovieAction> => {
    dispatch(fetchSingleMovieStart())

    return fetch(`${API}/${movieId}`)
      .then((response: Response): Promise<string> =>
        response.json())
      .then((movie: SingleMovieData): Promise<FetchSingleMovieAction> =>
        dispatch(fetchSingleMovieSuccess(movie)))
      .then((movie: SingleMovieData): Promise<FetchSingleMovieAction> =>
        dispatch(searchMovies(movie.payload.genres[0], SEARCH_BY.genre)))
      .catch((error: Error): Promise<FetchSingleMovieAction> =>
        dispatch(fetchSingleMovieFail(error)))
  }
