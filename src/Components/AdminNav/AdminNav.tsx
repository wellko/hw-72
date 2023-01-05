import React from 'react';
import {Link, useNavigate} from "react-router-dom";

const AdminNav = () => {
    const navigate = useNavigate();

    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className='container'>
                <Link to='/admin' className="navbar-brand">Delivery Admin</Link>
                <ul className="navbar-nav">
                    <li className='nav-item'>
                        <button type='button' className='btn btn-light  shadow shadow-lg me-2'
                                onClick={() => navigate('/admin')}>Dishes
                        </button>
                        <button type='button' className='btn btn-light  shadow shadow-lg'
                                onClick={() => navigate('/admin/Orders')}>Orders
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default AdminNav;