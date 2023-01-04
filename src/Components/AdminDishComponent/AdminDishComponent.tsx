import React from 'react';
import {DishApi} from "../../types";
import {imgStyle} from "../../constants";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {deleteDish} from "../../app/store/AdminDishThunks";
import {AdminSelectDishes} from "../../app/store/AdminDishSlice";
import ButtonSpinner from "../Spinner/ButtonSpinner";
import {useNavigate} from "react-router-dom";

interface Props {
	Dish: DishApi;
}

const AdminDishComponent: React.FC<Props> = ({Dish}) => {

	const navigate = useNavigate();

	const state = useAppSelector(AdminSelectDishes).status;

	const dispatch = useAppDispatch();

	const onDelete = () => {
		dispatch(deleteDish(Dish.id));
	}

	return (
		<div className='border border-danger border-2 rounded mb-3 d-flex justify-content-between'>
			<div>
				<img style={imgStyle} alt='image'
					 src={Dish.image.length > 5 ? Dish.image : 'https://cdn.vectorstock.com/i/preview-1x/82/99/no-image-available-like-missing-picture-vector-43938299.jpg'}/>
				<h3 className='d-inline-block'> {Dish.title}</h3>
			</div>
			<p className='m-auto'>Price: {Dish.price} KGS</p>
			<div className='m-auto'>
				<button onClick={() => navigate('/admin/' + Dish.id + '/edit')} disabled={state.deleting} type='button' className='btn btn-primary me-2'>Edit</button>
				<button disabled={state.deleting} type='button' className='btn btn-primary'
						onClick={onDelete}>{state.deleting ? <ButtonSpinner/> : 'Delete'}</button>
			</div>
		</div>
	);
};

export default AdminDishComponent;
