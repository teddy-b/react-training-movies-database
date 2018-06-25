/* @flow */

import * as React from 'react'

import renderer from 'react-test-renderer'

import App from './App'

jest.mock('./Footer', (): string => 'Footer')
jest.mock('./NotFound', (): Function => (): string => 'NotFound')
jest.mock('../shared/ErrorBoundary', (): string => 'ErrorBoundary')
jest.mock('../../containers/ConnectedDetails', (): Function => (): string => 'ConnectedDetails')
jest.mock('../../containers/ConnectedHome', (): Function => (): string => 'ConnectedHome')

describe('App', () => {
  it('renders correctly', () => {
    const component = renderer.create(<App />)
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })
})
