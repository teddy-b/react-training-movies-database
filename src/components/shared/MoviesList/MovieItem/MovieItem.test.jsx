import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import MovieItem from './MovieItem'
import moviesMock from '../../../../mocks/movies-mocks'

describe('Movie', () => {
  const singleMovieMock = moviesMock[0]
  const onSelectMovieMock = jest.fn()
  const props = {
    ...singleMovieMock,
    key: singleMovieMock.id,
    onSelectMovie: onSelectMovieMock
  }

  it('renders correctly', () => {
    const component = renderer.create(<MovieItem {...props} />)
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should trigger onSelectMovie onClick', () => {
    const component = shallow(<MovieItem {...props} />)

    component.find('figure').at(0).simulate('click')

    expect(onSelectMovieMock).toHaveBeenCalled()
  })
})
