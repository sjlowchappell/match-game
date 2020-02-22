import { FLIP_CARD } from '../actionTypes.js';

const initialState = {
	hidden: true,
};

export default function(state = initialState, action) {
	switch (action.type) {
		case FLIP_CARD: {
			return {
				...state,
				hidden: !state.hidden,
			};
		}
		default:
			return state;
	}
}
