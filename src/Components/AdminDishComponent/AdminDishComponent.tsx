import React from 'react';
import {DishApi} from "../../types";
import {EmptyImgUrl, imgStyle} from "../../constants";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {deleteDish} from "../../store/AdminDishThunks";
import {AdminSelectDishes} from "../../store/AdminDishSlice";
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
                <img style={imgStyle} alt='dish'
                     src={Dish.image.length > 5 ? Dish.image : EmptyImgUrl}/>
                <h3 className='d-inline-block'> {Dish.title}</h3>
            </div>
            <p className='m-auto'>Price: {Dish.price} KGS</p>
            <div className='m-auto'>
                <button onClick={() => navigate('/admin/' + Dish.id + '/edit')} disabled={state.deleting} type='button'
                        className='btn btn-primary me-2'>Edit
                </button>
                <button disabled={state.deleting} type='button' className='btn btn-primary'
                        onClick={onDelete}>{state.deleting ? <ButtonSpinner/> : 'Delete'}</button>
            </div>
        </div>
    );
};

export default AdminDishComponent;
