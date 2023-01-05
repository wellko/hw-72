import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {AdminSelectDishes} from "../../store/AdminDishSlice";
import OneOrder from "../../Components/OneOrder/OneOrder";
import {getDishes, getOrders} from "../../store/AdminDishThunks";
import Spinner from "../../Components/Spinner/Spinner";

const AdminOrders = () => {

    const dispatch = useAppDispatch();

    const status = useAppSelector(AdminSelectDishes).status;

    const order = useAppSelector(AdminSelectDishes).orders;

    console.log(order)

    useEffect(() => {
        dispatch(getDishes());
        dispatch(getOrders());
    }, [dispatch])

    return (
        <>
            <div className='container'>
                {order.length < 1 ? <h1>There is no orders yet</h1> : status.loadingDishes ?
                    <Spinner/> : order.map((item) => {
                        return <OneOrder key={Math.random()} props={item.dishes} customer={item.customer} id={item.id!}/>
                    })}
            </div>
        </>
    );
};

export default AdminOrders;
