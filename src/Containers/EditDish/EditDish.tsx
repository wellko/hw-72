import React, {useCallback, useEffect} from 'react';
import DishesForm from "../../Components/DishesForm/DishesForm";
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {getOneDish} from "../../store/AdminDishThunks";
import {AdminSelectDishes} from "../../store/AdminDishSlice";
import Spinner from "../../Components/Spinner/Spinner";

const EditDish = () => {

    const {id} = useParams() as { id: string };

    const dispatch = useAppDispatch();

    const status = useAppSelector(AdminSelectDishes).status;

    const edited = useAppSelector(AdminSelectDishes).edited;

    const callBack = useCallback(async () => {
        await dispatch(getOneDish(id));
    }, [id, dispatch])

    useEffect(() => {
        void callBack();
    }, [callBack]);


    return (
        <div>
            {status.loadingDishes ? <Spinner/> : <DishesForm dish={edited}/>}
        </div>
    );
};

export default EditDish;