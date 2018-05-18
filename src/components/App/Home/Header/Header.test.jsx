import React from 'react'
import renderer from 'react-test-renderer'

import Header from './Header'

jest.mock('./SearchBar', () => 'SearchBar')
jest.mock('./SortInfo', () => 'SortInfo')

describe('Header', () => {
  const props = {
    count: 10,
    onSearch: jest.fn(),
    onSearchMoviesByGenre: jest.fn(),
    onSearchMoviesByTitle: jest.fn(),
    onSortMoviesByRating: jest.fn(),
    onSortMoviesByRelaseDate: jest.fn(),
    searchBy: 'title',
    sortBy: 'release_date'
  }

  it('renders correctly', () => {
    const component = renderer.create(<Header {...props} />)
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })
})
