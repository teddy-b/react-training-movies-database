import React, { Component } from 'react'

import './SearchBar.scss'
import Logo from '../../../../shared/Logo'
import { SEARCH_BY } from '../../../../../constants'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
  }

  render() {
    const { onChangeSearchParam, onSearch } = this.props
    return (
      <div className="searchBar">
        <Logo />
        <p className="searchBarTitle">Find your movie</p>
        <input className="searchInput" type="text" ref={this.inputRef} />
        <div className="searchFooter">
          <div className="searchBy">Search by </div>
          <div className="searchByBtns">
            <button className="searchByTitleBtn" onClick={() => onChangeSearchParam(SEARCH_BY.title)}>Title</button>
            <button className="searchByGenreBtn" onClick={() => onChangeSearchParam(SEARCH_BY.genre)}>Genre</button>
          </div>
          <button className="searchBtn" onClick={() => onSearch(this.inputRef.current.value)}>Search</button>
        </div>
      </div>
    )
  }
}

export default SearchBar
