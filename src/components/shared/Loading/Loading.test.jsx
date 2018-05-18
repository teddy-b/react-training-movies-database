import React from 'react'
import renderer from 'react-test-renderer'

import Loading from './Loading'

jest.mock('react-loading', () => 'ReactLoading')

describe('Loading', () => {
  it('renders correctly', () => {
    const component = renderer.create(<Loading />)
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })
})
