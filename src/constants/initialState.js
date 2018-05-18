import { SEARCH_BY, SORT_BY } from '../constants/global'

const INITIAL_STATE = {
  movies: [],
  fetching: false,
  sortBy: SORT_BY.releaseDate,
  searchBy: SEARCH_BY.title,
  selectedMovie: null,
  errors: []
}

export default INITIAL_STATE
