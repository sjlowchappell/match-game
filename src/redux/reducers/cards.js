import { FLIP_CARD, COMPARE_CARD } from '../actionTypes.js';

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

			const newFlipped = [...state.flipped];

			newFlipped.push(id);

			return {
				...state,
				deck: newDeck,
				flipped: newFlipped,
			};
		}
		case COMPARE_CARD: {
			// everything works except if you click the same card twice, the compare vals are the same. Currently fixed so it works, except if you click really fast repeatedly, eventually it becomes undefined ( probably due to the set timeout )

			// create a new deck object based on deck in state
			const newDeck = [...state.deck];
			// get the first card object
			const firstCard = state.deck[state.flipped[0]];
			// get the second card object
			const secondCard = state.deck[state.flipped[1]];
			// if the compare values are equal
			if (firstCard.id !== secondCard.id && firstCard.compareVal === secondCard.compareVal) {
				// Set locked for firstCard to true
				newDeck[firstCard.id] = {
					...state.deck[firstCard.id],
					locked: true,
				};
				// Set locked for secondCard to true
				newDeck[secondCard.id] = {
					...state.deck[secondCard.id],
					locked: true,
				};
			} else {
				// Set hidden for firstCard to true
				newDeck[firstCard.id] = {
					...state.deck[firstCard.id],
					hidden: true,
				};
				// Set hidden for secondCard to true
				newDeck[secondCard.id] = {
					...state.deck[secondCard.id],
					hidden: true,
				};
			}
			return {
				...state,
				deck: newDeck,
				flipped: [],
			};
		}
		default:
			return state;
	}
}
