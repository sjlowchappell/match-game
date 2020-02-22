import React, { FC } from 'react';
import { connect } from 'react-redux';
import Card from './card';

interface CardGalleryProps {
	cards: [];
}

const CardGallery: FC<CardGalleryProps> = ({ cards }) => {
	return (
		<div>
			{cards.map((card, index) => {
				return <Card key={`cardid-${index}`} card={card} image={'Fake'} />;
			})}
		</div>
	);
};

interface StateState {
	cards: {
		deck: [];
	};
}

const mapStateToProps = (state: StateState) => {
	const cards = state.cards.deck;
	return { cards };
};

export default connect(mapStateToProps)(CardGallery);
