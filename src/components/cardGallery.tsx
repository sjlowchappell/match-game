import React, { FC } from 'react';
import { connect } from 'react-redux';
import Card from './card';

interface CardGalleryProps {
	cards: any;
}

const CardGallery: FC<CardGalleryProps> = ({ cards }) => {
	return (
		<div>
			{cards.deck.map((card: any, index: any) => {
				return <Card key={`cardid-${index}`} card={card} image={'Fake'} flipped={cards.flipped} />;
			})}
			.
		</div>
	);
};

interface StateState {
	cards: {
		deck: [];
	};
}

const mapStateToProps = (state: StateState) => {
	const cards = state.cards;
	return { cards };
};

export default connect(mapStateToProps)(CardGallery);
