import React, {useEffect} from 'react';
import AdminNav from "../../Components/AdminNav/AdminNav";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {AdminSelectDishes} from "../../app/store/AdminDishSlice";
import OneOrder from "../../Components/OneOrder/OneOrder";
import {getDishes, getOrders} from "../../app/store/AdminDishThunks";
import Spinner from "../../Components/Spinner/Spinner";

const AdminOrders = () => {

	const dispatch = useAppDispatch();

	const status = useAppSelector(AdminSelectDishes).status;

	const order = useAppSelector(AdminSelectDishes).orders;

	useEffect(() => {
		dispatch(getDishes());
		dispatch(getOrders());
	}, [])

	return (
		<>
			<AdminNav/>

			<div className='container'>
				{status.loadingDishes? <Spinner/> : order.map((item) => {
						return <OneOrder key={Math.random()} props={item}/>
					})}

			</div>
		</>
	);
};

export default AdminOrders;
