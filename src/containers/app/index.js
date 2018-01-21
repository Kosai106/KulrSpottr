import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import Game from '../game'
import Highscores from '../highscores'
import { Header, Footer } from '../../components'

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    maxWidth: '100vw',
  },
  wrapper: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    maxWidth: 1200,
  },
}

const App = () => (
  <div style={styles.container}>
    <Header />

    <main style={styles.wrapper}>
      <Switch>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Game} />
        <Route exact path={`${process.env.PUBLIC_URL}/highscores`} component={Highscores} />
      </Switch>
    </main>

    <Footer />
  </div>
)

export default App
