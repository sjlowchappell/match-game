import React, { FC } from 'react';
import { connect } from 'react-redux';
import { chooseDifficulty, chooseDeck } from '../redux/actions';

interface ModalProps {
	chooseDeck: any;
	chooseDifficulty: any;
	cards: {
		difficulty: string;
		deckType: string;
	};
}

const Modal: FC<ModalProps> = ({ chooseDeck, chooseDifficulty, cards }) => {
	return (
		<div>
			<h2>Welcome to Match Game!</h2>
			<h3>Rules:</h3>
			<p>
				Here are the rules ... Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eos
				accusantium consectetur, fugiat laudantium totam quibusdam voluptatem illum aut adipisci laborum nisi
				fugit temporibus nostrum! Sequi ex quae inventore? Excepturi.
			</p>
			<h2>Current deck: {cards.deckType} </h2>
			<h3>Change deck:</h3>
			<div>
				<button onClick={() => chooseDeck('deck1')}>Deck 1</button>
				<button onClick={() => chooseDeck('deck2')}>Deck 2</button>
				<button onClick={() => chooseDeck('deck3')}>Deck 3</button>
			</div>
			<h2>Current difficulty: {cards.difficulty}</h2>
			<h3>Change difficulty:</h3>
			<div>
				<button onClick={() => chooseDifficulty('easy')}>Easy</button>
				<button onClick={() => chooseDifficulty('medium')}>Medium</button>
				<button onClick={() => chooseDifficulty('hard')}>Hard</button>
			</div>
		</div>
	);
};

const mapDispatchToProps = {
	chooseDifficulty,
	chooseDeck,
};

const mapStateToProps = (state: ModalProps) => {
	const cards = state.cards;
	return { cards };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
