import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import store from '../../store'
import { addHighscore, addHighscoreAsync } from '../../modules/highscore'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'

import { Board, Tile, Score, Title } from '../../components'
import { getRandomColor, getRandomTile, isHighlighted } from '../../utilities/functions'

class Game extends Component {
	constructor(props) {
		super(props)
		this.startGame = this.startGame.bind(this)
		this.handleTileClick = this.handleTileClick.bind(this)
		this.state = {
			name: "Marianna D'Amico Jauregui",
			step: 0,
			grid: [2, 3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9],
			highlighted: undefined,
			color: [],

			modal: {
				open: false,
			}
		}
	}

	componentDidMount = () => {
		this.startGame()
	}

	startGame = () => {
		this.setState({
			step: 0,
			highlighted: getRandomTile(this.state.grid, this.state.step),
			color: getRandomColor(this.state.step),
		})
		console.log(store.getState().highscore)
	}

	handleModalOpen = () => {
		const { name, step } = this.state
		this.props.addHighscore(name, step)
		this.setState({ modal: { open: true } })
	}

	handleModalClose = () => {
		this.setState({ modal: { open: false } })
	}

	handleTileClick = (index: number) => {
		const { step, highlighted, grid } = this.state
		if (step === 31) {
			alert(`Congratulations!\n\nA winner is you.`)
			//TODO: Replace this with a modal allowing for name input
		} else {
			if (index === highlighted) {
				this.setState({
					step: step + 1,
					highlighted: getRandomTile(grid, step),
					color: getRandomColor(step),
				})
			} else {
				//alert(`Oh no!\n\nAll your base are belong to us.\n\nYou got a score of: ${step}`)
				this.handleModalOpen()
			}
		}
	}

	render() {
		const { step, grid, color, highlighted } = this.state
		const styles = {
			container: {
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				maxWidth: '100vw',
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
					title="Oh no"
					actions={[<FlatButton label="Submit" primary={true} onClick={this.handleModalClose} />]}
					modal={false}
					open={this.state.modal.open}
					onRequestClose={this.handleClose}
				>
					All your base are belong to us. You got a score of: {step}
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
	name: state.name,
	score: state.steps,
})

const mapDispatchToProps = dispatch => bindActionCreators({
	addHighscore,
	addHighscoreAsync,
}, dispatch)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Game)
