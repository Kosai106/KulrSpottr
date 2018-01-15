import React from 'react'
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

const data = [
	{ id: 1, name: "Ericka MacIlraith", score: 21 },
	{ id: 2, name: "Lemmy Hayer", score: 8 },
	{ id: 3, name: "Georgina McCullock", score: 20 },
	{ id: 4, name: "Griffith Abelson", score: 3 },
	{ id: 5, name: "Ellen Bickmore", score: 16 },
	{ id: 6, name: "Claudette Dyche", score: 24 },
	{ id: 7, name: "Brade Kraft", score: 21 },
	{ id: 8, name: "Hadrian Liepmann", score: 11 },
	{ id: 9, name: "Alfons O'Currigan", score: 2 },
	{ id: 10, name: "Gwenneth Sliman", score: 19 },
	{ id: 11, name: "John Doe", score: 1 }
]

const users = reverse(sortBy(data, 'score')).slice(0, 10)

const ScoreRow = (props) => (
	<li style={styles.listItem}>
		<span style={styles.playerName}>
			{props.user.name}
		</span>
		<span style={styles.playerScore}>
			Score: {props.user.score}
		</span>
	</li>
)

const Highscores = (props) => {
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
