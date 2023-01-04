import React, {useState} from 'react';
import {Dish} from "../../types";
import {useAppDispatch} from "../../hooks";
import {newDish} from "../../app/store/AdminDishThunks";
import AdminNav from "../AdminNav/AdminNav";
import {useNavigate} from "react-router-dom";

const DishesForm = () => {

	const navigate = useNavigate();

	const dispatch = useAppDispatch();

	const [dish, setDish] = useState<Dish>({
		title: '',
		price: '',
		image: '',
	})

	const ChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
		const {name, value} = e.target;
		setDish(prev => ({...prev, [name]: value}));
	};

	const FormSend = (e: React.FormEvent) => {
		e.preventDefault();
		dispatch(newDish(dish));
		navigate('/admin');
	}

	return (
		<>
		<AdminNav/>
		<div className='container mt-5'>
			<form onSubmit={FormSend}>
				<label htmlFor='title'>Name of Dish</label>
				<input value={dish.title} onChange={ChangeEvent} type='text' name='title' id='title' required={true}/>
				<label htmlFor='price'>Price in KGS</label>
				<input value={dish.price} onChange={ChangeEvent} type='text' name='price' id='price' required={true} pattern='[0-9]+$'/>
				<label htmlFor='image'>Image</label>
				<input value={dish.image} onChange={ChangeEvent} type='url' name='image' id='image'/>
				<button type='submit'>Add</button>
			</form>
		</div>
		</>
	);
};

export default DishesForm;