/**
 * @flow
 * Using redux-persist v5.
 */


import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistCombineReducers, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { rootReducer } from '../reducers/root-reducer'
import { rootSaga } from '../sagas/root-saga'

const sagaMiddleware = createSagaMiddleware()

// redux-persist v5 configuration:
// Persistor configuration, default is AsyncStorage;
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth']
}

// Reducer, persisted.
const reducers = persistCombineReducers(persistConfig, rootReducer)

const store = createStore(
    reducers,
    compose(applyMiddleware(sagaMiddleware))
  )
  sagaMiddleware.run(rootSaga)

  const persistor = persistStore(store, {}, () => {})

  export { store, persistor };
