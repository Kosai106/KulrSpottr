import React from 'react'
import PropTypes from 'prop-types'

const styles = {
	board: {
		width: 500,
		height: 500,
		padding: 20,
		backgroundColor: '#203442',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		borderRadius: 8,
	}
}

const Board = (props) => {
	return (
		<div style={styles.board}>
			{props.children}
		</div>
	)
}

Board.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Board
