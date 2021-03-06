/* @flow */

import * as React from 'react'

import renderer from 'react-test-renderer'

import Header from './Header'
import { SEARCH_BY, SORT_BY } from '../../../../constants/global'

jest.mock('./SearchBar', (): string => 'SearchBar')
jest.mock('./SortInfo', (): string => 'SortInfo')

describe('Header', () => {
  const props = {
    count: 10,
    onSearch: jest.fn(),
    onSearchMoviesByGenre: jest.fn(),
    onSearchMoviesByTitle: jest.fn(),
    onSortMoviesByRating: jest.fn(),
    onSortMoviesByRelaseDate: jest.fn(),
    searchBy: SEARCH_BY.title,
    sortBy: SORT_BY.releaseDate
  }

  it('renders correctly', () => {
    const component = renderer.create(<Header {...props} />)
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })
})
