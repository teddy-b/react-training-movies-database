import React from 'react'
import { MemoryRouter } from 'react-router-dom'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import Home from './Home'
import moviesMock from '../../../mocks/movies-mocks'

const props = {
  count: 0,
  fetching: false,
  movies: [],
  onSearch: action('clicked'),
  onSearchMoviesByGenre: action('clicked'),
  onSearchMoviesByTitle: action('clicked'),
  onSelectMovie: linkTo('Components/Details'),
  onSortMoviesByRating: action('clicked'),
  onSortMoviesByRelaseDate: action('clicked'),
  searchBy: 'title',
  sortBy: 'release_date'
}
const fetching = true

storiesOf('Components/Home', module)
  .add('without movies', () => (
    <MemoryRouter>
      <Home {...props} />
    </MemoryRouter>
  ))
  .add('while fetching', () => (
    <MemoryRouter>
      <Home
        {...props}
        fetching={fetching}
      />
    </MemoryRouter>
  ))
  .add('with movies', () => (
    <MemoryRouter>
      <Home
        {...props}
        count={moviesMock.total}
        movies={moviesMock.data}
      />
    </MemoryRouter>
  ))
  .add('with error in MoviesList', () => (
    <MemoryRouter>
      <Home
        {...props}
        count={moviesMock.total}
        movies={undefined}
      />
    </MemoryRouter>
  ))
