import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import store from '../../store'
import { addHighscore, addHighscoreAsync } from '../../modules/highscore'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'

import { Board, Tile, Score, Title } from '../../components'
import { getRandomColor, getAltColor, getRandomTile, isHighlighted } from '../../utilities/functions'

class Game extends Component {
	constructor(props) {
		super(props)
		this.startGame = this.startGame.bind(this)
		this.handleTileClick = this.handleTileClick.bind(this)
		this.state = {
			gameLogic: {
				grid: [2, 3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9],
				step: 0,
				maxStep: 0,
				color: '',
				highlighted: 0,
			},

			highscore: {
				name: "John Doe",
			},

			modal: {
				isOpen: false,
			}
		}
	}

	componentDidMount = () => {
		this.startGame()
	}

	startGame = () => {
		const { grid, step } = this.state.gameLogic
		this.setState(prevState => ({
			...prevState,
			gameLogic: {
				...prevState.gameLogic,
				step: 0,
				maxStep: grid.length,
				color: getRandomColor(step),
				highlighted: getRandomTile(grid, step),
			},
			highscore: {
				name: "John Doe",
			}
		}))
	}

	nextLevel = () => {
		const { grid, step } = this.state.gameLogic
		this.setState(prevState => ({
			gameLogic: {
				...prevState.gameLogic,
				step: step + 1,
				color: getRandomColor(step),
				highlighted: getRandomTile(grid, step),
			}
		}))
	}

	winGame = () => {
		this.setState(prevState => ({
			...prevState,
			highscore: {
				name: "John Doe",
			}
		}))
		this.handleModalOpen()
	}

	loseGame = () => {
		this.setState(prevState => ({
			...prevState,
			highscore: {
				name: "John Doe",
			}
		}))
		this.handleModalOpen()
	}

	handleModalOpen = () => {
		this.setState({ modal: { isOpen: true } })
	}

	handleModalClose = () => {
		const { name } = this.state.highscore
		const { step } = this.state.gameLogic

		this.setState({ modal: { isOpen: false } })
		this.props.addHighscore(name, step)
		this.startGame()
	}

	handleTileClick = (index: number) => {
		const { step, maxStep, highlighted } = this.state.gameLogic
		if (step === maxStep) {
			this.winGame()
		} else {
			if (index === highlighted) {
				this.nextLevel()
			} else {
				this.loseGame()
			}
		}
	}

	render() {
		const { grid, step, maxStep, color, highlighted } = this.state.gameLogic
		const { isOpen } = this.state.modal

		const styles = {
			container: {
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				maxWidth: '100vw',
				padding: 16,
			},
			details: {
				width: '100%',
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'space-between',
				alignItems: 'center',
			},
			reset: {
				position: 'absolute',
				bottom: 16,
				right: 16,
				textAlign: 'center',
				padding: 16,
				background: '#203442',
				color: '#FAFAFA',
				borderRadius: 4,
				fontWeight: 500,
				cursor: 'pointer',
			},
		}

		return (
			<section style={styles.container}>
				<Dialog
					title='Oh no'
					actions={[<FlatButton label='Submit' primary={true} onClick={this.handleModalClose} />]}
					modal={false}
					open={isOpen}
					onRequestClose={this.handleClose}
				>
					All your base are belong to us. You got a score of: {step}
					<TextField
						name={'Name'}
						autoFocus={true}
						onChange={(e) => this.setState({ highscore: { name: e.target.value } })}
					/>
				</Dialog>
				<div style={styles.details}>
					<Title>KulrSpottr</Title>
					<Score>Step: {step}</Score>
				</div>
				<Board>
					{
						[...Array(grid[step] * grid[step])].map((x, i) => {
							return (
								<Tile
									key={i}
									grid={grid[step]}
									color={color}
									altColor={getAltColor(color, (maxStep - step))}
									highlighted={isHighlighted(i, highlighted)}
									onClick={(e) => this.handleTileClick(i)}
								/>
							)
						})
					}
				</Board>
				{
					<div style={styles.reset} onClick={() => this.startGame()}>{'Reset'.toUpperCase()}</div>
				}
			</section>
		)
	}
}

const mapStateToProps = state => ({
	name: state.highscore.name,
})

const mapDispatchToProps = dispatch => bindActionCreators({
	addHighscore,
	addHighscoreAsync,
}, dispatch)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Game)
