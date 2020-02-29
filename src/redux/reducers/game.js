import { START_GAME, PAUSE_GAME, END_GAME } from '../actionTypes.js';

const initialState = {
	playing: false,
	victory: null,
};

export default function(state = initialState, action) {
	console.log(action.type);
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
		default:
			return state;
	}
}
