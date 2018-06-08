import React from 'react'

import renderer from 'react-test-renderer'

import Details from './Details'
import moviesMock from '../../../mocks/movies-mocks'

jest.mock('./Movie', () => 'Movie')
jest.mock('../../shared/ErrorBoundary', () => 'ErrorBoundary')
jest.mock('../../shared/MoviesList', () => 'MoviesList')

describe('Details', () => {
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
    onSelectMovie: jest.fn(),
    selectedMovie
  }

  it('renders correctly', () => {
    const component = renderer.create(<Details {...props} />)
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })
})
