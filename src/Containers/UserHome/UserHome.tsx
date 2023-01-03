import React from 'react';
import {useAppSelector} from "../../hooks";
import {AdminSelectDishes} from "../../app/store/AdminDishSlice";
import UserNav from "../../Components/UserNav/UserNav";
import UserDishComponent from "../../Components/UserDishComponent/UserDishComponent";
import TotalFooter from "../../Components/TotalFooter/TotalFooter";

const UserHome = () => {

	const dishes = useAppSelector(AdminSelectDishes);


	return (
		<div className='mb-5'>
			<UserNav/>
			{dishes.dishes.map(item => <UserDishComponent key={Math.random()} Dish={item}/>)}
			<TotalFooter/>
		</div>
	);
};

export default UserHome;