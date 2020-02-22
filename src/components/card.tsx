import React, { FC } from 'react';
import { connect } from 'react-redux';
import { flipCard } from '../redux/actions';

interface CardProps {
	image: string;
	card: any;
	flipCard: any;
}

const Card: FC<CardProps> = ({ card, flipCard }) => {
	// console.log(card.id);
	return (
		<div>
			{/* Button with handleClick method contains the image */}
			{card.locked ? (
				<p>{card.compareVal}</p>
			) : (
				<button onClick={() => flipCard(card.id)}>
					{/* {console.log(card.hidden)} */}
					{/* Conditionally render the image based upon state */}
					{card.hidden ? <p>Back Side</p> : <p>{card.compareVal}</p>}
				</button>
			)}
		</div>
	);
};

export default connect(null, { flipCard })(Card);
