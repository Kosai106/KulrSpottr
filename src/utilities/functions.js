const getAltColor = (color: string, percent: number) => {
	let R = parseInt(color.substring(1, 3), 16)
	let G = parseInt(color.substring(3, 5), 16)
	let B = parseInt(color.substring(5, 7), 16)

	R = parseInt(R * (100 + percent) / 100, 0)
	G = parseInt(G * (100 + percent) / 100, 0)
	B = parseInt(B * (100 + percent) / 100, 0)

	R = (R < 255) ? R : 255
	G = (G < 255) ? G : 255
	B = (B < 255) ? B : 255

	const RR = ((R.toString(16).length === 1) ? `0${R.toString(16)}` : R.toString(16))
	const GG = ((G.toString(16).length === 1) ? `0${G.toString(16)}` : G.toString(16))
	const BB = ((B.toString(16).length === 1) ? `0${B.toString(16)}` : B.toString(16))

	return `#${RR}${GG}${BB}`
}

const getRandomColor = () => {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

const getRandomTile = (grid: array, step: number) => {
	const min = Math.ceil(0)
	const max = (grid[step] * grid[step])
	return Math.floor(Math.random() * max) + min
}

const isHighlighted = (index: number, highlight: number) => {
	if (index === highlight) {
		// NOTE: I would have used a boolean here, but it kept giving me a console error
		return 1
	} else {
		return 0
	}
}

export {
	getRandomColor,
	getAltColor,
	getRandomTile,
	isHighlighted
}
