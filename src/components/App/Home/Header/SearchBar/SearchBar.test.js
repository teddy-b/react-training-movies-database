import React from 'react'
import renderer from 'react-test-renderer'
import { shallow, mount } from 'enzyme'

import SearchBar from './SearchBar'

jest.mock('../../../../shared/Logo', () => 'Logo')

describe('SearchBar', () => {
  it('renders correctly', () => {
    const component = renderer.create(
      <SearchBar
        onChangeSearchParam={jest.fn()}
        onSearch={jest.fn()}
      />
    )
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })
  
  it('should trigger onChangeSearchParam onClick', () => {
    const onChangeSearchParamMock = jest.fn()
    const component = shallow(
      <SearchBar
        onChangeSearchParam={onChangeSearchParamMock}
        onSearch={jest.fn()}
      />
    )
  
    component.find('button').at(0).simulate('click')
  
    expect(onChangeSearchParamMock.mock.calls.length).toBe(1)
  
    component.find('button').at(1).simulate('click')
  
    expect(onChangeSearchParamMock.mock.calls.length).toBe(2)
  })
  
  it('should trigger onChangeSearchParam onClick', () => {
    const onSearchMock = jest.fn()
    const component = mount(
      <SearchBar
        onChangeSearchParam={jest.fn()}
        onSearch={onSearchMock}
      />
    )
  
    component.find('input').at(0).simulate('change', { target: { value: 'New value' } })
  
    component.find('button').at(2).simulate('click')
  
    expect(onSearchMock).toBeCalled()
  })
})
