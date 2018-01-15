import React from 'react'
import PropTypes from 'prop-types'

const styles = {
	score: {
		color: '#203442',
		textAlign: 'center',
		fontSize: 28,
		fontWeight: 300,
	}
}

const Score = (props) => {
	return (
		<h1 style={styles.score}>
			{props.children}
		</h1>
	)
}

Score.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Score
