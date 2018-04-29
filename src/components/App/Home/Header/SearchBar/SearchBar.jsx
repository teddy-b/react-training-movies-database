import React from 'react'

import './SearchBar.scss'
import Logo from '../../../../shared/Logo'
import { SEARCH_BY } from '../../../../../constants'

const searchInput = React.createRef()

const SearchBar = ({ onChangeSearchParam, onSearch }) => (
  <div className="searchBar">
    <Logo />
    <p className="searchBarTitle">Find your movie</p>
    <input className="searchInput" type="text" ref={searchInput} />
    <div className="searchFooter">
      <div className="searchBy">Search by </div>
      <div className="searchByBtns">
        <button className="searchByTitleBtn" onClick={() => onChangeSearchParam(SEARCH_BY.title)}>Title</button>
        <button className="searchByGenreBtn" onClick={() => onChangeSearchParam(SEARCH_BY.genre)}>Genre</button>
      </div>
      <button className="searchBtn" onClick={() => onSearch(searchInput.current.value)}>Search</button>
    </div>
  </div>
)

export default SearchBar
