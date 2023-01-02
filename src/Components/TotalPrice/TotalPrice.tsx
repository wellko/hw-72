import React from 'react';
import {useAppSelector} from "../../hooks";
import {UserSelectDishes} from "../../app/store/UserDishSlice";

const TotalPrice = () => {

	const order = useAppSelector(UserSelectDishes);

	return (
		<div className='fixed-bottom bg-dark text-center'>
			<p className='text-light'>0 KGS</p>
		</div>
	);
};

export default TotalPrice;