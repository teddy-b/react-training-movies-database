/* @flow */

import { Map, List } from 'immutable'

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
import { SEARCH_BY, SORT_BY } from '../constants/global'
import initialState from '../store/initialState'

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
  State
} from '../types'

export const movies = (
  state: State.movies = initialState.movies,
  action: FetchMoviesSuccessAction
): State.movies => {
  switch (action.type) {
    case FETCH_MOVIES_SUCCESS:
      return Map({
        data: List(action.payload.data),
        total: action.payload.total
      })
    default:
      return state
  }
}

export const fetching = (
  state: State.fetching = initialState.fetching,
  action: FetchMoviesStartAction
  | FetchMoviesSuccessAction
  | FetchMoviesFailAction
  | FetchSingleMovieStartAction
  | FetchSingleMovieSuccessAction
  | FetchSingleMovieFailAction
): State.fetching => {
  switch (action.type) {
    case FETCH_MOVIES_START:
    case FETCH_SINGLE_MOVIE_START:
      return true
    case FETCH_MOVIES_SUCCESS:
    case FETCH_MOVIES_FAIL:
    case FETCH_SINGLE_MOVIE_SUCCESS:
    case FETCH_SINGLE_MOVIE_FAIL:
      return false
    default:
      return state
  }
}

export const sortBy = (
  state: State.sortBy = initialState.sortBy,
  action: SortMoviesByRelaseDateAction | SortMoviesByRatingAction,
): State.sortBy => {
  switch (action.type) {
    case SORT_MOVIES_BY_RELEASE_DATE:
      return SORT_BY.releaseDate
    case SORT_MOVIES_BY_RATING:
      return SORT_BY.rating
    default:
      return state
  }
}

export const searchBy = (
  state: State.searchBy = initialState.searchBy,
  action: SearchMoviesByTitleAction | SearchMoviesByGenreAction,
): State.searchBy => {
  switch (action.type) {
    case SEARCH_MOVIES_BY_TITLE:
      return SEARCH_BY.title
    case SEARCH_MOVIES_BY_GENRE:
      return SEARCH_BY.genre
    default:
      return state
  }
}

export const selectedMovie = (
  state: State.selectedMovie = initialState.selectedMovie,
  action: FetchSingleMovieSuccessAction
): State.selectedMovie => {
  switch (action.type) {
    case FETCH_SINGLE_MOVIE_SUCCESS:
      return Map(action.payload)
    default:
      return state
  }
}

export const errors = (
  state: State.errors = initialState.errors,
  action: FetchMoviesSuccessAction
  | FetchMoviesFailAction
  | FetchSingleMovieSuccessAction
  | FetchSingleMovieFailAction
): State.errors => {
  switch (action.type) {
    case FETCH_MOVIES_FAIL:
    case FETCH_SINGLE_MOVIE_FAIL:
      return state.push(Map(action.payload))
    case FETCH_MOVIES_SUCCESS:
    case FETCH_SINGLE_MOVIE_SUCCESS:
      return List()
    default:
      return state
  }
}
