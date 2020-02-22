import { FLIP_CARD } from '../actionTypes.js';

const initialState = {
	deck: [
		{
			id: 0,
			hidden: true,
			compareVal: 1,
			locked: false,
		},
		{
			id: 1,
			hidden: true,
			compareVal: 2,
			locked: false,
		},
		{
			id: 2,
			hidden: true,
			compareVal: 3,
			locked: false,
		},
		{
			id: 3,
			hidden: true,
			compareVal: 1,
			locked: false,
		},
		{
			id: 4,
			hidden: true,
			compareVal: 2,
			locked: false,
		},
		{
			id: 5,
			hidden: true,
			compareVal: 3,
			locked: false,
		},
	],
	flipped: [],
};

export default function(state = initialState, action) {
	switch (action.type) {
		case FLIP_CARD: {
			const { id } = action.payload;
			const newDeck = [...state.deck];
			newDeck[id] = {
				...state.deck[id],
				hidden: !state.deck[id].hidden,
			};

			// This logic should be pulled out into a separate reducer I think
			const { flipped } = state;
			const newFlipped = [];

			// if a card is flipped already
			if (flipped.length) {
				// get the first cards compare value
				const first = state.deck[flipped[0]];
				// get the second cards compare value
				const second = state.deck[id];
				// if the compare values are equal
				if (first.compareVal === second.compareVal) {
					// Set locked for first to true
					newDeck[first.id] = {
						...state.deck[first.id],
						locked: true,
					};
					// Set locked for second to true
					newDeck[second.id] = {
						...state.deck[second.id],
						locked: true,
					};
					// Set flipped to empty array
					console.log('they are equal!');
				} else {
					// Set hidden for first to true
					newDeck[first.id] = {
						...state.deck[first.id],
						hidden: true,
					};
					// Set hidden for second to true
					newDeck[second.id] = {
						...state.deck[second.id],
						hidden: true,
					};
					console.log('not equal!');
				}
			} else {
				// if no card is flipped, added the current card to the flipped array
				newFlipped.push(id);
			}

			// End of logic that should be in a separate reducer

			return {
				...state,
				deck: newDeck,
				flipped: newFlipped,
			};
		}
		default:
			return state;
	}
}
