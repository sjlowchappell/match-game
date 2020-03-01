import React, { FC } from 'react';
import { connect } from 'react-redux';
import { chooseDifficulty, chooseDeck, startGame, startTimer, tick } from '../redux/actions';

interface ModalProps {
	chooseDeck: any;
	chooseDifficulty: any;
	startGame: any;
	startTimer: any;
	tick: any;
	state: any;
}

const Modal: FC<ModalProps> = ({ chooseDeck, chooseDifficulty, startGame, state, startTimer, tick }) => {
	const start = () => {
		startGame();
		const interval = setInterval(() => {
			tick();
		});
		startTimer(interval);
	};
	return (
		<div>
			{/* <h2>Welcome to Match Game!</h2>
			<h3>Rules:</h3>
			<p>
				Here are the rules ... Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eos
				accusantium consectetur, fugiat laudantium totam quibusdam voluptatem illum aut adipisci laborum nisi
				fugit temporibus nostrum! Sequi ex quae inventore? Excepturi.
			</p>
			<h2>Current deck: {state.decks.deckType} </h2>
			<h3>Change deck:</h3>
			<div>
				<button onClick={() => chooseDeck('deck1')}>Deck 1</button>
				<button onClick={() => chooseDeck('deck2')}>Deck 2</button>
				<button onClick={() => chooseDeck('deck3')}>Deck 3</button>
			</div>
			<h2>Current difficulty: {state.difficulty.difficulty}</h2>
			<h3>Change difficulty:</h3>
			<div>
				<button onClick={() => chooseDifficulty('easy')}>Easy</button>
				<button onClick={() => chooseDifficulty('medium')}>Medium</button>
				<button onClick={() => chooseDifficulty('hard')}>Hard</button>
			</div> */}

			{/* Play button should start the game */}
			<button onClick={start}>Play</button>
		</div>
	);
};

const mapDispatchToProps = {
	chooseDifficulty,
	chooseDeck,
	startGame,
	startTimer,
	tick,
};

const mapStateToProps = (state: ModalProps) => {
	return { state };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
