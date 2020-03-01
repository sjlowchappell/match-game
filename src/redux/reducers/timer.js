import { START_TIMER, TICK, STOP_TIMER, RESET_TIMER } from '../actionTypes.js';

const initialState = {
	isOn: false,
	time: 30000,
};

export default function(state = initialState, action) {
	switch (action.type) {
		case START_TIMER: {
			const { offset, interval } = action.payload;
			return {
				...state,
				isOn: true,
				offset,
				interval,
			};
		}
		case TICK: {
			const { time } = action.payload;
			return {
				...state,
				time: state.time - (time - state.offset),
				offset: time,
			};
		}
		case STOP_TIMER: {
			clearInterval(state.interval);
			return {
				...state,
				isOn: false,
			};
		}
		case RESET_TIMER: {
			clearInterval(state.interval);
			return {
				...initialState,
			};
		}
		default:
			return state;
	}
}
