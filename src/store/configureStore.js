/* @flow */

import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import sessionStorage from 'redux-persist/lib/storage/session'
import thunk from 'redux-thunk'
import immutableTransform from 'redux-persist-transform-immutable'

import type { Reducer, Store } from 'redux'

import rootReducer from '../reducers/rootReducer'
import initialState from './initialState'

import type { MoviesAction, State } from '../types'

const persistConfig = {
  transforms: [immutableTransform()],
  key: 'mdbRoot',
  storage: sessionStorage
}

const persistedReducer: Reducer<State, MoviesAction> = persistReducer(persistConfig, rootReducer)

export const store: Store<State, MoviesAction> = createStore(
  persistedReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
)

export const persistor = persistStore(store)
