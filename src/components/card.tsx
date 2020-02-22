import React, { FC } from 'react';
import { connect } from 'react-redux';
import { flipCard, compareCard } from '../redux/actions';

interface CardProps {
	image: string;
	card: {
		locked: boolean;
		compareVal: number;
		hidden: boolean;
		id: number;
	};
	flipCard: any;
	compareCard: any;
	flipped: [];
}

const Card: FC<CardProps> = ({ card, flipCard, compareCard, flipped }) => {
	const handleClick = () => {
		flipCard(card.id);
		if (flipped.length) {
			// setTimeout so that the user has a moment to see both cards before they are compared and flipped
			setTimeout(compareCard, 300);
		}
	};
	return (
		<div>
			{/* If a card has been matched already and locked is true, just show the card */}
			{card.locked ? (
				<p>{card.compareVal}</p>
			) : (
				// If the card has not been matched, render a button that can be clicked to flip the card
				<button onClick={() => handleClick()}>
					{/* Conditionally render the image based upon state */}
					{card.hidden ? <p>Back Side</p> : <p>{card.compareVal}</p>}
				</button>
			)}
		</div>
	);
};

const mapDispatchToProps = {
	flipCard,
	compareCard,
};

export default connect(null, mapDispatchToProps)(Card);
