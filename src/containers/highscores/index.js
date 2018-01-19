import React from 'react'
import store from '../../store'
import sortBy from 'lodash/sortBy'
import reverse from 'lodash/reverse'

const styles = {
	container: {
		display: 'flex',
		flex: 1,
		justifyContent: 'center',
		padding: 16,
	},
	list: {
		display: 'flex',
		flex: 1,
		flexDirection: 'column',
		padding: 0,
	},
	listItem: {
		display: 'flex',
		justifyContent: 'space-between',
		marginBottom: 16,
		boxShadow: 'inset 0 -1px 0 0 rgba(0,0,0,0.25)',
	},
	playerName: {
		textAlign: 'left',
	},
	playerScore: {
		textAlign: 'right',
	}
}

const ScoreRow = (props) => {
	const { name, score } = props.user
	return (
		<li style={styles.listItem}>
			<span style={styles.playerName}>
				{name}
			</span>
			<span style={styles.playerScore}>
				Score: {score}
			</span>
		</li>
	)
}

const Highscores = () => {
	const data = store.getState().highscore
	const users = reverse(sortBy(data, 'score')).slice(0, 10)
	return (
		<div style={styles.container}>
			<ul style={styles.list}>
				{
					users.map((user) => (
						<ScoreRow key={user.id} user={user} />
					))
				}
			</ul>
		</div>
	)
}
export default Highscores
