import { START_TIMER, INCREMENT_TIMER, STOP_TIMER } from '../actionTypes.js';

const initialState = {
	isOn: false,
	time: 0,
};

export default function(state = initialState, action) {
	console.log(action.type);
	switch (action.type) {
		case START_TIMER: {
			return {
				...state,
				isOn: true,
				offset: action.offset,
				interval: action.interval,
			};
		}
		case INCREMENT_TIMER: {
			return {
				...state,
				time: state.time + (action.time - state.offset),
				offset: action.time,
			};
		}
		case STOP_TIMER: {
			clearInterval(state.interval);
			return {
				...initialState,
			};
		}
		default:
			return state;
	}
}
