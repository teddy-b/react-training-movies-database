import React from 'react'
import renderer from 'react-test-renderer'

import Home from './Home'
import { moviesMock } from '../../../mocks/movies-mocks'

jest.mock('./Header', () => 'Header')
jest.mock('../../shared/MoviesList', () => 'MoviesList')

describe('Home', () => {
  it('renders correctly', () => {
    const component = renderer.create(
      <Home
        movies={moviesMock}
        onSearch={jest.fn()}
        onChangeSearchParam={jest.fn()}
        onSelectMovie={jest.fn()}
        onSort={jest.fn()}
      />
    )
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })
})
