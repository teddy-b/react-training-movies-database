/* @flow */

import * as React from 'react'
import { MemoryRouter } from 'react-router-dom'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import type { Renderable } from '@storybook/react'

import MoviesList from './MoviesList'
import moviesMock from '../../../mocks/movies-mocks'

const props = {
  count: 0,
  fetching: false,
  movies: [],
  onSelectMovie: action('clicked')
}
const fetching = true

storiesOf('Components/MoviesList', module)
  .add('without movies', (): Renderable => <MoviesList {...props} />)
  .add('while fetching', (): Renderable => (
    <MoviesList
      {...props}
      fetching={fetching}
    />
  ))
  .add('with movies', (): Renderable => (
    <MemoryRouter>
      <MoviesList
        {...props}
        movies={moviesMock.data}
        count={moviesMock.total}
      />
    </MemoryRouter>
  ))
