import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => (
	<div>
		<h2>My Work</h2>
		<p>Check out my latest projects:</p>
		<Link to="/portfolio/project-1">Project 1</Link>
		<Link to="/portfolio/project-2">Project 2</Link>
	</div>
);

export default Portfolio;