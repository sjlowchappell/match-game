import React, { FC } from 'react';

const Layout: FC = ({ children }) => {
	return (
		<div>
			<header>
				<h1>Match Game</h1>
			</header>
			<main>{children}</main>
			<footer>
				Designed and Built by <a href="https://samlow-chappell.com">Sam Low-Chappell</a>
			</footer>
		</div>
	);
};

export default Layout;
