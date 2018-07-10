/* @flow */

import {
  fetchMoviesStart,
  fetchMoviesFail,
  fetchMoviesSuccess,
  fetchSingleMovieStart,
  fetchSingleMovieFail,
  fetchSingleMovieSuccess,
  sortMoviesByRelaseDate,
  sortMoviesByRating,
  searchMoviesByTitle,
  searchMoviesByGenre
} from './moviesActions'
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
import moviesMock from '../mocks/movies-mocks'

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
  SingleMovieData
} from '../types'

describe('actions', () => {
  const singleMovieMock: SingleMovieData = moviesMock.data[0]
  const error: Error = new Error('Some error')

  it('should create an action to start fetch movies', () => {
    const expectedAction: FetchMoviesStartAction = {
      type: FETCH_MOVIES_START
    }

    expect(fetchMoviesStart()).toEqual(expectedAction)
  })

  it('should create an action to success fetch movies', () => {
    const expectedAction: FetchMoviesSuccessAction = {
      type: FETCH_MOVIES_SUCCESS,
      payload: moviesMock
    }

    expect(fetchMoviesSuccess(moviesMock)).toEqual(expectedAction)
  })

  it('should create an action to fail fetch movies', () => {
    const expectedAction: FetchMoviesFailAction = {
      type: FETCH_MOVIES_FAIL,
      payload: error
    }

    expect(fetchMoviesFail(error)).toEqual(expectedAction)
  })

  it('should create an action to start fetch single movie', () => {
    const expectedAction: FetchSingleMovieStartAction = {
      type: FETCH_SINGLE_MOVIE_START
    }

    expect(fetchSingleMovieStart()).toEqual(expectedAction)
  })

  it('should create an action to success fetch single movie', () => {
    const expectedAction: FetchSingleMovieSuccessAction = {
      type: FETCH_SINGLE_MOVIE_SUCCESS,
      payload: singleMovieMock
    }

    expect(fetchSingleMovieSuccess(singleMovieMock)).toEqual(expectedAction)
  })

  it('should create an action to fail fetch single movie', () => {
    const expectedAction: FetchSingleMovieFailAction = {
      type: FETCH_SINGLE_MOVIE_FAIL,
      payload: error
    }

    expect(fetchSingleMovieFail(error)).toEqual(expectedAction)
  })

  it('should create an action to sort movies by relase date', () => {
    const expectedAction: SortMoviesByRelaseDateAction = {
      type: SORT_MOVIES_BY_RELEASE_DATE
    }

    expect(sortMoviesByRelaseDate()).toEqual(expectedAction)
  })

  it('should create an action to sort movies by rating', () => {
    const expectedAction: SortMoviesByRatingAction = {
      type: SORT_MOVIES_BY_RATING
    }

    expect(sortMoviesByRating()).toEqual(expectedAction)
  })

  it('should create an action to search movies by title', () => {
    const expectedAction: SearchMoviesByTitleAction = {
      type: SEARCH_MOVIES_BY_TITLE
    }

    expect(searchMoviesByTitle()).toEqual(expectedAction)
  })

  it('should create an action to search movies by genre', () => {
    const expectedAction: SearchMoviesByGenreAction = {
      type: SEARCH_MOVIES_BY_GENRE
    }

    expect(searchMoviesByGenre()).toEqual(expectedAction)
  })
})
