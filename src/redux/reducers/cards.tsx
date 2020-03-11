import { FLIP_CARD, COMPARE_CARD, RESET_GAME } from '../actionTypes';
import barbarian from '../../assets/barbarian.png';
import bard from '../../assets/bard.jpeg';
import cleric from '../../assets/cleric.jpeg';
import druid from '../../assets/druid.jpg';
import fighter from '../../assets/fighter.jpeg';
import monk from '../../assets/monk.jpeg';
import paladin from '../../assets/paladin.jpeg';
import ranger from '../../assets/ranger.jpeg';
// import rogue from '../../assets/rogue.jpeg';
// import sorcerer from '../../assets/sorcerer.jpeg';
// import warlock from '../../assets/warlock.jpeg';
// import wizard from '../../assets/wizard.jpeg';

// Once decks have been established, deck should be a variable pulled in from
// a utility file
const deck = [
	{
		id: 0,
		hidden: true,
		compareVal: 1,
		locked: false,
		image: barbarian,
	},
	{
		id: 1,
		hidden: true,
		compareVal: 2,
		locked: false,
		image: bard,
	},
	{
		id: 2,
		hidden: true,
		compareVal: 3,
		locked: false,
		image: cleric,
	},
	{
		id: 3,
		hidden: true,
		compareVal: 4,
		locked: false,
		image: druid,
	},
	{
		id: 4,
		hidden: true,
		compareVal: 5,
		locked: false,
		image: fighter,
	},
	{
		id: 5,
		hidden: true,
		compareVal: 6,
		locked: false,
		image: monk,
	},
	{
		id: 6,
		hidden: true,
		compareVal: 1,
		locked: false,
		image: barbarian,
	},
	{
		id: 7,
		hidden: true,
		compareVal: 2,
		locked: false,
		image: bard,
	},
	{
		id: 8,
		hidden: true,
		compareVal: 3,
		locked: false,
		image: cleric,
	},
	{
		id: 9,
		hidden: true,
		compareVal: 4,
		locked: false,
		image: druid,
	},
	{
		id: 10,
		hidden: true,
		compareVal: 5,
		locked: false,
		image: fighter,
	},
	{
		id: 11,
		hidden: true,
		compareVal: 6,
		locked: false,
		image: monk,
	},
	{
		id: 12,
		hidden: true,
		compareVal: 7,
		locked: false,
		image: paladin,
	},
	{
		id: 13,
		hidden: true,
		compareVal: 7,
		locked: false,
		image: paladin,
	},
	{
		id: 14,
		hidden: true,
		compareVal: 8,
		locked: false,
		image: ranger,
	},
	{
		id: 15,
		hidden: true,
		compareVal: 8,
		locked: false,
		image: ranger,
	},
];

const shuffle = (array: Card[]) => {
	// create a new array so there are no side effects
	const shuffled = [...array];
	// Loop through all elements of the array starting at the last element
	for (let i = shuffled.length - 1; i > 0; i--) {
		// get random number from 0 to i - 1
		let j = Math.floor(Math.random() * i);

		// Save shuffled[i] in a temporary variable
		let t = shuffled[i];
		// Set shuffled[i] to the same as shuffled[j] but update the id
		// So that it can be used for matching later
		shuffled[i] = {
			...shuffled[j],
			id: i,
		};
		// Set shuffled[j] equal to the temporary variable, swapping the 2
		shuffled[j] = t;
	}
	// Update the id of the first element of the array to 0
	shuffled[0] = {
		...shuffled[0],
		id: 0,
	};

	// return the new array
	return shuffled;
};

interface Card {
	id: number;
	hidden: boolean;
	compareVal: number;
	locked: boolean;
}

interface CardsState {
	deck: Card[];
	flipped: number[];
	remainingPairs: number;
}
interface ActionState {
	type: string;
	payload: {
		id: number;
	};
}

const initialState: CardsState = {
	deck: shuffle(deck),
	flipped: [],
	remainingPairs: deck.length / 2,
};

export default function(state = initialState, action: ActionState) {
	switch (action.type) {
		case FLIP_CARD: {
			const { id } = action.payload;
			const newDeck = [...state.deck];
			newDeck[id] = {
				...state.deck[id],
				hidden: !state.deck[id].hidden,
			};

			const newFlipped: number[] = [...state.flipped];

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
		case RESET_GAME: {
			return {
				deck: shuffle(initialState.deck),
				...initialState,
			};
		}
		default:
			return state;
	}
}
