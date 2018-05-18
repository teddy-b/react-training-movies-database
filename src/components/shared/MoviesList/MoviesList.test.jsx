import React from 'react'
import renderer from 'react-test-renderer'

import MoviesList from './MoviesList'
import moviesMock from '../../../mocks/movies-mocks'

jest.mock('./MovieItem', () => 'MovieItem')

describe('MoviesList', () => {
  const props = {
    movies: [],
    onSelectMovie: jest.fn()
  }

  it('renders correctly with no data', () => {
    const component = renderer.create(<MoviesList {...props} />)
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with data', () => {
    const component = renderer.create(<MoviesList
      {...props}
      movies={moviesMock}
    />)
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })
})
