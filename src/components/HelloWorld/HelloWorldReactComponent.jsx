import React, { Component } from 'react'

export class HelloWorldReactComponent extends Component {
  render() {
    console.log('Sourcemap: HelloWorldReactComponent.jsx:5')
    return (
      <h3>Hello React via React.Component!</h3>
    )
  }
}
