import React from 'react'
import renderer from 'react-test-renderer'

import MoviesList from './MoviesList'
import { moviesMock } from '../../../mocks/movies-mocks'

jest.mock('./MovieItem', () => 'MovieItem')

describe('MoviesList', () => {
  it('renders correctly with data', () => {
    const component = renderer.create(
      <MoviesList
        movies={moviesMock}
        onSelectMovie={jest.fn()}
      />
    )
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })
  
  it('renders correctly with no data', () => {
    const component = renderer.create(
      <MoviesList
        movies={[]}
        onSelectMovie={jest.fn()}
      />
    )
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })
})
