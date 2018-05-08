import React, { Component } from 'react'

import Details from './Details'
import Footer from './Footer'
import Home from './Home'
import ErrorBoundary from '../shared/ErrorBoundary'
import { SEARCH_BY, SORT_BY } from '../../constants'
import * as movies from '../../data.json'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: movies.data,
      selectedMovie: null,
      searchBy: SEARCH_BY.title,
      sortBy: SORT_BY.releaseDate,
      searchText: ''
    }
    this.search = this.search.bind(this)
    this.changeSearchParam = this.changeSearchParam.bind(this)
    this.sort = this.sort.bind(this)
    this.selectMovie = this.selectMovie.bind(this)
  }

  search(searchInput) {
    this.setState({ searchText: searchInput })
    console.log(`Search for ${searchInput}`)
  }

  changeSearchParam(searchParam) {
    this.setState({ searchBy: searchParam })
    console.log(`Search by ${searchParam}`)
  }

  sort(sortBy) {
    this.setState({ sortBy: sortBy })
    console.log(`Sort by ${sortBy}`)
  }

  selectMovie(movieId) {
    this.setState({ selectedMovie: movieId })
    console.log(`Select movie ${movieId}`)
  }

  render() {
    const { movies, selectedMovie } = this.state
    const singleMovie = movies.find(m => m.id === selectedMovie)

    return (
      <div className="container">
        <ErrorBoundary>
          {!selectedMovie && <Home
            movies={movies}
            onSearch={this.search}
            onChangeSearchParam={this.changeSearchParam}
            onSelectMovie={this.selectMovie}
            onSort={this.sort}
          />}
        </ErrorBoundary>
        <ErrorBoundary>
          {selectedMovie && <Details
            singleMovie={singleMovie}
            movies={movies}
            onSelectMovie={this.selectMovie}
          />}
        </ErrorBoundary>
        <ErrorBoundary>
          <Footer />
        </ErrorBoundary>
      </div>
    )
  }
}

export default App
