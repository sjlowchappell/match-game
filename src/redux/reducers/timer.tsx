import { START_TIMER, TICK, STOP_TIMER, RESET_TIMER } from '../actionTypes';

interface TimerState {
	isOn: boolean;
	time: number;
	offset: number;
	interval: number;
}
interface ActionState {
	type: string;
	payload: {
		offset: number;
		interval: number;
		time: number;
	};
}

const initialState: TimerState = {
	isOn: false,
	time: 30000,
	offset: 0,
	interval: 0,
};

export default function(state = initialState, action: ActionState) {
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
