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
	flipped: [],
};

export default function(state = initialState, action) {
	switch (action.type) {
		case FLIP_CARD: {
			const { id } = action.payload;
			const { flipped } = state;
			const newFlipped = [];
			if (flipped.length) {
				const first = state.byIds[flipped[0]].compareVal;
				const second = state.byIds[id].compareVal;
				console.log(first, second);
				if (first === second) {
					console.log('they are equal!');
				} else {
					console.log('not equal!');
				}
			} else {
				newFlipped.push(id);
			}
			return {
				...state,
				byIds: {
					...state.byIds,
					[id]: {
						...state.byIds[id],
						hidden: !state.byIds[id].hidden,
					},
				},
				flipped: newFlipped,
			};
		}
		case COMPARE_CARD: {
			return null;
		}
		default:
			return state;
	}
}
