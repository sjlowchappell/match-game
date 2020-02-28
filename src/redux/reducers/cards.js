import { FLIP_CARD, COMPARE_CARD, CHOOSE_DECK, CHOOSE_DIFFICULTY } from '../actionTypes.js';

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
	remainingPairs: 3,
	difficulty: 'easy',
	deckType: 'deck1',
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
			// Currently works but could be more elegant

			let newPairs = state.remainingPairs;

			// create a new deck object based on deck in state
			const newDeck = [...state.deck];
			// get the first card object
			const firstCard = state.deck[state.flipped[0]];
			// get the second card object
			const secondCard = state.deck[state.flipped[1]];
			// check if secondCard exists (sometimes undefined due to set timeout)
			if (secondCard) {
				// if the compare values are equal and ids are different
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
					newPairs--;
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
			}
			return {
				...state,
				deck: newDeck,
				flipped: [],
				remainingPairs: newPairs,
			};
		}
		case CHOOSE_DECK: {
			const { deckName } = action.payload;
			return {
				...state,
				deckType: deckName,
			};
		}
		case CHOOSE_DIFFICULTY: {
			const { difficultyLevel } = action.payload;
			return {
				...state,
				difficulty: difficultyLevel,
			};
		}
		default:
			return state;
	}
}
