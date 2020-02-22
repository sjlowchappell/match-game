import { FLIP_CARD } from '../actionTypes.js';

const initialState = {
	allIds: [1, 2, 3],
	byIds: {
		1: {
			hidden: true,
		},
		2: {
			hidden: true,
		},
		3: {
			hidden: true,
		},
	},
};

export default function(state = initialState, action) {
	switch (action.type) {
		case FLIP_CARD: {
			const { id } = action.payload;
			return {
				...state,
				byIds: {
					...state.byIds,
					[id]: {
						hidden: !state.byIds[id].hidden,
					},
				},
			};
		}
		default:
			return state;
	}
}
