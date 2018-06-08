import React from 'react'
import { MemoryRouter } from 'react-router-dom'

import { shallow, mount } from 'enzyme'
import renderer from 'react-test-renderer'

import SearchBar from './SearchBar'
import { SEARCH_BY } from '../../../../../constants/global'

jest.mock('../../../../shared/Logo', () => 'data-logo')

describe('SearchBar', () => {
  const props = {
    onSearch: jest.fn(),
    onSearchMoviesByGenre: jest.fn(),
    onSearchMoviesByTitle: jest.fn(),
    searchBy: SEARCH_BY.title
  }

  it('renders correctly with search by title', () => {
    const component = renderer.create(
      <MemoryRouter>
        <SearchBar
          {...props}
          searchBy={SEARCH_BY.title}
        />
      </MemoryRouter>
    )
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with search by genres', () => {
    const component = renderer.create(
      <MemoryRouter>
        <SearchBar
          {...props}
          searchBy={SEARCH_BY.genre}
        />
      </MemoryRouter>
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
        searchBy={SEARCH_BY.genre}
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
        searchBy={SEARCH_BY.title}
      />
    )

    component.find('button').at(1).simulate('click')

    expect(onSearchMoviesByGenreMock).toBeCalled()
  })

  it('should trigger onSearch onClick', () => {
    const onSearchMock = jest.fn()
    const component = mount(
      <MemoryRouter>
        <SearchBar
          {...props}
          onSearch={onSearchMock}
        />
      </MemoryRouter>
    )

    component.find('input').at(0).simulate('change', {
      target: {
        value: 'New value'
      }
    })
    component.find('button').at(2).simulate('click')

    expect(onSearchMock).toBeCalled()
  })
})
