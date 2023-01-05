import React, {useEffect} from 'react';
import DishesForm from "./Components/DishesForm/DishesForm";
import {Route, Routes, useLocation} from "react-router-dom";
import AdminHome from "./Containers/AdminHome/AdminHome";
import {useAppDispatch, useAppSelector} from "./app/hooks";
import {getDishes, getOrders} from "./store/AdminDishThunks";
import UserHome from "./Containers/UserHome/UserHome";
import {AdminSelectDishes} from "./store/AdminDishSlice";
import AdminOrders from "./Containers/AdminOrders/AdminOrders";
import EditDish from "./Containers/EditDish/EditDish";
import UserNav from "./Components/UserNav/UserNav";
import AdminNav from "./Components/AdminNav/AdminNav";

function App() {

	const dispatch = useAppDispatch();

	const {pathname} = useLocation();

	const state = useAppSelector(AdminSelectDishes).status;

	useEffect(() => {
		dispatch(getDishes());
		dispatch(getOrders());
	}, [dispatch, state.deleting, state.posting])

	return (
		<div className="App">
			{pathname === '/'? <UserNav/>: <AdminNav/>}
			<Routes>
				<Route path='/admin' element={<AdminHome/>}/>
				<Route path='/admin/new' element={<DishesForm/>}/>
				<Route path='/' element={<UserHome/>}/>
				<Route path='admin/:id/edit' element={<EditDish/>}/>
				<Route path='/admin/Orders' element={<AdminOrders/>}/>
			</Routes>
		</div>
	);
}

export default App;
