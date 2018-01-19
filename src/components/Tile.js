import React from 'react'
import PropTypes from 'prop-types'

const Tile = (props) => {
	const isHighlighted = props.highlighted ? props.altColor : props.color
	const getSize = `${100 / props.grid}%`

	return (
		<div
			style={{
				width: getSize,
				height: getSize,
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
	grid: PropTypes.number.isRequired,
	color: PropTypes.string.isRequired,
	altColor: PropTypes.string,
	highlighted: PropTypes.number.isRequired,
}

export default Tile
