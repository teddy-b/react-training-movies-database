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
  SORT_MOVIES_BY_RELEASE_DATE,
  SORT_MOVIES_BY_RATING,
  SEARCH_MOVIES_BY_TITLE,
  SEARCH_MOVIES_BY_GENRE,
  SELECT_MOVIE
} from '../constants/actionTypes'
import moviesMock from '../mocks/movies-mocks'

describe('movies reducer', () => {
  const initialState = []

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
  const initialState = false

  it('should return the initial state', () => {
    expect(fetching(undefined, {})).toEqual(initialState)
  })

  it('should handle FETCH_MOVIES_START', () => {
    expect(fetching(initialState, { type: FETCH_MOVIES_START })).toEqual(true)
  })

  it('should handle FETCH_MOVIES_SUCCESS', () => {
    expect(fetching(initialState, { type: FETCH_MOVIES_SUCCESS })).toEqual(false)
  })

  it('should handle FETCH_MOVIES_FAIL', () => {
    expect(fetching(initialState, { type: FETCH_MOVIES_FAIL })).toEqual(false)
  })
})

describe('sortBy reducer', () => {
  const initialState = 'release_date'

  it('should return the initial state', () => {
    expect(sortBy(undefined, {})).toEqual(initialState)
  })

  it('should handle SORT_MOVIES_BY_RELEASE_DATE', () => {
    expect(sortBy(initialState, { type: SORT_MOVIES_BY_RELEASE_DATE })).toEqual('release_date')
  })

  it('should handle SORT_MOVIES_BY_RATING', () => {
    expect(sortBy(initialState, { type: SORT_MOVIES_BY_RATING })).toEqual('vote_average')
  })
})

describe('searchBy reducer', () => {
  const initialState = 'title'

  it('should return the initial state', () => {
    expect(searchBy(undefined, {})).toEqual(initialState)
  })

  it('should handle SORT_MOVIES_BY_RELEASE_DATE', () => {
    expect(searchBy(initialState, { type: SEARCH_MOVIES_BY_TITLE })).toEqual('title')
  })

  it('should handle SORT_MOVIES_BY_RATING', () => {
    expect(searchBy(initialState, { type: SEARCH_MOVIES_BY_GENRE })).toEqual('genres')
  })
})

describe('selectedMovie reducer', () => {
  const initialState = null

  it('should return the initial state', () => {
    expect(selectedMovie(undefined, {})).toEqual(initialState)
  })

  it('should handle SELECT_MOVIE', () => {
    expect(selectedMovie(initialState, {
      type: SELECT_MOVIE,
      payload: 1
    })).toEqual(1)
  })
})

describe('errors reducer', () => {
  const initialState = []
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

  it('should handle FETCH_MOVIES_SUCCESS', () => {
    expect(errors([error], { type: FETCH_MOVIES_SUCCESS })).toEqual([])
  })
})
