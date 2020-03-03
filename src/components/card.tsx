import React, { FC } from 'react';
import { connect } from 'react-redux';
import { flipCard, compareCard } from '../redux/actions';
import styled from 'styled-components';

const Container = styled.div``;

const Button = styled.button`
	margin: 5px;
	@media (min-width: 470px) {
		width: calc(100% - 10px);
		padding: 30px 15px;
	}
`;

interface CardProps {
	image: string;
	card: {
		locked: boolean;
		compareVal: number;
		hidden: boolean;
		id: number;
	};
	flipCard: (id: number) => void;
	compareCard: () => void;
	flipped: [];
}

const Card: FC<CardProps> = ({ card, flipCard, compareCard, flipped }) => {
	const handleClick = () => {
		flipCard(card.id);
		if (flipped.length) {
			// setTimeout so that the user has a moment to see both cards before they are compared and flipped. Currently messes with things so maybe disable flipcard until it is over? will have to figure this out later
			setTimeout(compareCard, 300);
		}
	};
	return (
		<Container>
			{/* If a card has been matched already and locked is true, just show the card */}
			{card.locked ? (
				<p>{card.compareVal}</p>
			) : (
				// If the card has not been matched, render a button that can be clicked to flip the card
				<Button onClick={() => handleClick()}>
					{/* Conditionally render the image based upon state */}
					{card.hidden ? 'Back Side' : card.compareVal}
				</Button>
			)}
		</Container>
	);
};

const mapDispatchToProps = {
	flipCard,
	compareCard,
};

export default connect(null, mapDispatchToProps)(Card);
