import React from 'react'
import { MemoryRouter } from 'react-router-dom'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Details from './Details'
import moviesMock from '../../../mocks/movies-mocks'

const selectedMovie = moviesMock.data[0]
const props = {
  count: moviesMock.total,
  fetching: false,
  match: { params: { id: selectedMovie.id.toString() } },
  movies: moviesMock.data,
  onSelectMovie: action('clicked'),
  selectedMovie
}
const fetching = true

storiesOf('Components/Details', module)
  .add('while fetching suggested movies by genre', () => (
    <MemoryRouter>
      <Details
        {...props}
        fetching={fetching}
      />
    </MemoryRouter>
  ))
  .add('with suggested movies by genre', () => (
    <MemoryRouter>
      <Details {...props} />
    </MemoryRouter>
  ))
  .add('with error in MoviesList', () => (
    <MemoryRouter>
      <Details
        {...props}
        movies={undefined}
      />
    </MemoryRouter>
  ))
