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

export const movies = (state = INITIAL_STATE.movies, action) => {
  switch (action.type) {
    case FETCH_MOVIES_SUCCESS:
      return {
        data: action.payload.data,
        total: action.payload.total
      }
    default:
      return state
  }
}

export const fetching = (state = INITIAL_STATE.fetching, action) => {
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

export const sortBy = (state = INITIAL_STATE.sortBy, action) => {
  switch (action.type) {
    case SORT_MOVIES_BY_RELEASE_DATE:
      return SORT_BY.releaseDate
    case SORT_MOVIES_BY_RATING:
      return SORT_BY.rating
    default:
      return state
  }
}

export const searchBy = (state = INITIAL_STATE.searchBy, action) => {
  switch (action.type) {
    case SEARCH_MOVIES_BY_TITLE:
      return SEARCH_BY.title
    case SEARCH_MOVIES_BY_GENRE:
      return SEARCH_BY.genre
    default:
      return state
  }
}

export const selectedMovie = (state = INITIAL_STATE.selectedMovie, action) => {
  switch (action.type) {
    case FETCH_SINGLE_MOVIE_SUCCESS:
      return action.payload
    default:
      return state
  }
}

export const errors = (state = INITIAL_STATE.errors, action) => {
  switch (action.type) {
    case FETCH_MOVIES_FAIL:
    case FETCH_SINGLE_MOVIE_FAIL:
      return [
        ...state,
        action.payload
      ]
    case FETCH_MOVIES_SUCCESS:
    case FETCH_SINGLE_MOVIE_SUCCESS:
      return []
    default:
      return state
  }
}
