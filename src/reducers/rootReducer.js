/* @flow */

import { combineReducers } from 'redux'

import type { CombinedReducer } from 'redux'

import type { MoviesAction, State } from '../types'

import {
  movies,
  fetching,
  sortBy,
  searchBy,
  selectedMovie,
  errors
} from './moviesReducer'

const rootReducer: CombinedReducer<State, MoviesAction> = combineReducers({
  movies,
  fetching,
  sortBy,
  searchBy,
  selectedMovie,
  errors
})

export default rootReducer
