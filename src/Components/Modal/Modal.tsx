import React, {useState} from 'react';
import OneOrder from "../OneOrder/OneOrder";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {ChangeCustomerInfo, closeModal, UserSelectDishes} from "../../app/store/UserDishSlice";
import {CustomerInfo} from "../../types";
import {MakeOrder} from "../../app/store/UserDishThunks";

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
		await  dispatch(ChangeCustomerInfo(customer));
		await dispatch(MakeOrder(order));
		await dispatch(closeModal());
	}

	return (
		<>
			<div className='modal-backdrop show'></div>
			<div className="modal fade show position-absolute" tabIndex={-1} style={{display: "block"}} role='dialog'>
				<div className="modal-dialog modal-dialog-centered" role="document">
					<div className="modal-content">
						<div className="modal-header d-flex ">
							<h5 className="modal-title">Order</h5>
							<button type="button" className="btn btn-secondary ms-auto" onClick={onClose} >X</button>
						</div>
						<div className="modal-body">
							<OneOrder props={UserState.order}/>
							<form id='order' onSubmit={onSubmit}>
								<input required={true} type='text' name='name' id='name' onChange={onChange}/>
								<input required={true} type='text' name='address' id='address' onChange={onChange}/>
								<input required={true} type='text' name='phone' id='phone' onChange={onChange}/>
							</form>
						</div>
						<div className="modal-footer">
							<button form='order' type="submit"  className="btn btn-outline-dark">Order</button>
							<button onClick={()=> console.log(order)}/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Modal;