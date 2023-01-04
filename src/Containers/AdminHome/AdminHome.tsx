import React, {useEffect} from 'react';
import AdminNav from "../../Components/AdminNav/AdminNav";
import {Link} from "react-router-dom";
import {AdminSelectDishes} from "../../app/store/AdminDishSlice";
import {useAppDispatch, useAppSelector} from "../../hooks";
import AdminDishComponent from "../../Components/AdminDishComponent/AdminDishComponent";
import Spinner from "../../Components/Spinner/Spinner";
import {getDishes, getOrders} from "../../app/store/AdminDishThunks";

const AdminHome = () => {

	const dispatch = useAppDispatch();

	const dishes = useAppSelector(AdminSelectDishes);

	useEffect(() => {
		dispatch(getDishes());
		dispatch(getOrders());
	}, [])

	return (
		<>
			<AdminNav/>
			<div className='container mt-2'>
				<div className='d-flex justify-content-between'>
				<h2>Dishes</h2>
				<Link className='btn btn-dark' to='/admin/new'>Add new dish</Link></div>
				{dishes.status.loadingDishes? <Spinner/> : dishes.dishes.map(item => <AdminDishComponent key={Math.random()} Dish={item}/>)
			}
			</div>


		</>
	);
};

export default AdminHome;