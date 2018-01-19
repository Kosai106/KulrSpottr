import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import Game from '../game'
import Highscores from '../highscores'

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
  navBar: {
    display: 'flex',
    padding: 16,
    width: '100%',
    justifyContent: 'center',
    backgroundColor: '#203442',
  },
  navWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    width: '100%',
    maxWidth: 1200,
  },
  navContent: {
    display: 'flex',
    flex: 1,
    left: {
      alignItems: 'flex-start'
    },
    right: {
      alignItems: 'flex-end'
    }
  },
  logo: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 300,
  },
  link: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 100,
    marginLeft: 16,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    textAlign: 'center',
  }
}

const App = () => (
  <div style={styles.container}>
    <nav style={styles.navBar}>
      <div style={styles.navWrapper}>
        <div style={[styles.navContent, styles.navContent.left]}>
          <span style={styles.logo}>KulrSpottr</span>
        </div>
        <div style={[styles.navContent, styles.navContent.right]}>
          <Link to={`${process.env.PUBLIC_URL}/`} style={styles.link}>Game</Link>
          <span style={styles.link}>&middot;</span>
          <Link to={`${process.env.PUBLIC_URL}/highscores`} style={styles.link}>Highscores</Link>
        </div>
      </div>
    </nav>

    <main style={styles.wrapper}>
      <Switch>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Game} />
        <Route exact path={`${process.env.PUBLIC_URL}/highscores`} component={Highscores} />
      </Switch>
    </main>

    <footer style={styles.footer}>
      <p>By <a href={'https://www.oesterkilde.dk?ref=kulrspottr'}>Kevin Østerkilde</a></p>
    </footer>
  </div>
)

export default App
