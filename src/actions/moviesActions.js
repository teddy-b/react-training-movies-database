/* @flow */

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

import type {
  FetchMoviesStartAction,
  FetchMoviesSuccessAction,
  FetchMoviesFailAction,
  FetchSingleMovieStartAction,
  FetchSingleMovieSuccessAction,
  FetchSingleMovieFailAction,
  SortMoviesByRelaseDateAction,
  SortMoviesByRatingAction,
  SearchMoviesByTitleAction,
  SearchMoviesByGenreAction,
  MoviesData,
  SingleMovieData
} from '../types'

export const fetchMoviesStart = (): FetchMoviesStartAction => ({
  type: FETCH_MOVIES_START
})

export const fetchMoviesSuccess = (movies: MoviesData): FetchMoviesSuccessAction => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: movies
})

export const fetchMoviesFail = (error: Error): FetchMoviesFailAction => ({
  type: FETCH_MOVIES_FAIL,
  payload: error
})

export const fetchSingleMovieStart = (): FetchSingleMovieStartAction => ({
  type: FETCH_SINGLE_MOVIE_START
})

export const fetchSingleMovieSuccess = (movie: SingleMovieData): FetchSingleMovieSuccessAction => ({
  type: FETCH_SINGLE_MOVIE_SUCCESS,
  payload: movie
})

export const fetchSingleMovieFail = (error: Error): FetchSingleMovieFailAction => ({
  type: FETCH_SINGLE_MOVIE_FAIL,
  payload: error
})

export const sortMoviesByRelaseDate = (): SortMoviesByRelaseDateAction => ({
  type: SORT_MOVIES_BY_RELEASE_DATE
})

export const sortMoviesByRating = (): SortMoviesByRatingAction => ({
  type: SORT_MOVIES_BY_RATING
})

export const searchMoviesByTitle = (): SearchMoviesByTitleAction => ({
  type: SEARCH_MOVIES_BY_TITLE
})

export const searchMoviesByGenre = (): SearchMoviesByGenreAction => ({
  type: SEARCH_MOVIES_BY_GENRE
})
