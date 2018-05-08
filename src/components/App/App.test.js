import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import App from './App'

jest.mock('./Details', () => 'Details')
jest.mock('./Footer', () => 'Footer')
jest.mock('./Home', () => 'Home')
jest.mock('../shared/ErrorBoundary', () => 'ErrorBoundary')

describe('App', () => {
  it('renders correctly', () => {
    const component = renderer.create(<App />)
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('search changes state searchText property', () => {
    const component = shallow(<App />)

    component.instance().search('searchInput')

    expect(component.state().searchText).toEqual('searchInput')
  })

  it('changeSearchParam changes state searchBy property', () => {
    const component = shallow(<App />)

    component.instance().changeSearchParam('searchParam')

    expect(component.state().searchBy).toEqual('searchParam')
  })

  it('sort changes state sortBy property', () => {
    const component = shallow(<App />)

    component.instance().sort('sortBy')

    expect(component.state().sortBy).toEqual('sortBy')
  })

  it('selectMovie changes state selectedMovie property', () => {
    const component = shallow(<App />)

    component.instance().selectMovie(1)

    expect(component.state().selectedMovie).toEqual(1)
  })
})
