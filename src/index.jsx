import React from 'react'
import { render } from 'react-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'

import App from './components/App'
import Loading from './components/shared/Loading'
import { store, persistor } from './store/configureStore'
import './styles/main.scss'

render(
  <Provider store={store}>
    <PersistGate loading={<Loading />} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('app')
)
