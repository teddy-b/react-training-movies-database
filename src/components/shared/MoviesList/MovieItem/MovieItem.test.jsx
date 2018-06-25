/* @flow */

import * as React from 'react'
import { MemoryRouter } from 'react-router-dom'

import { mount } from 'enzyme'
import renderer from 'react-test-renderer'

import MovieItem from './MovieItem'
import moviesMock from '../../../../mocks/movies-mocks'

describe('MovieItem', () => {
  const singleMovieMock = moviesMock.data[0]
  const onSelectMovieMock = jest.fn()
  const props = {
    ...singleMovieMock,
    key: singleMovieMock.id,
    onSelectMovie: onSelectMovieMock
  }

  it('renders correctly', () => {
    const component = renderer.create(
      <MemoryRouter>
        <MovieItem {...props} />
      </MemoryRouter>
    )
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should trigger onSelectMovie onClick', () => {
    const component = mount(
      <MemoryRouter>
        <MovieItem {...props} />
      </MemoryRouter>
    )

    component.find('Link').at(0).simulate('click')

    expect(onSelectMovieMock).toHaveBeenCalled()
  })
})
