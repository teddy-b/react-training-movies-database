import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import sessionStorage from 'redux-persist/lib/storage/session'
import thunk from 'redux-thunk'

import rootReducer from '../reducers/rootReducer'
import initialState from './initialState'

const persistConfig = {
  key: 'mdbRoot',
  storage: sessionStorage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
  persistedReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
)

export const persistor = persistStore(store)
