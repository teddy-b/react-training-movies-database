import React from 'react'
import renderer from 'react-test-renderer'

import Home from './Home'
import moviesMock from '../../../mocks/movies-mocks'

jest.mock('./Header', () => 'Header')
jest.mock('../../shared/Loading', () => 'Loading')
jest.mock('../../shared/MoviesList', () => 'MoviesList')

describe('Home', () => {
  const props = {
    fetching: false,
    movies: moviesMock,
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

  it('renders correctly while fetching', () => {
    const fetching = true
    const component = renderer.create(<Home
      {...props}
      fetching={fetching}
    />)
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })
})
