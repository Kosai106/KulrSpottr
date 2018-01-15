import React from 'react'
import PropTypes from 'prop-types'

const _getSize = (grid: number) => {
	return 100 / grid
}

const Tile = (props) => {
	const isHighlighted = props.highlighted ? props.color[1] : props.color[0]
	return (
		<div
			style={{
				width: `${_getSize(props.grid)}%`,
				height: `${_getSize(props.grid)}%`,
				boxShadow: `inset 0 0 0 1px #FAFAFA`,
				backgroundColor: isHighlighted,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				cursor: 'pointer',
			}}
			onClick={props.onClick}
		/>
	)
}

Tile.propTypes = {
	highlighted: PropTypes.number.isRequired,
	grid: PropTypes.number.isRequired,
	color: PropTypes.array.isRequired,
}

export default Tile
