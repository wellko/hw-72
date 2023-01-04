import React from 'react';
import TotalPrice from "../TotalPrice/TotalPrice";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {openModal, UserSelectDishes} from "../../app/store/UserDishSlice";
import ButtonSpinner from "../Spinner/ButtonSpinner";

const TotalFooter = () => {
	const dispatch = useAppDispatch();


	const orderPreloader = useAppSelector(UserSelectDishes).makingOrder;

	const onClick = () => {
		dispatch(openModal());
	}


	return (
	<div className='fixed-bottom bg-dark text-center'>
		<p className='text-light'>{TotalPrice()} KGS</p>
		<button disabled={orderPreloader} onClick={onClick}> {orderPreloader? <ButtonSpinner/> : 'Make Order'}</button>
	</div>
	);
};

export default TotalFooter;