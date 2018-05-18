import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import SortInfo from './SortInfo'

describe('SortInfo', () => {
  const props = {
    count: 10,
    onSortMoviesByRating: jest.fn(),
    onSortMoviesByRelaseDate: jest.fn(),
    sortBy: 'release_date'
  }

  it('renders correctly with sort by release_date', () => {
    const component = renderer.create(<SortInfo {...props} />)
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with sort by vote_average', () => {
    const component = renderer.create(
      <SortInfo
        {...props}
        sortBy="vote_average"
      />
    )
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should trigger onSortMoviesByRelaseDate onClick', () => {
    const onSortMoviesByRelaseDateMock = jest.fn()
    const component = shallow(
      <SortInfo
        {...props}
        onSortMoviesByRelaseDate={onSortMoviesByRelaseDateMock}
        sortBy="vote_average"
      />
    )

    component.find('button').at(0).simulate('click')

    expect(onSortMoviesByRelaseDateMock).toBeCalled()
  })

  it('should trigger onSortMoviesByRating onClick', () => {
    const onSortMoviesByRatingMock = jest.fn()
    const component = shallow(
      <SortInfo
        {...props}
        onSortMoviesByRating={onSortMoviesByRatingMock}
      />
    )

    component.find('button').at(1).simulate('click')

    expect(onSortMoviesByRatingMock).toBeCalled()
  })
})
