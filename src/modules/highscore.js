import { v4 } from 'node-uuid'
import * as types from './actionTypes'

const initialState = [{
	id: v4(),
	name: 'John Doe',
	score: 0,
}]

export default (state = initialState, action) => {
	switch (action.type) {
		case types.HIGHSCORE_ADD_SUCCESS:
			return [
				...state,
				{
					id: v4(),
					name: action.name,
					score: action.score,
				}
			]
		default:
			return state
	}
}

export const addHighscore = (name: string, score: number) => {
	return (dispatch, getState) => {
		dispatch({
			type: types.HIGHSCORE_ADD_SUCCESS,
			name,
			score
		})
	}
}

export const addHighscoreAsync = (name: string, score: number) => {
	return dispatch => {
		return setTimeout(() => {
			dispatch({
				type: types.HIGHSCORE_ADD_SUCCESS,
				name,
				score
			})
		}, 3000)
	}
}
