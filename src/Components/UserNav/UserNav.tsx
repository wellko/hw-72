import React from 'react';
import {Link} from "react-router-dom";

const UserNav = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className='container'>
                <Link to='/' className="navbar-brand">Delivery</Link>
            </div>
        </nav>
    );
};

export default UserNav;