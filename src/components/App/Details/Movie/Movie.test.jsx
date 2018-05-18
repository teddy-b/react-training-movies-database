import React from 'react'
import renderer from 'react-test-renderer'

import Movie from './Movie'
import moviesMock from '../../../../mocks/movies-mocks'

jest.mock('../../../shared/Logo', () => 'Logo')

describe('Movie', () => {
  it('renders correctly', () => {
    const singleMovieMock = moviesMock[0]
    const component = renderer.create(<Movie {...singleMovieMock} />)
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })
})
