/* @flow */

import { SEARCH_BY, SORT_BY } from '../constants/global'
import { State } from '../types'

const INITIAL_STATE: State = {
  movies: {
    data: [],
    total: 0
  },
  fetching: false,
  sortBy: SORT_BY.releaseDate,
  searchBy: SEARCH_BY.title,
  selectedMovie: {
    genres: [],
    overview: '',
    poster_path: '',
    release_date: '',
    runtime: 0,
    tagline: '',
    title: '',
    vote_average: 0
  },
  errors: []
}

export default INITIAL_STATE
