import React from 'react'
import PropTypes from 'prop-types'

const styles = {
	title: {
		color: '#203442',
		textAlign: 'center',
		fontSize: 42,
		fontWeight: 300,
	}
}

const Title = (props) => {
	return (
		<h1 style={styles.title}>
			{props.children}
		</h1>
	)
}

Title.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Title
