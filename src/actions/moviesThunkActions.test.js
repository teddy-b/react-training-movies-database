import thunk from 'redux-thunk'

import fetchMock from 'fetch-mock'
import configureMockStore from 'redux-mock-store'

import {
  fetchMovies,
  sortMovies,
  searchMovies,
  selectMovie
} from './moviesActions'
import {
  FETCH_MOVIES_START,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAIL,
  FETCH_SINGLE_MOVIE_START,
  FETCH_SINGLE_MOVIE_SUCCESS,
  FETCH_SINGLE_MOVIE_FAIL
} from '../constants/actionTypes'
import moviesMock from '../mocks/movies-mocks'

describe('async actions', () => {
  const middlewares = [thunk]
  const mockStore = configureMockStore(middlewares)
  const headers = {
    'content-type': 'application/json'
  }
  const singleMovieMock = moviesMock.data[0]
  const error = new Error('Some error')
  let store

  beforeEach(() => {
    store = mockStore({
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

  it('creates FETCH_MOVIES_SUCCESS when fetching movies has been done', () => {
    fetchMock
      .getOnce('http://react-cdp-api.herokuapp.com/movies', {
        body: moviesMock,
        headers
      })

    const expectedActions = [
      {
        type: FETCH_MOVIES_START
      },
      {
        type: FETCH_MOVIES_SUCCESS,
        payload: moviesMock
      }
    ]

    return store.dispatch(fetchMovies('http://react-cdp-api.herokuapp.com/movies')).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('creates FETCH_MOVIES_FAIL when fetching movies throws an error', () => {
    fetchMock
      .getOnce('http://react-cdp-api.herokuapp.com/movies', () => {
        throw error
      })

    const expectedActions = [
      {
        type: FETCH_MOVIES_START
      },
      {
        type: FETCH_MOVIES_FAIL,
        payload: error
      }
    ]

    return store.dispatch(fetchMovies('http://react-cdp-api.herokuapp.com/movies'))
      .then(() => expect(store.getActions()).toEqual(expectedActions))
  })

  it('creates FETCH_MOVIES_SUCCESS when sorting movies has been done', () => {
    fetchMock
      .getOnce('http://react-cdp-api.herokuapp.com/movies?sortBy=rating&sortOrder=desc&limit=24', {
        body: moviesMock,
        headers
      })

    const expectedActions = [
      {
        type: FETCH_MOVIES_START
      },
      {
        type: FETCH_MOVIES_SUCCESS,
        payload: moviesMock
      }
    ]

    return store.dispatch(sortMovies('rating')).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('creates FETCH_MOVIES_SUCCESS when searching movies has been done', () => {
    fetchMock
      .getOnce('http://react-cdp-api.herokuapp.com/movies?search=text&searchBy=title&limit=24', {
        body: moviesMock,
        headers
      })

    const expectedActions = [
      {
        type: FETCH_MOVIES_START
      },
      {
        type: FETCH_MOVIES_SUCCESS,
        payload: moviesMock
      }
    ]

    return store.dispatch(searchMovies('text', 'title')).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('creates FETCH_SINGLE_MOVIE_SUCCESS when select movie has been done and then FETCH_MOVIES_SUCCESS with the movie genre', () => {
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

    const expectedActions = [
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

    return store.dispatch(selectMovie(singleMovieMock.id)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('creates FETCH_SINGLE_MOVIE_FAIL when fetching single movie throws an error', () => {
    fetchMock
      .getOnce(`http://react-cdp-api.herokuapp.com/movies/${singleMovieMock.id}`, () => {
        throw error
      })

    const expectedActions = [
      {
        type: FETCH_SINGLE_MOVIE_START
      },
      {
        type: FETCH_SINGLE_MOVIE_FAIL,
        payload: error
      }
    ]

    return store.dispatch(selectMovie(singleMovieMock.id)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
