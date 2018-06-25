/* @flow */

import * as React from 'react'

import renderer from 'react-test-renderer'

import MoviesList from './MoviesList'
import { ITEMS_TO_SHOW } from '../../../constants/global'
import moviesMock from '../../../mocks/movies-mocks'

jest.mock('../Loading', (): string => 'Loading')
jest.mock('./MovieItem', (): string => 'MovieItem')

describe('MoviesList', () => {
  const props = {
    count: 0,
    fetching: false,
    movies: [],
    onSelectMovie: jest.fn()
  }

  it('renders correctly with no data', () => {
    const component = renderer.create(<MoviesList {...props} />)
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with data', () => {
    const component = renderer.create(
      <MoviesList
        {...props}
        count={moviesMock.total}
        movies={moviesMock.data}
      />
    )
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with more items to show', () => {
    const movies = []
    Array.from({
      length: ITEMS_TO_SHOW + 1
    }).forEach((v: void, i: number) => {
      movies.push({
        key: i,
        ...moviesMock.data[0]
      })
    })
    const component = renderer.create(
      <MoviesList
        {...props}
        count={movies.length}
        movies={movies}
      />
    )
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders correctly while fetching', () => {
    const fetching = true
    const component = renderer.create(
      <MoviesList
        {...props}
        fetching={fetching}
      />
    )
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })
})
