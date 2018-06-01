import thunk from 'redux-thunk'

import fetchMock from 'fetch-mock'
import configureMockStore from 'redux-mock-store'

import {
  fetchMoviesStart,
  fetchMoviesFail,
  fetchMoviesSuccess,
  fetchMovies,
  fetchSingleMovieStart,
  fetchSingleMovieFail,
  fetchSingleMovieSuccess,
  sortMoviesByRelaseDate,
  sortMoviesByRating,
  sortMovies,
  searchMovies,
  searchMoviesByTitle,
  searchMoviesByGenre,
  selectMovie
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

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const singleMovieMock = moviesMock.data[0]
const error = new Error('Some error')

describe('actions', () => {
  it('should create an action to start fetch movies', () => {
    const expectedAction = { type: FETCH_MOVIES_START }

    expect(fetchMoviesStart()).toEqual(expectedAction)
  })

  it('should create an action to success fetch movies', () => {
    const expectedAction = {
      type: FETCH_MOVIES_SUCCESS,
      payload: moviesMock
    }

    expect(fetchMoviesSuccess(moviesMock)).toEqual(expectedAction)
  })

  it('should create an action to fail fetch movies', () => {
    const expectedAction = {
      type: FETCH_MOVIES_FAIL,
      payload: error
    }

    expect(fetchMoviesFail(error)).toEqual(expectedAction)
  })

  it('should create an action to start fetch single movie', () => {
    const expectedAction = { type: FETCH_SINGLE_MOVIE_START }

    expect(fetchSingleMovieStart()).toEqual(expectedAction)
  })

  it('should create an action to success fetch single movie', () => {
    const expectedAction = {
      type: FETCH_SINGLE_MOVIE_SUCCESS,
      payload: singleMovieMock
    }

    expect(fetchSingleMovieSuccess(singleMovieMock)).toEqual(expectedAction)
  })

  it('should create an action to fail fetch single movie', () => {
    const expectedAction = {
      type: FETCH_SINGLE_MOVIE_FAIL,
      payload: error
    }

    expect(fetchSingleMovieFail(error)).toEqual(expectedAction)
  })

  it('should create an action to sort movies by relase date', () => {
    const expectedAction = { type: SORT_MOVIES_BY_RELEASE_DATE }

    expect(sortMoviesByRelaseDate()).toEqual(expectedAction)
  })

  it('should create an action to sort movies by rating', () => {
    const expectedAction = { type: SORT_MOVIES_BY_RATING }

    expect(sortMoviesByRating()).toEqual(expectedAction)
  })

  it('should create an action to search movies by title', () => {
    const expectedAction = { type: SEARCH_MOVIES_BY_TITLE }

    expect(searchMoviesByTitle()).toEqual(expectedAction)
  })

  it('should create an action to search movies by genre', () => {
    const expectedAction = { type: SEARCH_MOVIES_BY_GENRE }

    expect(searchMoviesByGenre()).toEqual(expectedAction)
  })
})

describe('async actions', () => {
  let store

  beforeEach(() => {
    store = mockStore({
      movies: {},
      selectedMovie: {}
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
        headers: { 'content-type': 'application/json' }
      })

    const expectedActions = [
      { type: FETCH_MOVIES_START },
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
      { type: FETCH_MOVIES_START },
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
        headers: { 'content-type': 'application/json' }
      })

    const expectedActions = [
      { type: FETCH_MOVIES_START },
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
        headers: { 'content-type': 'application/json' }
      })

    const expectedActions = [
      { type: FETCH_MOVIES_START },
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
        headers: { 'content-type': 'application/json' }
      })

    fetchMock
      .getOnce(`http://react-cdp-api.herokuapp.com/movies?search=${singleMovieMock.genres[0]}&searchBy=genres&limit=24`, {
        body: moviesMock,
        headers: { 'content-type': 'application/json' }
      })

    const expectedActions = [
      { type: FETCH_SINGLE_MOVIE_START },
      {
        type: FETCH_SINGLE_MOVIE_SUCCESS,
        payload: singleMovieMock
      },
      { type: FETCH_MOVIES_START },
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
      { type: FETCH_SINGLE_MOVIE_START },
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
