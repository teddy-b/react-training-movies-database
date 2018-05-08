import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import SortInfo from './SortInfo'
import { moviesMock } from '../../../../../mocks/movies-mocks'

describe('SortInfo', () => {
  it('renders correctly', () => {
    const component = renderer.create(
      <SortInfo
        count={moviesMock.length}
        onSort={jest.fn()}
      />
    )
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })
  
  it('should trigger onSort onClick', () => {
    const onSortMock = jest.fn()
    const component = shallow(<SortInfo
      count={moviesMock.length}
      onSort={onSortMock}
    />)
  
    component.find('a').at(0).simulate('click')
  
    expect(onSortMock.mock.calls.length).toBe(1)
  
    component.find('a').at(1).simulate('click')
  
    expect(onSortMock.mock.calls.length).toBe(2)
  })
})
