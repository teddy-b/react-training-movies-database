import React from 'react'
import renderer from 'react-test-renderer'

import Header from './Header'
import { moviesMock } from '../../../../mocks/movies-mocks'

jest.mock('./SearchBar', () => 'SearchBar')
jest.mock('./SortInfo', () => 'SortInfo')

describe('Header', () => {
  it('renders correctly', () => {
    const singleMovieMock = moviesMock[0]
    const component = renderer.create(
      <Header
        count={moviesMock.length}
        onSearch={jest.fn()}
        onChangeSearchParam={jest.fn()}
        onSort={jest.fn()}
      />
    )
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })
})
