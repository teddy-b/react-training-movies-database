import React from 'react'
import renderer from 'react-test-renderer'

import Details from './Details'
import { moviesMock } from '../../../mocks/movies-mocks'

jest.mock('./Movie', () => 'Movie')
jest.mock('../../shared/MoviesList', () => 'MoviesList')

describe('Details', () => {
  it('renders correctly', () => {
    const singleMovieMock = moviesMock[0]
    const component = renderer.create(
      <Details
        singleMovie={singleMovieMock}
        movies={moviesMock}
        onSelectMovie={jest.fn()}
      />
    )
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })
})
