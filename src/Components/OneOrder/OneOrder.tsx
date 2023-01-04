import React from 'react';
import {Order} from "../../types";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {AdminSelectDishes} from "../../app/store/AdminDishSlice";
import {completeOrder} from "../../app/store/AdminDishThunks";
import ButtonSpinner from "../Spinner/ButtonSpinner";
import {DeliveryPrice} from "../../constants";
import {useLocation} from "react-router-dom";

interface Props {
	props: Order;
}

const OneOrder: React.FC<Props> = ({props}) => {

	const {pathname} = useLocation();

	const dispatch = useAppDispatch();



	let Total = 0;

	const dishes = useAppSelector(AdminSelectDishes).dishes;

	const status = useAppSelector(AdminSelectDishes).status;

	const onComplete = () => {
		dispatch(completeOrder(props.id!));
	}

	const inner = Object.keys(props).map(key => {
			if (key !== 'id') {
				const index = dishes.findIndex((value) => key === value.id);
				Total += props[key] * parseInt(dishes[index].price);
				return <div className='row col-9'><p className='col-6'>{props[key]} x {dishes[index].title}</p>
					<p className='fw-bold col-6'>{props[key] * parseInt(dishes[index].price)} KGS </p></div>
			}
		}
	);

	return (
		<div className='row border border-2 border-dark mt-2'>
			{inner}
			<div className='row col-9'><p className='col-6 fw-bolder'>Delivery</p>
				<p className='fw-bold col-6'>{DeliveryPrice} KGS </p></div>
			<div className='col-3 m-auto'>
				<p className='fw-bold'>Order Total:</p>
				<p className='fw-bold'>{Total + DeliveryPrice} KGS</p>
				{pathname === '/admin/Orders'? 	<button onClick={onComplete} className='btn btn-dark'>{status.deleting ?
					<ButtonSpinner/> : 'Complete order'}</button> : '' }

			</div>
		</div>
	);
};

export default OneOrder;