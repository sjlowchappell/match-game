import React, { FC } from 'react';
import { connect } from 'react-redux';
import { flipCard } from '../redux/actions';

interface CardProps {
	image: string;
	card: {
		locked: boolean;
		compareVal: number;
		hidden: boolean;
		id: number;
	};
	flipCard: any;
}

const Card: FC<CardProps> = ({ card, flipCard }) => {
	return (
		<div>
			{/* If a card has been matched already and locked is true, just show the card */}
			{card.locked ? (
				<p>{card.compareVal}</p>
			) : (
				// If the card has not been matched, render a button that can be clicked to flip the card
				<button onClick={() => flipCard(card.id)}>
					{/* Conditionally render the image based upon state */}
					{card.hidden ? <p>Back Side</p> : <p>{card.compareVal}</p>}
				</button>
			)}
		</div>
	);
};

export default connect(null, { flipCard })(Card);
