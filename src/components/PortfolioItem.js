import React from 'react';

const PortfolioItem = (props) => {
	console.log(props);
	return (
		<div>
			<h2>This is a project I've done</h2>
			<p>This is the {props.match.params.id} portfolio item</p>
		</div>
	);
};

export default PortfolioItem;