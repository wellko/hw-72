import React, {useEffect} from 'react';
import DishesForm from "./Components/DishesForm/DishesForm";
import {Route, Routes} from "react-router-dom";
import AdminHome from "./Containers/AdminHome/AdminHome";
import {useAppDispatch} from "./hooks";
import {getDishes} from "./app/store/AdminDishThunks";
import UserHome from "./Containers/UserHome/UserHome";

function App() {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getDishes());
	}, [])

	return (
		<div className="App">
			<Routes>
				<Route path='/admin' element={<AdminHome/>}/>
				<Route path='/admin/new' element={<DishesForm/>}/>
				<Route path='/' element={<UserHome/>}/>
			</Routes>
		</div>
	);
}

export default App;
