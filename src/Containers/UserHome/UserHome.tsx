import React from 'react';
import {useAppSelector} from "../../hooks";
import {AdminSelectDishes} from "../../app/store/AdminDishSlice";
import UserNav from "../../Components/UserNav/UserNav";
import UserDishComponent from "../../Components/UserDishComponent/UserDishComponent";
import TotalPrice from "../../Components/TotalPrice/TotalPrice";
import {UserSelectDishes} from "../../app/store/UserDishSlice";

const UserHome = () => {

	const dishes = useAppSelector(AdminSelectDishes);

	const userDish= useAppSelector(UserSelectDishes);

	return (
		<div className='mb-5'>
			<UserNav/>
			{dishes.dishes.map(item => <UserDishComponent key={Math.random()} Dish={item}/>)}
			<TotalPrice/>
			<button onClick={()=> console.log(userDish.order)}>Check</button>
		</div>
	);
};

export default UserHome;