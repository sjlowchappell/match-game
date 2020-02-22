import { FLIP_CARD, COMPARE_CARD } from '../actionTypes.js';

const initialState = {
	allIds: [1, 2, 3, 4, 5, 6],
	byIds: {
		1: {
			hidden: true,
			compareVal: 1,
		},
		2: {
			hidden: true,
			compareVal: 2,
		},
		3: {
			hidden: true,
			compareVal: 3,
		},
		4: {
			hidden: true,
			compareVal: 1,
		},
		5: {
			hidden: true,
			compareVal: 2,
		},
		6: {
			hidden: true,
			compareVal: 3,
		},
	},
	compare: [],
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
						...state.byIds[id],
						hidden: !state.byIds[id].hidden,
					},
				},
			};
		}
		case COMPARE_CARD: {
			return null;
		}
		default:
			return state;
	}
}
