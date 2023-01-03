import React from 'react';
import TotalPrice from "../TotalPrice/TotalPrice";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {UserSelectDishes} from "../../app/store/UserDishSlice";
import {MakeOrder} from "../../app/store/UserDishThunks";
import ButtonSpinner from "../Spinner/ButtonSpinner";

const TotalFooter = () => {
	const dispatch = useAppDispatch();

	const order = useAppSelector(UserSelectDishes).order;

	const orderPreloader = useAppSelector(UserSelectDishes).makingOrder;

	const onClick = () => {
		dispatch(MakeOrder(order));
	}


	return (
	<div className='fixed-bottom bg-dark text-center'>
		<p className='text-light'>{TotalPrice()} KGS</p>
		<button disabled={orderPreloader} onClick={onClick}> {orderPreloader? <ButtonSpinner/> : 'Make Order'}</button>
	</div>
	);
};

export default TotalFooter;