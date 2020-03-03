import React, { FC } from 'react';
import { connect } from 'react-redux';
import Card from './card';
import styled from 'styled-components';

const Container = styled.div`
	padding: 20px 0px;
	display: flex;
	flex-wrap: wrap;
	> * {
		min-width: 25%;
	}
`;

interface CardGalleryProps {
	cards: {
		deck: [];
		flipped: [];
	};
}

const CardGallery: FC<CardGalleryProps> = ({ cards }) => {
	return (
		<Container>
			{/* go through deck and return a new card component for each card */}
			{cards.deck.map((card: any, index: any) => {
				return <Card key={`cardid-${index}`} card={card} image={'Fake'} flipped={cards.flipped} />;
			})}
		</Container>
	);
};

const mapStateToProps = (state: CardGalleryProps) => {
	const cards = state.cards;
	return { cards };
};

export default connect(mapStateToProps)(CardGallery);
