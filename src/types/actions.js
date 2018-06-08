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
import { Movies } from './Movies'
import { SingleMovie } from './SingleMovie'

export type FetchMoviesStartAction = {
  type: FETCH_MOVIES_START
}

export type FetchMoviesSuccessAction = {
  type: FETCH_MOVIES_SUCCESS,
  payload: Movies
}

export type FetchMoviesFailAction = {
  type: FETCH_MOVIES_FAIL,
  payload: Error
}

export type FetchSingleMovieStartAction = {
  type: FETCH_SINGLE_MOVIE_START
}

export type FetchSingleMovieSuccessAction = {
  type: FETCH_SINGLE_MOVIE_SUCCESS,
  payload: SingleMovie
}

export type FetchSingleMovieFailAction = {
  type: FETCH_SINGLE_MOVIE_FAIL,
  payload: Error
}

export type SortMoviesByRelaseDateAction = {
  type: SORT_MOVIES_BY_RELEASE_DATE,
}

export type SortMoviesByRatingAction = {
  type: SORT_MOVIES_BY_RATING,
}

export type SearchMoviesByTitleAction = {
  type: SEARCH_MOVIES_BY_TITLE,
}

export type SearchMoviesByGenreAction = {
  type: SEARCH_MOVIES_BY_GENRE,
}
