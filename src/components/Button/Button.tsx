import React from 'react';
import PropTypes from 'prop-types';

function Button({onClick, children }) {

	return (
		<button className="button" onClick={onClick}>
			{children}
		</button>
	);
}

export default Button;