import React from 'react';
import {DishApi} from "../../types";
import {imgStyle} from "../../constants";
import {useAppDispatch} from "../../hooks";
import {addDish} from "../../app/store/UserDishSlice";

interface Props {
	Dish: DishApi
}

const UserDishComponent: React.FC<Props> = ({Dish}) => {

	const dispatch = useAppDispatch();

	const onClick = () => {
		dispatch(addDish(Dish.id));
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
				<button type='button' className='btn btn-primary me-2' onClick={onClick}>Add to cart</button>
			</div>
		</div>
	);
};

export default UserDishComponent;