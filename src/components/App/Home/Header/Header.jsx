/* @flow */

import React from 'react'

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

const Header = (props: Props) => {
  const {
    count,
    onSearch,
    onSearchMoviesByGenre,
    onSearchMoviesByTitle,
    onSortMoviesByRating,
    onSortMoviesByRelaseDate,
    searchBy,
    sortBy
  } = props

  return (
    <header className="header">
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
    </header>
  )
}

export default Header
