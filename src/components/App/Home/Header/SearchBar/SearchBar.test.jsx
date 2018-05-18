import React from 'react'
import renderer from 'react-test-renderer'
import { shallow, mount } from 'enzyme'

import SearchBar from './SearchBar'

jest.mock('../../../../shared/Logo', () => 'data-logo')

describe('SearchBar', () => {
  const props = {
    onSearch: jest.fn(),
    onSearchMoviesByGenre: jest.fn(),
    onSearchMoviesByTitle: jest.fn(),
    searchBy: 'title'
  }

  it('renders correctly with search by title', () => {
    const component = renderer.create(<SearchBar {...props} />)
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with search by genres', () => {
    const component = renderer.create(
      <SearchBar
        {...props}
        searchBy="genres"
      />
    )
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should trigger onSearchMoviesByTitle onClick', () => {
    const onSearchMoviesByTitleMock = jest.fn()
    const component = shallow(
      <SearchBar
        {...props}
        onSearchMoviesByTitle={onSearchMoviesByTitleMock}
        searchBy="genres"
      />
    )

    component.find('button').at(0).simulate('click')

    expect(onSearchMoviesByTitleMock).toBeCalled()
  })

  it('should trigger onSearchMoviesByGenre onClick', () => {
    const onSearchMoviesByGenreMock = jest.fn()
    const component = shallow(
      <SearchBar
        {...props}
        onSearchMoviesByGenre={onSearchMoviesByGenreMock}
      />
    )

    component.find('button').at(1).simulate('click')

    expect(onSearchMoviesByGenreMock).toBeCalled()
  })

  it('should trigger onSearch onClick', () => {
    const onSearchMock = jest.fn()
    const component = mount(
      <SearchBar
        {...props}
        onSearch={onSearchMock}
      />
    )

    component.find('input').at(0).simulate('change', { target: { value: 'New value' } })
    component.find('button').at(2).simulate('click')

    expect(onSearchMock).toBeCalled()
  })

  it('should trigger onSearch onKeyPress', () => {
    const onSearchMock = jest.fn()
    const component = mount(
      <SearchBar
        {...props}
        onSearch={onSearchMock}
        searchBy="title"
      />
    )

    component.find('input').at(0)
      .simulate('change', { target: { value: 'New value' } })
      .simulate('keypress', { key: 'Enter' })

    expect(onSearchMock).toBeCalled()
  })
})
