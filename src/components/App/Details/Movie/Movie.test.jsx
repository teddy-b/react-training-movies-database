/* @flow */

import * as React from 'react'
import { MemoryRouter } from 'react-router-dom'

import renderer from 'react-test-renderer'

import Movie from './Movie'
import moviesMock from '../../../../mocks/movies-mocks'

jest.mock('../../../shared/Logo', (): string => 'Logo')

describe('Movie', () => {
  const singleMovieMock = moviesMock.data[0]

  it('renders correctly', () => {
    const component = renderer.create(
      <MemoryRouter>
        <Movie {...singleMovieMock} />
      </MemoryRouter>
    )
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with invalid date', () => {
    const releaseDate = ''
    const component = renderer.create(
      <MemoryRouter>
        <Movie
          {...singleMovieMock}
          release_date={releaseDate}
        />
      </MemoryRouter>
    )
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })
})
