import React from 'react';
import { NavLink } from 'react-router-dom';







const Header = () => (
    <header className="header">
        <NavLink to="/" activeClassName="is-active" exact={true}><h1>Darryl</h1></NavLink>
        <div className="nav-links">
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/contact" activeClassName="is-active">Contact</NavLink>
        <NavLink to="/portfolio" activeClassName="is-active" exact={true}>Portfolio</NavLink>
        </div>
       
    </header>
);

export default Header;