import React from 'react'
import { Link } from 'react-router-dom'

const styles = {
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
			flex: 0,
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
}

//NOTE: Neccessary hack for Firefox
const leftContentStyle = Object.assign({},
	styles.navContent, styles.navContent.left
)
const rightContentStyle = Object.assign({},
	styles.navContent, styles.navContent.right
)

const Header = () => (
	<nav style={styles.navBar}>
		<div style={styles.navWrapper}>
			<div style={leftContentStyle}>
				<span style={styles.logo}>KulrSpottr</span>
			</div>
			<div style={rightContentStyle}>
				<Link to={`${process.env.PUBLIC_URL}/`} style={styles.link}>Game</Link>
				<span style={styles.link}>&middot;</span>
				<Link to={`${process.env.PUBLIC_URL}/highscores`} style={styles.link}>Highscores</Link>
			</div>
		</div>
	</nav>
)

export default Header
