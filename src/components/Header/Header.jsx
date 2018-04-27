import React from 'react'

import Logo from '../Logo'
import './Header.scss'

const Header = ({ count, onSearch, onSort }) => (
  <header className="header">
    <div className="searchBar">
      <Logo />
      <p className="searchBarTitle">Find your movie</p>
      <input className="searchInput" type="text" />
      <div className="searchFooter">
        <div className="searchBy">Search by </div>
        <div className="searchByBtns">
          <button className="searchByTitleBtn" onClick={() => onSearch('title')}>Title</button>
          <button className="searchByGenreBtn" onClick={() => onSearch('genre')}>Genre</button>
        </div>
        <button className="searchBtn" onClick={() => onSearch('title')}>Search</button>
      </div>
    </div>
    <div className="sorting">
      {count > 0 && <div>{count} movies found</div>}
      {count > 0 && <div>
        <span>Sort by </span>
        <a onClick={() => onSort('release date')}>Release date</a> 
        <a onClick={() => onSort('rating')}>Rating</a>
      </div>}
    </div>
  </header>
)

export default Header
