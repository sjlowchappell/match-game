import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	max-width: 960px;
	margin: 0 auto;
	padding: 0 15px;
`;

const Layout: FC = ({ children }) => {
	return (
		<Wrapper>
			<header>
				<h1>Match Game</h1>
			</header>
			<main>{children}</main>
			<footer>
				Designed and Built by <a href="https://samlow-chappell.com">Sam Low-Chappell</a>
			</footer>
		</Wrapper>
	);
};

export default Layout;
