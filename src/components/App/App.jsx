/* @flow */

import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Footer from './Footer'
import NotFound from './NotFound'
import ErrorBoundary from '../shared/ErrorBoundary'
import ConnectedDetails from '../../containers/ConnectedDetails'
import ConnectedHome from '../../containers/ConnectedHome'

const App = (): React.Node => (
  <ErrorBoundary>
    <Router>
      <Switch>
        <Route path="/" exact component={ConnectedHome} />
        <Route path="/search/:searchBy/:query" component={ConnectedHome} />
        <Route path="/film/:id" component={ConnectedDetails} />
        <Route component={NotFound} />
      </Switch>
    </Router>
    <Footer />
  </ErrorBoundary>
)

export default App
