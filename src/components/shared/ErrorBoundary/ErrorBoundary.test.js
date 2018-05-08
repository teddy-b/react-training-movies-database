import React from 'react'
import renderer from 'react-test-renderer'
import { shallow, mount } from 'enzyme'

import ErrorBoundary from './ErrorBoundary'

describe('ErrorBoundary', () => {
  it('renders correctly without errors', () => {
    const SomeComponent = () => (
      <div>Some data</div>
    )
    const component = renderer.create(
      <ErrorBoundary>
        <SomeComponent />
      </ErrorBoundary>
    )
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should catch errors with componentDidCatch', () => {
    const SomeComponent = () => {
      throw new Error('Error thrown from problem child')

      return (
        <div>Some data</div>
      )
    }

    const spy = jest.spyOn(ErrorBoundary.prototype, 'componentDidCatch')

    const component = mount(
      <ErrorBoundary>
        <SomeComponent />
      </ErrorBoundary>
    )

    expect(ErrorBoundary.prototype.componentDidCatch).toHaveBeenCalled()
  })
})
