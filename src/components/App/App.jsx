import React from 'react'

import './App.scss'

import {
  HelloWorldCreateElement,
  HelloWorldReactComponent,
  HelloWorldReactPureComponent,
  HelloWorldFunctionalComponent
} from '../helloWorld'
import Link from '../Link'
import CheckboxWithLabel from '../CheckboxWithLabel'

const App = () => (
  <div className='container'>
    <header className='header'>
      <h1>Hello World from React!</h1>
    </header>
    <div className='helloWorld'>
      <HelloWorldCreateElement />
      <HelloWorldReactComponent />
      <HelloWorldReactPureComponent />
      <HelloWorldFunctionalComponent />
    </div>
    <div className='tests'>
      <h2 >Tests</h2>
      <div className='link'>
        <h3>Snapshot testing</h3>
        <Link page="http://www.facebook.com">Facebook</Link>
      </div>
      <div className='checkbox'>
        <h3>DOM testing</h3>
        <CheckboxWithLabel labelOn="On" labelOff="Off" />
      </div>
    </div>
  </div>
)

export default App
