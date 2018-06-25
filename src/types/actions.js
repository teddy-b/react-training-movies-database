/* @flow */

import type { MoviesData, SingleMovieData } from './'

export type FetchMoviesStartAction = {
  type: 'FETCH_MOVIES_START'
}

export type FetchMoviesSuccessAction = {
  type: 'FETCH_MOVIES_SUCCESS',
  payload: MoviesData
}

export type FetchMoviesFailAction = {
  type: 'FETCH_MOVIES_FAIL',
  payload: Error
}

export type FetchSingleMovieStartAction = {
  type: 'FETCH_SINGLE_MOVIE_START'
}

export type FetchSingleMovieSuccessAction = {
  type: 'FETCH_SINGLE_MOVIE_SUCCESS',
  payload: SingleMovieData
}

export type FetchSingleMovieFailAction = {
  type: 'FETCH_SINGLE_MOVIE_FAIL',
  payload: Error
}

export type SortMoviesByRelaseDateAction = {
  type: 'SORT_MOVIES_BY_RELEASE_DATE',
}

export type SortMoviesByRatingAction = {
  type: 'SORT_MOVIES_BY_RATING',
}

export type SearchMoviesByTitleAction = {
  type: 'SEARCH_MOVIES_BY_TITLE',
}

export type SearchMoviesByGenreAction = {
  type: 'SEARCH_MOVIES_BY_TITLE',
}

export type MoviesAction =
  | FetchMoviesStartAction
  | FetchMoviesSuccessAction
  | FetchMoviesFailAction
  | FetchSingleMovieStartAction
  | FetchSingleMovieSuccessAction
  | FetchSingleMovieFailAction
  | SortMoviesByRelaseDateAction
  | SortMoviesByRatingAction
  | SearchMoviesByTitleAction
  | SearchMoviesByGenreAction
