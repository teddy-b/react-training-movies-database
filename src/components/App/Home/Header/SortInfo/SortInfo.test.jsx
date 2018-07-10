/* @flow */

import * as React from 'react'

import { mount } from 'enzyme'
import renderer from 'react-test-renderer'

import SortInfo from './SortInfo'
import { SORT_BY } from '../../../../../constants/global'

describe('SortInfo', () => {
  const props = {
    count: 24,
    onSortMoviesByRating: jest.fn(),
    onSortMoviesByRelaseDate: jest.fn(),
    sortBy: SORT_BY.releaseDate
  }

  it('renders correctly with sort by release_date', () => {
    const component = renderer.create(
      <SortInfo
        {...props}
        sortBy={SORT_BY.releaseDate}
      />
    )
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with sort by vote_average', () => {
    const component = renderer.create(
      <SortInfo
        {...props}
        sortBy={SORT_BY.rating}
      />
    )
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should trigger onSortMoviesByRelaseDate onClick', () => {
    const onSortMoviesByRelaseDateMock = jest.fn()
    const component = mount(
      <SortInfo
        {...props}
        onSortMoviesByRelaseDate={onSortMoviesByRelaseDateMock}
        sortBy={SORT_BY.rating}
      />
    )

    component.find('button').at(0).simulate('click')

    expect(onSortMoviesByRelaseDateMock).toBeCalled()
  })

  it('should trigger onSortMoviesByRating onClick', () => {
    const onSortMoviesByRatingMock = jest.fn()
    const component = mount(
      <SortInfo
        {...props}
        onSortMoviesByRating={onSortMoviesByRatingMock}
      />
    )

    component.find('button').at(1).simulate('click')

    expect(onSortMoviesByRatingMock).toBeCalled()
  })
})
