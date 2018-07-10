/* @flow */

import * as React from 'react'
import { MemoryRouter } from 'react-router-dom'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import type { Renderable } from '@storybook/react'

import Details from './Details'
import moviesMock from '../../../mocks/movies-mocks'

const selectedMovie = moviesMock.data[0]
const props = {
  count: moviesMock.total,
  fetching: false,
  match: {
    params: {
      id: selectedMovie.id.toString()
    }
  },
  movies: moviesMock.data,
  onSelectMovie: action('clicked'),
  selectedMovie
}
const fetching = true

storiesOf('Components/Details', module)
  .add('while fetching suggested movies by genre', (): Renderable => (
    <MemoryRouter>
      <Details
        {...props}
        fetching={fetching}
      />
    </MemoryRouter>
  ))
  .add('with suggested movies by genre', (): Renderable => (
    <MemoryRouter>
      <Details {...props} />
    </MemoryRouter>
  ))
  .add('with error in MoviesList', (): Renderable => (
    <MemoryRouter>
      <Details
        {...props}
        movies={undefined}
      />
    </MemoryRouter>
  ))
