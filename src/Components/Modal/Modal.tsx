import React, {useState} from 'react';
import OneOrder from "../OneOrder/OneOrder";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {closeModal, UserSelectDishes} from "../../store/UserDishSlice";
import {CustomerInfo} from "../../types";
import {MakeOrder} from "../../store/UserDishThunks";

const Modal = () => {
    const order = useAppSelector(UserSelectDishes).order;


    const [customer, setCustomer] = useState<CustomerInfo>({
        phone: '',
        address: '',
        name: '',
    })

    const dispatch = useAppDispatch();

    const UserState = useAppSelector(UserSelectDishes);

    const onClose = () => {
        dispatch(closeModal());
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setCustomer(prev => ({...prev, [name]: value}));
    };

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(MakeOrder({
            dishes: order,
            customer: customer,
        }))
        dispatch(closeModal());
    }

    return (
        <>
            <div className='modal-backdrop show'></div>
            <div className="modal fade show position-absolute" tabIndex={-1} style={{display: "block"}} role='dialog'>
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header d-flex ">
                            <h5 className="modal-title">Order</h5>
                            <button type="button" className="btn btn-secondary ms-auto" onClick={onClose}>X</button>
                        </div>
                        <div className="modal-body">
                            <OneOrder props={UserState.order} customer={customer}/>
                            <form id='order' onSubmit={onSubmit}>
                                <div className='d-flex row'>
                                    <label htmlFor='name'>Enter your name:</label>
                                    <input required={true} type='text' name='name' id='name' onChange={onChange}/>
                                    <label htmlFor='address'>Enter your address</label>
                                    <input required={true} type='text' name='address' id='address' onChange={onChange}/>
                                    <label htmlFor='phone'>Enter your phone number (0550-555-555)</label>
                                    <input
                                        required={true}
                                        type='tel' name='phone'
                                        id='phone'
                                        onChange={onChange}
                                        placeholder='0550-555-555'
                                        pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}"/>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button disabled={customer.name!.length === 0 || customer.phone!.length === 0 || customer.address!.length === 0} type="submit" form='order'
                                    className="btn btn-dark">Order
                            </button>
                            <button type="submit" className="btn btn-dark" onClick={onClose}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;