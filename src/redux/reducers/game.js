import { START_GAME, PAUSE_GAME, END_GAME, RESET_GAME } from '../actionTypes.js';

const initialState = {
	playing: false,
	victory: null,
	time: 30,
};

export default function(state = initialState, action) {
	switch (action.type) {
		case START_GAME: {
			return {
				...state,
				playing: true,
			};
		}
		case PAUSE_GAME: {
			return {
				...state,
				playing: false,
			};
		}
		case END_GAME: {
			return {
				...state,
				playing: false,
				victory: action.payload.endType,
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
