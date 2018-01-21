import React from 'react'

const styles = {
	footer: {
		position: 'absolute',
		bottom: 0,
		textAlign: 'center',
	}
}

const Footer = () => (
	<footer style={styles.footer}>
		<p>By <a href={'https://www.oesterkilde.dk?ref=kulrspottr'}>Kevin Østerkilde</a></p>
	</footer>
)

export default Footer