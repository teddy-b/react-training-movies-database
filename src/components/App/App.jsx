import React, { Component } from 'react'

import * as movies from '../../data.json'
import MoviesList from '../MoviesList'
import Movie from '../Movie'
import Header from '../Header'
import Footer from '../Footer'
import './App.scss'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: movies.data,
      searchBy: 'title',
      sortBy: 'release date'
    }
  }

  search(searchBy) {
    console.log(`Search by ${searchBy}`)
  }

  sort(sortBy) {
    console.log(`Sort by ${sortBy}`)
  }

  selectMovie(movieId) {
    console.log(`Select movie ${movieId}`)
  }

  render() {
    const { movies } = this.state
    const singleMovie = movies[0]

    return (
      <div className='container'>
        <Header count={movies.length} onSearch={this.search} onSort={this.sort} />
        <MoviesList movies={movies} onSelectMovie={this.selectMovie} />
        <Movie {...singleMovie} />
        <MoviesList movies={movies} />
        <Footer />
      </div>
    )
  }
}

export default App
