import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import throttle from 'lodash/throttle'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import store, { history } from './store'
import { loadState, saveState } from './utilities/localStorage'

import App from './containers/app'

import 'sanitize.css/sanitize.css'
import './index.css'

store.subscribe(throttle(() => {
  saveState({
    highscores: store.getState().highscores
  })
}), 1000)

const muiTheme = getMuiTheme({
  flatButton: {
    primaryTextColor: '#FC3565',
  },
});

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <MuiThemeProvider muiTheme={muiTheme}>
        <App />
      </MuiThemeProvider>
    </ConnectedRouter>
  </Provider>,
  document.querySelector('#root')
)
