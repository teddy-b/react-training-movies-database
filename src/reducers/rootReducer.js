import { combineReducers } from 'redux'

import {
  movies,
  fetching,
  sortBy,
  searchBy,
  selectedMovie,
  errors
} from './moviesReducer'

export default combineReducers({
  movies,
  fetching,
  sortBy,
  searchBy,
  selectedMovie,
  errors
})
