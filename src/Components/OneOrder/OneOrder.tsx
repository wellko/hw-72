import React from 'react';
import {CustomerInfo, Order} from "../../types";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {AdminSelectDishes} from "../../store/AdminDishSlice";
import {completeOrder} from "../../store/AdminDishThunks";
import ButtonSpinner from "../Spinner/ButtonSpinner";
import {DeliveryPrice} from "../../constants";
import {useLocation} from "react-router-dom";
import { DeleteDish} from "../../store/UserDishSlice";

interface Props {
    props: Order;
    customer: CustomerInfo;
    id?: string;
}

const OneOrder: React.FC<Props> = ({props, customer, id}) => {

    const {pathname} = useLocation();

    const dispatch = useAppDispatch();


    let Total = 0;

    const dishes = useAppSelector(AdminSelectDishes).dishes;

    const status = useAppSelector(AdminSelectDishes).status;

    const onComplete = () => {
        dispatch(completeOrder(id!));
    }

    const deletePosition = (id: string) => {
        dispatch(DeleteDish(id))
    }

    const inner = Object.keys(props).map(key => {
            if (key !== 'id' && key !== 'customer') {
                const index = dishes.findIndex((value) => key === value.id);
                if(index === -1) {
                    return <p key={Math.random()}>Deleted position</p>
                }
                Total += props[key] * parseInt(dishes[index].price);
                return <div key={Math.random()} className='row col-12'><p
                    className='col-4'>{props[key]} x {dishes[index].title}</p>
                    <p className='fw-bold col-4'>{props[key] * parseInt(dishes[index].price)} KGS </p>
                    {pathname === '/admin/Orders' ? '' :
                        <button disabled={Object.keys(props).length === 1} className='col-4 btn-close btn'
                                onClick={() => deletePosition(key)}></button>
                    }
                </div>
            }
        }
    );

    if (Total === 0) {
        onComplete();
    }

    return (
        <div className='row border border-2 border-dark mt-2 overflow-hidden'>
            {inner}
            <div className='row col-9 border-bottom'><p className='col-6 fw-bolder'>Delivery</p>
                <p className='fw-bold col-6'>{DeliveryPrice} KGS </p></div>
            <div className='col-3 m-auto border-bottom'>
                <p className='fw-bold'>Order Total:</p>
                <p className='fw-bold'>{Total + DeliveryPrice} KGS</p>
                {pathname === '/admin/Orders' ? <button onClick={onComplete} className='btn btn-dark'>{status.deleting ?
                    <ButtonSpinner/> : 'Complete order'}</button> : ''}
            </div>
            {pathname === '/admin/Orders' ? <div className='row col-12'>
                <p><b>name : </b>{customer.name}</p>
                <p><b>address: </b>{customer.address}</p>
                <p><b>telephone: </b>{customer.phone}</p>
            </div> : ''}
        </div>
    );
};

export default OneOrder;