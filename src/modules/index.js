import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import highscore from './highscore'

export default combineReducers({
  router: routerReducer,
  highscore
})
