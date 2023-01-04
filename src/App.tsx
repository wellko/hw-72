import React, {useEffect} from 'react';
import DishesForm from "./Components/DishesForm/DishesForm";
import {Route, Routes} from "react-router-dom";
import AdminHome from "./Containers/AdminHome/AdminHome";
import {useAppDispatch, useAppSelector} from "./hooks";
import {getDishes} from "./app/store/AdminDishThunks";
import UserHome from "./Containers/UserHome/UserHome";
import {AdminSelectDishes} from "./app/store/AdminDishSlice";

function App() {

	const dispatch = useAppDispatch();

	const state = useAppSelector(AdminSelectDishes).status;

	useEffect(() => {
		dispatch(getDishes());
	}, [state.deleting, state.posting])

	return (
		<div className="App">
			<Routes>
				<Route path='/admin' element={<AdminHome/>}/>
				<Route path='/admin/new' element={<DishesForm/>}/>
				<Route path='/' element={<UserHome/>}/>
				<Route path='admin/:id/edit' element={<DishesForm/>}/>
			</Routes>
		</div>
	);
}

export default App;
