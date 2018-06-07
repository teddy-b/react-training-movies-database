import React from 'react'
import { MemoryRouter } from 'react-router-dom'

import { storiesOf } from '@storybook/react'

import Movie from './Movie'
import moviesMock from '../../../../mocks/movies-mocks'

const singleMovieMock = moviesMock.data[0]

storiesOf('Components/Movie', module)
  .add('default', () => (
    <MemoryRouter>
      <Movie {...singleMovieMock} />
    </MemoryRouter>
  ))
