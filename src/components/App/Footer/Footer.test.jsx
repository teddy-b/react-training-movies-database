/* @flow */

import * as React from 'react'

import renderer from 'react-test-renderer'

import Footer from './Footer'

jest.mock('../../shared/Logo', (): string => 'Logo')

describe('Footer', () => {
  it('renders correctly', () => {
    const component = renderer.create(<Footer />)
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })
})
