/* @flow */

import * as React from 'react'

import renderer from 'react-test-renderer'

import Home from './Home'
import moviesMock from '../../../mocks/movies-mocks'

jest.mock('./Header', (): string => 'Header')
jest.mock('../../shared/ErrorBoundary', (): string => 'ErrorBoundary')
jest.mock('../../shared/MoviesList', (): string => 'MoviesList')

describe('Home', () => {
  const props = {
    count: moviesMock.total,
    fetching: false,
    match: {
      params: {
      }
    },
    movies: moviesMock.data,
    onSearch: jest.fn(),
    onSearchMoviesByGenre: jest.fn(),
    onSearchMoviesByTitle: jest.fn(),
    onSelectMovie: jest.fn(),
    onSortMoviesByRating: jest.fn(),
    onSortMoviesByRelaseDate: jest.fn(),
    searchBy: 'title',
    sortBy: 'release_date'
  }

  it('renders correctly', () => {
    const component = renderer.create(<Home {...props} />)
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with match params', () => {
    const matchMoch = {
      params: {
        query: 'text',
        searchBy: 'title'
      }
    }
    const component = renderer.create(
      <Home
        {...props}
        match={matchMoch}
      />
    )
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })
})
