import React from 'react';
import TotalPrice from "../TotalPrice/TotalPrice";
import {useAppDispatch} from "../../app/hooks";
import {openModal} from "../../store/UserDishSlice";

const TotalFooter = () => {

	const dispatch = useAppDispatch();

	const onClick = () => {
		dispatch(openModal());
	}


	return (
	<div className='fixed-bottom bg-dark text-center'>
		<p className='text-light'>{TotalPrice()} KGS</p>
		<button className='btn btn-light' disabled={TotalPrice() === 0} onClick={onClick}> Checkout</button>
	</div>
	);
};

export default TotalFooter;