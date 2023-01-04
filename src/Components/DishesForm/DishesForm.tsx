import React, {useCallback, useEffect, useState} from 'react';
import {Dish} from "../../types";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {getOneDish, newDish} from "../../app/store/AdminDishThunks";
import AdminNav from "../AdminNav/AdminNav";
import {useNavigate, useParams} from "react-router-dom";
import {EmptyImgUrl, imgStyle} from "../../constants";
import {AdminSelectDishes} from "../../app/store/AdminDishSlice";
import Spinner from "../Spinner/Spinner";

const DishesForm = () => {

		const edited = useAppSelector(AdminSelectDishes).edited;

		const status = useAppSelector(AdminSelectDishes).status;

		const navigate = useNavigate();

		const {id} = useParams();

		const dispatch = useAppDispatch();

		const emptyState = {
			title: '',
			price: '',
			image: '',
		}

		const [dish, setDish] = useState<Dish>(emptyState);

		const callBack = useCallback( async() => {
			if (id) {
				await dispatch(getOneDish(id));
				setDish(edited);
			}
		},[])

		useEffect(() => {callBack();
			}, []);




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
				<button onClick={() => setDish(edited)}>test</button>
				{status.loadingDishes ? <Spinner/> : <div className='container mt-5 border border-3 border-dark rounded'>
					<h2 className='text-center'>
						{id ? 'Edit Form' : 'Add Form'}
					</h2>

					<form onSubmit={FormSend}>
						<div className='d-flex flex-column'>
							<label className='fw-bold' htmlFor='title'>Name of Dish</label>
							<input value={dish.title} onChange={ChangeEvent} type='text' name='title' id='title'
								   required={true}/>
							<label className='fw-bold' htmlFor='price'>Price in KGS</label>
							<input value={dish.price} onChange={ChangeEvent} type='text' name='price' id='price'
								   required={true}
								   pattern='[0-9]+$'/>
							<label className='fw-bold' htmlFor='image'>Image</label>
							<input value={dish.image} onChange={ChangeEvent} type='url' name='image' id='image'/>
							<img alt='photo' style={imgStyle} src={dish.image.length > 4 ? dish.image : EmptyImgUrl}/>
							<button className='btn btn-dark w-25 align-self-center mt-3' type='submit'>Add</button>
						</div>
					</form>
				</div>}

			</>
		);
	}
;

export default DishesForm;