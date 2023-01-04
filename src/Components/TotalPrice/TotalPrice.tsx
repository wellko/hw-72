import React from 'react';
import {useAppSelector} from "../../hooks";
import {UserSelectDishes} from "../../app/store/UserDishSlice";
import {AdminSelectDishes} from "../../app/store/AdminDishSlice";

const TotalPrice = () => {

	const order = useAppSelector(UserSelectDishes).order;

	const dishes = useAppSelector(AdminSelectDishes).dishes;

	let Total = 0;

	Object.keys(order).map(key => {
		if(key !== 'customer'){
			const index = dishes.findIndex((value) => key === value.id);
			Total += order[key] * parseInt(dishes[index].price);
		}
	})

	return Total
};

export default TotalPrice;