import { CHOOSE_DIFFICULTY, RESET_GAME } from '../actionTypes.tsx';

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
		case RESET_GAME: {
			return {
				...initialState,
			};
		}
		default:
			return state;
	}
}
