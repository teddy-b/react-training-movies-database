import React from 'react'
import renderer from 'react-test-renderer'

import App from './App'
import moviesMock from '../../mocks/movies-mocks'

jest.mock('./Details', () => 'Details')
jest.mock('./Footer', () => 'Footer')
jest.mock('./Home', () => 'Home')
jest.mock('../shared/ErrorBoundary', () => 'ErrorBoundary')
jest.mock('../shared/Loading', () => 'Loading')

describe('App', () => {
  const props = {
    fetching: false,
    movies: [],
    onSearch: jest.fn(),
    onSearchMoviesByGenre: jest.fn(),
    onSearchMoviesByTitle: jest.fn(),
    onSelectMovie: jest.fn(),
    onSortMoviesByRating: jest.fn(),
    onSortMoviesByRelaseDate: jest.fn(),
    searchBy: 'title',
    selectedMovie: null,
    sortBy: 'release_date'
  }

  it('renders correctly', () => {
    const component = renderer.create(<App {...props} />)
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with movies', () => {
    const component = renderer.create(
      <App
        {...props}
        movies={moviesMock}
      />
    )
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with selectedMovie', () => {
    const component = renderer.create(
      <App
        {...props}
        movies={moviesMock}
        selectedMovie={moviesMock[0].id}
      />
    )
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })
})
