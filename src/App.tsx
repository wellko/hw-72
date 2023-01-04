import React, {useEffect} from 'react';
import DishesForm from "./Components/DishesForm/DishesForm";
import {Route, Routes} from "react-router-dom";
import AdminHome from "./Containers/AdminHome/AdminHome";
import {useAppDispatch, useAppSelector} from "./hooks";
import {getDishes, getOrders} from "./app/store/AdminDishThunks";
import UserHome from "./Containers/UserHome/UserHome";
import {AdminSelectDishes} from "./app/store/AdminDishSlice";
import AdminOrders from "./Containers/AdminOrders/AdminOrders";

function App() {

	const dispatch = useAppDispatch();

	const state = useAppSelector(AdminSelectDishes).status;

	useEffect(() => {
		dispatch(getDishes());
		dispatch(getOrders());
	}, [state.deleting, state.posting])

	return (
		<div className="App">
			<Routes>
				<Route path='/admin' element={<AdminHome/>}/>
				<Route path='/admin/new' element={<DishesForm/>}/>
				<Route path='/' element={<UserHome/>}/>
				<Route path='admin/:id/edit' element={<DishesForm/>}/>
				<Route path='/admin/Orders' element={<AdminOrders/>}/>
			</Routes>
		</div>
	);
}

export default App;
