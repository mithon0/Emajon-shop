import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'
import { Link, Outlet } from 'react-router-dom';
const Header = () => {
    return (
       <div>
         <nav>
            <div><img src={logo} alt="" /></div>
            <div>
                <Link to="/">shop</Link>
                <Link to="/order">Order</Link>
                <Link to="/review">Order Review</Link>
                <Link to="/inventory">Manage Inventory</Link>
                <Link to="/login">Login</Link>

            </div>
           
        </nav>
        <Outlet></Outlet>
       </div>
    );
};

export default Header;