import React from 'react'

import renderer from 'react-test-renderer'

import Movie from './Movie'
import moviesMock from '../../../../mocks/movies-mocks'

jest.mock('../../../shared/Logo', () => 'Logo')

describe('Movie', () => {
  it('renders correctly', () => {
    const singleMovieMock = moviesMock.data[0]
    const component = renderer.create(<Movie {...singleMovieMock} />)
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with invalid date', () => {
    const singleMovieMock = moviesMock.data[0]
    const releaseDate = ''
    const component = renderer.create(
      <Movie
        {...singleMovieMock}
        release_date={releaseDate}
      />
    )
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })
})
