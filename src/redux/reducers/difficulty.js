import { CHOOSE_DIFFICULTY } from '../actionTypes.js';

const initialState = {
	difficulty: 'easy',
};

export default function(state = initialState, action) {
	switch (action.type) {
		case CHOOSE_DIFFICULTY: {
			const { difficultyLevel } = action.payload;
			return {
				...state,
				difficulty: difficultyLevel,
			};
		}
		default:
			return state;
	}
}
