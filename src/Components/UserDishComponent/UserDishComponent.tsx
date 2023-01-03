import React from 'react';
import {DishApi} from "../../types";
import {imgStyle} from "../../constants";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {addDish, RemoveDish, UserSelectDishes} from "../../app/store/UserDishSlice";

interface Props {
	Dish: DishApi
}

const UserDishComponent: React.FC<Props> = ({Dish}) => {

	const order = useAppSelector(UserSelectDishes).order;

	const dispatch = useAppDispatch();

	const onClick = () => {
		dispatch(addDish(Dish.id));
	}

	const onClickMinus = () => {
		dispatch(RemoveDish(Dish.id));
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
				<p className='d-inline-block'>x {order[Dish.id] ? order[Dish.id] : '0'}</p>
				<button type='button' style={{width: '40px', fontSize: '20px'}} className='btn btn-dark ms-2'
						onClick={onClick}>+
				</button>
				<button disabled={order[Dish.id] < 1 || order[Dish.id] === undefined} type='button'
						style={{width: '40px', fontSize: '20px'}} className='btn btn-dark ms-2' onClick={onClickMinus}>-
				</button>
			</div>
		</div>
	);
};

export default UserDishComponent;