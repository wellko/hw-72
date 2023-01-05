import React, {useState} from 'react';
import {Dish} from "../../types";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {EditingDish, newDish} from "../../store/AdminDishThunks";
import {useNavigate, useParams} from "react-router-dom";
import {EmptyImgUrl, imgStyle} from "../../constants";
import {AdminSelectDishes} from "../../store/AdminDishSlice";
import Spinner from "../Spinner/Spinner";
import ButtonSpinner from "../Spinner/ButtonSpinner";

interface Props {
    dish?: Dish;
}

const DishesForm: React.FC<Props> = (props) => {

        const {id} = useParams() as { id: string };

        const status = useAppSelector(AdminSelectDishes).status;

        const dispatch = useAppDispatch();

        const navigate = useNavigate();

        let emptyState = {
            title: '',
            price: '',
            image: '',
        }

        if (props.dish) {
            emptyState = props.dish
        }

        const [dish, setDish] = useState<Dish>(emptyState);

        const ChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
            const {name, value} = e.target;
            setDish(prev => ({...prev, [name]: value}));
        };

        const FormSend = (e: React.FormEvent) => {
            e.preventDefault();
            if (props.dish) {
                dispatch(EditingDish({id, dish}))
            } else {
                dispatch(newDish(dish));
            }
            navigate('/admin');
        }

        return (
            <>
                {status.loadingDishes ? <Spinner/> : <div className='container mt-5 border border-3 border-dark rounded'>
                    <h2 className='text-center'>
                        {props.dish ? 'Edit Form' : 'Add Form'}
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
                            <img alt='dish' style={imgStyle} src={dish.image.length > 4 ? dish.image : EmptyImgUrl}/>
                            <button className='btn btn-dark w-25 align-self-center mt-3'
                                    type='submit'>{status.posting ? <ButtonSpinner/> : props.dish ? 'Edit' : 'Add'}</button>
                        </div>
                    </form>
                </div>}
            </>
        );
    }
;

export default DishesForm;