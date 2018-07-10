/* @flow */

import * as React from 'react'
import { MemoryRouter } from 'react-router-dom'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import type { Renderable } from '@storybook/react'

import Home from './Home'
import moviesMock from '../../../mocks/movies-mocks'

const props = {
  count: 0,
  fetching: false,
  match: {
    params: {
    }
  },
  movies: [],
  onSearch: action('clicked'),
  onSearchMoviesByGenre: action('clicked'),
  onSearchMoviesByTitle: action('clicked'),
  onSelectMovie: action('clicked'),
  onSortMoviesByRating: action('clicked'),
  onSortMoviesByRelaseDate: action('clicked'),
  searchBy: 'title',
  sortBy: 'release_date'
}
const fetching = true

storiesOf('Components/Home', module)
  .add('without movies', (): Renderable => (
    <MemoryRouter>
      <Home {...props} />
    </MemoryRouter>
  ))
  .add('while fetching', (): Renderable => (
    <MemoryRouter>
      <Home
        {...props}
        fetching={fetching}
      />
    </MemoryRouter>
  ))
  .add('with movies', (): Renderable => (
    <MemoryRouter>
      <Home
        {...props}
        count={moviesMock.total}
        movies={moviesMock.data}
      />
    </MemoryRouter>
  ))
  .add('with error in MoviesList', (): Renderable => (
    <MemoryRouter>
      <Home
        {...props}
        count={moviesMock.total}
        movies={undefined}
      />
    </MemoryRouter>
  ))
