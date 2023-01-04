import React from 'react';
import AdminNav from "../../Components/AdminNav/AdminNav";
import {Link} from "react-router-dom";
import {AdminSelectDishes} from "../../app/store/AdminDishSlice";
import {useAppSelector} from "../../hooks";
import AdminDishComponent from "../../Components/AdminDishComponent/AdminDishComponent";
import Spinner from "../../Components/Spinner/Spinner";

const AdminHome = () => {

	const dishes = useAppSelector(AdminSelectDishes);

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