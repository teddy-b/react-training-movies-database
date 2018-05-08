import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import MovieItem from './MovieItem'
import { moviesMock } from '../../../../mocks/movies-mocks'

describe('Movie', () => {
  const singleMovieMock = moviesMock[0]

  it('renders correctly', () => {
    const component = renderer.create(
      <MovieItem
        key={singleMovieMock.id}
        {...singleMovieMock}
        onSelectMovie={jest.fn()}
      />
    )
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should trigger onSelectMovie onClick', () => {
    const onSelectMovieMock = jest.fn()
    const component = shallow(
      <MovieItem
        key={singleMovieMock.id}
        {...singleMovieMock}
        onSelectMovie={onSelectMovieMock}
      />
    )

    component.find('figure').at(0).simulate('click')

    expect(onSelectMovieMock).toHaveBeenCalled()
  })
})
