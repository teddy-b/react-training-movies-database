/* @flow */

import * as React from 'react'
import { MemoryRouter } from 'react-router-dom'

import { storiesOf } from '@storybook/react'
import { linkTo } from '@storybook/addon-links'

import type { Renderable } from '@storybook/react'

import MovieItem from './MovieItem'
import moviesMock from '../../../../mocks/movies-mocks'

const singleMovieMock = moviesMock.data[0]
const props = {
  ...singleMovieMock,
  key: singleMovieMock.id,
  onSelectMovie: linkTo('Components/Movie')
}

storiesOf('Components/MovieItem', module)
  .add('default', (): Renderable => (
    <MemoryRouter>
      <MovieItem {...props} />
    </MemoryRouter>
  ))
