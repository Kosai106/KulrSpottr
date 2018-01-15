import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from './counter'
import highscore from './highscore'

export default combineReducers({
  router: routerReducer,
  counter,
  highscore
})
