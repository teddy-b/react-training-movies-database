/* @flow */

import { Map, List } from 'immutable'

import {
  movies,
  fetching,
  sortBy,
  searchBy,
  selectedMovie,
  errors
} from './moviesReducer'
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
  SingleMovieData,
  State
} from '../types'

describe('movies reducer', () => {
  const prevState: State.movies = initialState.movies
  let action: FetchMoviesSuccessAction
  let nextState: State.movies

  it('should return the initial state', () => {
    action = {
    }
    expect(movies(undefined, action)).toEqual(prevState)
  })

  it('should handle FETCH_MOVIES_SUCCESS', () => {
    action = {
      type: FETCH_MOVIES_SUCCESS,
      payload: moviesMock
    }
    nextState = Map({
      data: List(moviesMock.data),
      total: moviesMock.total
    })
    expect(movies(prevState, action)).toEqual(nextState)
  })
})

describe('fetching reducer', () => {
  const prevState: State.fetching = initialState.fetching
  let action:
  | FetchMoviesStartAction
  | FetchMoviesSuccessAction
  | FetchMoviesFailAction
  | FetchSingleMovieStartAction
  | FetchSingleMovieSuccessAction
  | FetchSingleMovieFailAction
  let nextState: State.fetching

  it('should return the initial state', () => {
    action = {
    }
    expect(fetching(undefined, action)).toEqual(prevState)
  })

  it('should handle FETCH_MOVIES_START', () => {
    action = {
      type: FETCH_MOVIES_START
    }
    nextState = true
    expect(fetching(prevState, action)).toEqual(nextState)
  })

  it('should handle FETCH_SINGLE_MOVIE_START', () => {
    action = {
      type: FETCH_SINGLE_MOVIE_START
    }
    nextState = true
    expect(fetching(prevState, action)).toEqual(nextState)
  })

  it('should handle FETCH_MOVIES_SUCCESS', () => {
    action = {
      type: FETCH_MOVIES_SUCCESS
    }
    nextState = false
    expect(fetching(prevState, action)).toEqual(nextState)
  })

  it('should handle FETCH_MOVIES_FAIL', () => {
    action = {
      type: FETCH_MOVIES_FAIL
    }
    nextState = false
    expect(fetching(prevState, action)).toEqual(nextState)
  })

  it('should handle FETCH_SINGLE_MOVIE_SUCCESS', () => {
    action = {
      type: FETCH_SINGLE_MOVIE_SUCCESS
    }
    nextState = false
    expect(fetching(prevState, action)).toEqual(nextState)
  })

  it('should handle FETCH_SINGLE_MOVIE_FAIL', () => {
    action = {
      type: FETCH_SINGLE_MOVIE_FAIL
    }
    nextState = false
    expect(fetching(prevState, action)).toEqual(nextState)
  })
})

describe('sortBy reducer', () => {
  const prevState: State.sortBy = initialState.sortBy
  let action: SortMoviesByRelaseDateAction | SortMoviesByRatingAction
  let nextState: State.sortBy

  it('should return the initial state', () => {
    action = {
    }
    expect(sortBy(undefined, action)).toEqual(prevState)
  })

  it('should handle SORT_MOVIES_BY_RELEASE_DATE', () => {
    action = {
      type: SORT_MOVIES_BY_RELEASE_DATE
    }
    nextState = SORT_BY.releaseDate
    expect(sortBy(prevState, action)).toEqual(nextState)
  })

  it('should handle SORT_MOVIES_BY_RATING', () => {
    action = {
      type: SORT_MOVIES_BY_RATING
    }
    nextState = SORT_BY.rating
    expect(sortBy(prevState, action)).toEqual(nextState)
  })
})

describe('searchBy reducer', () => {
  const prevState: State.searchBy = initialState.searchBy
  let action: SearchMoviesByTitleAction | SearchMoviesByGenreAction
  let nextState: State.searchBy

  it('should return the initial state', () => {
    action = {
    }
    expect(searchBy(undefined, action)).toEqual(prevState)
  })

  it('should handle SORT_MOVIES_BY_RELEASE_DATE', () => {
    action = {
      type: SEARCH_MOVIES_BY_TITLE
    }
    nextState = SEARCH_BY.title
    expect(searchBy(prevState, action)).toEqual(nextState)
  })

  it('should handle SORT_MOVIES_BY_RATING', () => {
    action = {
      type: SEARCH_MOVIES_BY_GENRE
    }
    nextState = SEARCH_BY.genre
    expect(searchBy(prevState, action)).toEqual(nextState)
  })
})

describe('selectedMovie reducer', () => {
  const prevState: State.selectedMovie = initialState.selectedMovie
  const singleMovieMock: SingleMovieData = moviesMock.data[0]
  let action: FetchSingleMovieSuccessAction
  let nextState: State.selectedMovie

  it('should return the initial state', () => {
    action = {
    }
    expect(selectedMovie(undefined, action)).toEqual(prevState)
  })

  it('should handle FETCH_SINGLE_MOVIE_SUCCESS', () => {
    action = {
      type: FETCH_SINGLE_MOVIE_SUCCESS,
      payload: (singleMovieMock)
    }
    nextState = Map(singleMovieMock)
    expect(selectedMovie(prevState, action)).toEqual(nextState)
  })
})

describe('errors reducer', () => {
  const prevState: State.errors = initialState.errors
  const error: Error = new Error('Some error')
  let action:
  | FetchMoviesSuccessAction
  | FetchMoviesFailAction
  | FetchSingleMovieSuccessAction
  | FetchSingleMovieFailAction
  let nextState: State.errors

  it('should return the initial state', () => {
    action = {
    }
    expect(errors(undefined, action)).toEqual(prevState)
  })

  it('should handle FETCH_MOVIES_FAIL', () => {
    action = {
      type: FETCH_MOVIES_FAIL,
      payload: error
    }
    nextState = List([Map(error)])
    expect(errors(prevState, action)).toEqual(nextState)
  })

  it('should handle FETCH_SINGLE_MOVIE_FAIL', () => {
    action = {
      type: FETCH_SINGLE_MOVIE_FAIL,
      payload: error
    }
    nextState = List([Map(error)])
    expect(errors(prevState, action)).toEqual(nextState)
  })

  it('should handle FETCH_MOVIES_SUCCESS', () => {
    action = {
      type: FETCH_MOVIES_SUCCESS
    }
    nextState = List()
    expect(errors(prevState, action)).toEqual(nextState)
  })

  it('should handle FETCH_SINGLE_MOVIE_SUCCESS', () => {
    action = {
      type: FETCH_SINGLE_MOVIE_SUCCESS
    }
    nextState = List()
    expect(errors(prevState, action)).toEqual(nextState)
  })
})
