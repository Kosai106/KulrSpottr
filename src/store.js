import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import rootReducer from './modules'
import { loadState, saveState } from './utilities/localStorage'

export const history = createHistory()

const initialState = {}
const persistedState = loadState()
const enhancers = []
const middleware = [
  thunk,
  routerMiddleware(history)
]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
  autoRehydrate(),
)

const store = createStore(
  rootReducer,
  // initialState,
  persistedState,
  composedEnhancers,
)

persistStore(store)

export default store