import React, { FC } from 'react';
import { connect } from 'react-redux';
import CardGallery from './cardGallery';
import Timer from './timer';
import { startGame, pauseGame, endGame } from '../redux/actions';

interface GameProps {
	startGame: any;
	pauseGame: any;
	endGame: any;
}

const Game: FC<GameProps> = ({ startGame, pauseGame, endGame }) => {
	// console.log(startGame);
	return (
		<div>
			<p>This is the game container</p>
			{/* Timer Component */}
			<Timer />
			{/* Pause buttons */}
			{/* When clicking pause, it should bring up the modal */}
			<button onClick={pauseGame}>Pause</button>
			<button onClick={() => endGame(true)}>Win</button>
			<button onClick={() => endGame(false)}>Lose</button>
			{/* Card Gallery Component */}
			<CardGallery />
		</div>
	);
};

const mapDispatchToProps = {
	startGame,
	pauseGame,
	endGame,
};

export default connect(null, mapDispatchToProps)(Game);
