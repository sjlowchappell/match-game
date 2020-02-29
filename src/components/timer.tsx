import React, { FC } from 'react';
import { endGame, incrementTimer } from '../redux/actions';
import { connect } from 'react-redux';

interface TimerProps {
	// timerVal: number;
	// remainingPairs: number;
	// playing: boolean;
	endGame: any;
	incrementTimer: any;
	state: any;
}

const Timer: FC<TimerProps> = ({ state, incrementTimer, endGame }) => {
	// console.log(state.game);
	// return <p>Timer component</p>;
	// const timerLogic = () => {
	// 	if (timerVal >= 0 && remainingPairs === 0) {
	// 		endGame(true);
	// 	} else if (playing && timerVal <= 0) {
	// 		endGame(false);
	// 	} else {
	// 		setTimeout(incrementTimer, 1000);
	// 	}
	// };
	const timerVal = state.game.time;
	const remainingPairs = state.cards.remainingPairs;
	const playing = state.game.playing;
	const victory = state.game.victory;
	console.log(victory);

	if (playing) {
		if (timerVal >= 0 && remainingPairs === 0) {
			endGame(true);
		} else if (timerVal <= 0) {
			endGame(false);
		} else {
			setTimeout(incrementTimer, 1000);
		}
	}

	return (
		<div>
			<p>Time Remaining:</p>
			<span>0:{timerVal}</span>
			<span>Victory?</span>
			{victory ? <p>You win!</p> : <p>You lose!</p>}
			{/* <button onClick={() => incrementTimer()}>Increment</button> */}
		</div>
	);
};

// export default Timer;

const mapDispatchToProps = {
	endGame,
	incrementTimer,
};

const mapStateToProps = (state: any) => {
	console.log(state);
	return { state };
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
