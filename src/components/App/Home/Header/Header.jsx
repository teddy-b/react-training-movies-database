/* @flow */

import * as React from 'react'

import SearchBar from './SearchBar'
import SortInfo from './SortInfo'

type Props = {
  count: number,
  onSearch: () => void,
  onSearchMoviesByGenre: () => void,
  onSearchMoviesByTitle: () => void,
  onSortMoviesByRating: () => void,
  onSortMoviesByRelaseDate: () => void,
  searchBy: string,
  sortBy: string
}

const Header = ({
  count,
  onSearch,
  onSearchMoviesByGenre,
  onSearchMoviesByTitle,
  onSortMoviesByRating,
  onSortMoviesByRelaseDate,
  searchBy,
  sortBy
}: Props) => (
  <div>
    <SearchBar
      onSearch={onSearch}
      onSearchMoviesByGenre={onSearchMoviesByGenre}
      onSearchMoviesByTitle={onSearchMoviesByTitle}
      searchBy={searchBy}
    />
    <SortInfo
      count={count}
      onSortMoviesByRating={onSortMoviesByRating}
      onSortMoviesByRelaseDate={onSortMoviesByRelaseDate}
      sortBy={sortBy}
    />
  </div>
)

export default Header
