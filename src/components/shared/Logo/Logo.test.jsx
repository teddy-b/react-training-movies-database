/* @flow */

import * as React from 'react'

import renderer from 'react-test-renderer'

import Logo from './Logo'

describe('Logo', () => {
  it('renders correctly', () => {
    const component = renderer.create(<Logo />)
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })
})
