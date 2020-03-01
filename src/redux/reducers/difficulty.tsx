import { CHOOSE_DIFFICULTY, RESET_GAME } from '../actionTypes';

interface DeckState {
	difficulty: string;
}
interface ActionState {
	type: string;
	payload: {
		difficultyLevel: string;
	};
}

const initialState: DeckState = {
	difficulty: 'easy',
};

export default function(state = initialState, action: ActionState) {
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
