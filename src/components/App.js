import React from 'react'

import {
  HelloWorldCreateElement,
  HelloWorldReactComponent,
  HelloWorldReactPureComponent,
  HelloWorldFunctionalComponent
} from './helloWorld'

const App = () => (
  <div className='container'>
    <header>
      <h1>Hello World from React!</h1>
    </header>
    <div className='helloWorld'>
      <HelloWorldCreateElement />
      <HelloWorldReactComponent />
      <HelloWorldReactPureComponent />
      <HelloWorldFunctionalComponent />
    </div>
  </div>
)

export default App
