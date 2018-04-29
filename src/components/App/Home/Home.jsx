import React from 'react'

import Header from './Header'
import MoviesList from '../../shared/MoviesList'

const Home = ({ movies, onSearch, onChangeSearchParam, onSelectMovie, onSort }) => (
  <div className='home'>
    <Header
      count={movies.length}
      onSearch={onSearch}
      onChangeSearchParam={onChangeSearchParam}
      onSort={onSort}
    />
    <MoviesList
      movies={movies}
      onSelectMovie={onSelectMovie}
    />
  </div>
)

export default Home
