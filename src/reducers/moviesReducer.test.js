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
import INITIAL_STATE from '../constants/initialState'
import moviesMock from '../mocks/movies-mocks'

describe('movies reducer', () => {
  const initialState = INITIAL_STATE.movies

  it('should return the initial state', () => {
    expect(movies(undefined, {})).toEqual(initialState)
  })

  it('should handle FETCH_MOVIES_SUCCESS', () => {
    expect(movies(initialState, {
      type: FETCH_MOVIES_SUCCESS,
      payload: moviesMock
    })).toEqual(moviesMock)
  })
})

describe('fetching reducer', () => {
  const initialState = INITIAL_STATE.fetching

  it('should return the initial state', () => {
    expect(fetching(undefined, {})).toEqual(initialState)
  })

  it('should handle FETCH_MOVIES_START', () => {
    expect(fetching(initialState, { type: FETCH_MOVIES_START })).toEqual(true)
  })

  it('should handle FETCH_SINGLE_MOVIE_START', () => {
    expect(fetching(initialState, { type: FETCH_SINGLE_MOVIE_START })).toEqual(true)
  })

  it('should handle FETCH_MOVIES_SUCCESS', () => {
    expect(fetching(initialState, { type: FETCH_MOVIES_SUCCESS })).toEqual(false)
  })

  it('should handle FETCH_MOVIES_FAIL', () => {
    expect(fetching(initialState, { type: FETCH_MOVIES_FAIL })).toEqual(false)
  })

  it('should handle FETCH_SINGLE_MOVIE_SUCCESS', () => {
    expect(fetching(initialState, { type: FETCH_SINGLE_MOVIE_SUCCESS })).toEqual(false)
  })

  it('should handle FETCH_SINGLE_MOVIE_FAIL', () => {
    expect(fetching(initialState, { type: FETCH_SINGLE_MOVIE_FAIL })).toEqual(false)
  })
})

describe('sortBy reducer', () => {
  const initialState = INITIAL_STATE.sortBy

  it('should return the initial state', () => {
    expect(sortBy(undefined, {})).toEqual(initialState)
  })

  it('should handle SORT_MOVIES_BY_RELEASE_DATE', () => {
    expect(sortBy(initialState, { type: SORT_MOVIES_BY_RELEASE_DATE })).toEqual(SORT_BY.releaseDate)
  })

  it('should handle SORT_MOVIES_BY_RATING', () => {
    expect(sortBy(initialState, { type: SORT_MOVIES_BY_RATING })).toEqual(SORT_BY.rating)
  })
})

describe('searchBy reducer', () => {
  const initialState = INITIAL_STATE.searchBy

  it('should return the initial state', () => {
    expect(searchBy(undefined, {})).toEqual(initialState)
  })

  it('should handle SORT_MOVIES_BY_RELEASE_DATE', () => {
    expect(searchBy(initialState, { type: SEARCH_MOVIES_BY_TITLE })).toEqual(SEARCH_BY.title)
  })

  it('should handle SORT_MOVIES_BY_RATING', () => {
    expect(searchBy(initialState, { type: SEARCH_MOVIES_BY_GENRE })).toEqual(SEARCH_BY.genre)
  })
})

describe('selectedMovie reducer', () => {
  const initialState = INITIAL_STATE.selectedMovie

  it('should return the initial state', () => {
    expect(selectedMovie(undefined, {})).toEqual(initialState)
  })

  it('should handle FETCH_SINGLE_MOVIE_SUCCESS', () => {
    expect(selectedMovie(initialState, {
      type: FETCH_SINGLE_MOVIE_SUCCESS,
      payload: (moviesMock.data[0])
    })).toEqual(moviesMock.data[0])
  })
})

describe('errors reducer', () => {
  const initialState = INITIAL_STATE.errors
  const error = new Error('Some error')

  it('should return the initial state', () => {
    expect(errors(undefined, {})).toEqual(initialState)
  })

  it('should handle FETCH_MOVIES_FAIL', () => {
    expect(errors(initialState, {
      type: FETCH_MOVIES_FAIL,
      payload: error
    })).toEqual([error])
  })

  it('should handle FETCH_SINGLE_MOVIE_FAIL', () => {
    expect(errors(initialState, {
      type: FETCH_SINGLE_MOVIE_FAIL,
      payload: error
    })).toEqual([error])
  })

  it('should handle FETCH_MOVIES_SUCCESS', () => {
    expect(errors([error], { type: FETCH_MOVIES_SUCCESS })).toEqual([])
  })

  it('should handle FETCH_SINGLE_MOVIE_SUCCESS', () => {
    expect(errors([error], { type: FETCH_SINGLE_MOVIE_SUCCESS })).toEqual([])
  })
})
