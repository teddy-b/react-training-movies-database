import React from 'react'

import SearchBar from './SearchBar'
import SortInfo from './SortInfo'

const Header = ({ count, onChangeSearchParam, onSearch, onSort }) => (
  <header className="header">
    <SearchBar
      onChangeSearchParam={onChangeSearchParam}
      onSearch={onSearch}
    />
    <SortInfo
      count={count}
      onSort={onSort}
    />
  </header>
)

export default Header
