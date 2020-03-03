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
				<p>
					Designed and Built by <a href="https://samlow-chappell.com">Sam Low-Chappell</a>
				</p>
			</footer>
		</Wrapper>
	);
};

export default Layout;
