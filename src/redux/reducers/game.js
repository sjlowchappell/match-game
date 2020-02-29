import { START_GAME, PAUSE_GAME, END_GAME, INCREMENT_TIMER } from '../actionTypes.js';

const initialState = {
	playing: false,
	victory: null,
	time: 30,
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
		case INCREMENT_TIMER: {
			let timerVal = state.time;
			timerVal--;
			return {
				...state,
				time: timerVal,
			};
		}
		default:
			return state;
	}
}
