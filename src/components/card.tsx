import React, { FC } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { flipCard } from '../redux/actions';

interface CardProps {
	image: string;
	card: any;
	flipCard: any;
}

const Card: FC<CardProps> = ({ card, flipCard }) => {
	return (
		<div>
			{/* Button with handleClick method contains the image */}
			<button onClick={() => flipCard(card.id)}>
				{/* Conditionally render the image based upon state */}
				{card.hidden ? <p>Back Side</p> : <p>{card.id}</p>}
			</button>
		</div>
	);
};

export default connect(null, { flipCard })(Card);
