/* @flow */

import thunk from 'redux-thunk'

import fetchMock from 'fetch-mock'
import configureMockStore from 'redux-mock-store'

import type { Dispatch, Middleware } from 'redux'
import type { mockStore, mockStoreWithoutMiddleware } from 'redux-mock-store'

import {
  fetchMovies,
  sortMovies,
  searchMovies,
  selectMovie
} from './moviesThunkActions'
import {
  FETCH_MOVIES_START,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAIL,
  FETCH_SINGLE_MOVIE_START,
  FETCH_SINGLE_MOVIE_SUCCESS,
  FETCH_SINGLE_MOVIE_FAIL
} from '../constants/actionTypes'
import moviesMock from '../mocks/movies-mocks'

import type {
  FetchMoviesAction,
  FetchSingleMovieAction,
  SingleMovieData,
  State,
  ThunkAction
} from '../types'

describe('fetch movies thunk actions', () => {
  const middlewares: Middleware<State, ThunkAction, Dispatch<ThunkAction>>[] = [thunk]
  const storeMock: mockStore = configureMockStore(middlewares)
  const headers: { [key: string]: string } = {
    'content-type': 'application/json'
  }
  const error: Error = new Error('Some error')
  let store: mockStoreWithoutMiddleware<State, ThunkAction>

  beforeEach(() => {
    store = storeMock({
      movies: {
      },
      selectedMovie: {
      }
    })
  })

  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  describe('fetch movies thunk actions', () => {
    let expectedActions: Array<FetchMoviesAction>

    it('creates FETCH_MOVIES_SUCCESS when fetching movies has been done', (): void => {
      fetchMock
        .getOnce('http://react-cdp-api.herokuapp.com/movies', {
          body: moviesMock,
          headers
        })

      expectedActions = [
        {
          type: FETCH_MOVIES_START
        },
        {
          type: FETCH_MOVIES_SUCCESS,
          payload: moviesMock
        }
      ]

      return store.dispatch(fetchMovies('http://react-cdp-api.herokuapp.com/movies'))
        .then((): void => expect(store.getActions()).toEqual(expectedActions))
    })

    it('creates FETCH_MOVIES_FAIL when fetching movies throws an error', (): void => {
      fetchMock
        .getOnce('http://react-cdp-api.herokuapp.com/movies', () => {
          throw error
        })

      expectedActions = [
        {
          type: FETCH_MOVIES_START
        },
        {
          type: FETCH_MOVIES_FAIL,
          payload: error
        }
      ]

      return store.dispatch(fetchMovies('http://react-cdp-api.herokuapp.com/movies'))
        .then((): void => expect(store.getActions()).toEqual(expectedActions))
    })

    it('creates FETCH_MOVIES_SUCCESS when sorting movies has been done', (): void => {
      fetchMock
        .getOnce('http://react-cdp-api.herokuapp.com/movies?sortBy=rating&sortOrder=desc&limit=24', {
          body: moviesMock,
          headers
        })

      expectedActions = [
        {
          type: FETCH_MOVIES_START
        },
        {
          type: FETCH_MOVIES_SUCCESS,
          payload: moviesMock
        }
      ]

      return store.dispatch(sortMovies('rating'))
        .then((): void => expect(store.getActions()).toEqual(expectedActions))
    })

    it('creates FETCH_MOVIES_SUCCESS when searching movies has been done', (): void => {
      fetchMock
        .getOnce('http://react-cdp-api.herokuapp.com/movies?search=text&searchBy=title&limit=24', {
          body: moviesMock,
          headers
        })

      expectedActions = [
        {
          type: FETCH_MOVIES_START
        },
        {
          type: FETCH_MOVIES_SUCCESS,
          payload: moviesMock
        }
      ]

      return store.dispatch(searchMovies('text', 'title'))
        .then((): void => expect(store.getActions()).toEqual(expectedActions))
    })
  })

  describe('fetch movies thunk actions', () => {
    const singleMovieMock: SingleMovieData = moviesMock.data[0]

    it('creates FETCH_SINGLE_MOVIE_SUCCESS when select movie has been done and then FETCH_MOVIES_SUCCESS with the movie genre', (): void => {
      fetchMock
        .getOnce(`http://react-cdp-api.herokuapp.com/movies/${singleMovieMock.id}`, {
          body: singleMovieMock,
          headers
        })

      fetchMock
        .getOnce(`http://react-cdp-api.herokuapp.com/movies?search=${singleMovieMock.genres[0]}&searchBy=genres&limit=24`, {
          body: moviesMock,
          headers
        })

      const expectedActions: Array<FetchMoviesAction | FetchSingleMovieAction> = [
        {
          type: FETCH_SINGLE_MOVIE_START
        },
        {
          type: FETCH_SINGLE_MOVIE_SUCCESS,
          payload: singleMovieMock
        },
        {
          type: FETCH_MOVIES_START
        },
        {
          type: FETCH_MOVIES_SUCCESS,
          payload: moviesMock
        }
      ]

      return store.dispatch(selectMovie(singleMovieMock.id))
        .then((): void => expect(store.getActions()).toEqual(expectedActions))
    })

    it('creates FETCH_SINGLE_MOVIE_FAIL when fetching single movie throws an error', (): void => {
      fetchMock
        .getOnce(`http://react-cdp-api.herokuapp.com/movies/${singleMovieMock.id}`, () => {
          throw error
        })

      const expectedActions: Array<FetchSingleMovieAction> = [
        {
          type: FETCH_SINGLE_MOVIE_START
        },
        {
          type: FETCH_SINGLE_MOVIE_FAIL,
          payload: error
        }
      ]

      return store.dispatch(selectMovie(singleMovieMock.id))
        .then((): void => expect(store.getActions()).toEqual(expectedActions))
    })
  })
})
