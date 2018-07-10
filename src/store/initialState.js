/* @flow */

import * as Immutable from 'immutable'

import { SEARCH_BY, SORT_BY } from '../constants/global'

import type { State } from '../types'

const { Map, List } = Immutable

const initialState: State = {
  movies: Map({
    data: List(),
    total: 0
  }),
  fetching: false,
  sortBy: SORT_BY.releaseDate,
  searchBy: SEARCH_BY.title,
  selectedMovie: Map({
    genres: List(),
    overview: '',
    poster_path: '',
    release_date: '',
    runtime: 0,
    tagline: '',
    title: '',
    vote_average: 0
  }),
  errors: List()
}

export default initialState
