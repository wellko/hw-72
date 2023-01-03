import React from 'react';
import TotalPrice from "../TotalPrice/TotalPrice";

const TotalFooter = () => {
	return (
	<div className='fixed-bottom bg-dark text-center'>
		<p className='text-light'>{TotalPrice()} KGS</p>
	</div>
	);
};

export default TotalFooter;