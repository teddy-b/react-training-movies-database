import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor } from './configureStore'
import ConnectedApp from './containers/ConnectedApp'
import Loading from './components/shared/Loading'
import './styles/main.scss'

render(
  <Provider store={store}>
    <PersistGate loading={<Loading />} persistor={persistor}>
      <ConnectedApp />
    </PersistGate>
  </Provider>,
  document.getElementById('app')
)
