import React from 'react';
import {useAppSelector} from "../../app/hooks";
import {AdminSelectDishes} from "../../store/AdminDishSlice";
import UserDishComponent from "../../Components/UserDishComponent/UserDishComponent";
import TotalFooter from "../../Components/TotalFooter/TotalFooter";
import {UserSelectDishes} from "../../store/UserDishSlice";
import Modal from "../../Components/Modal/Modal";

const UserHome = () => {

    const dishes = useAppSelector(AdminSelectDishes);

    const UserState = useAppSelector(UserSelectDishes);

    return (
        <div className='mb-5'>
            {UserState.modal ? <Modal/> : ''}
            {dishes.dishes.map(item => <UserDishComponent key={Math.random()} Dish={item}/>)}
            <TotalFooter/>
        </div>
    );
};

export default UserHome;