import React from 'react'
import { MemoryRouter } from 'react-router-dom'

import { storiesOf } from '@storybook/react'
import { linkTo } from '@storybook/addon-links'

import MoviesList from './MoviesList'
import moviesMock from '../../../mocks/movies-mocks'

const props = {
  count: 0,
  fetching: false,
  movies: [],
  onSelectMovie: linkTo('Components/Movie')
}
const fetching = true

storiesOf('Components/MoviesList', module)
  .add('without movies', () => <MoviesList {...props} />)
  .add('while fetching', () => (
    <MoviesList
      {...props}
      fetching={fetching}
    />
  ))
  .add('with movies', () => (
    <MemoryRouter>
      <MoviesList
        {...props}
        movies={moviesMock.data}
        count={moviesMock.total}
      />
    </MemoryRouter>
  ))
