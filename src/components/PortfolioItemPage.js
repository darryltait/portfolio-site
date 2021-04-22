import React from 'react';
import {NavLink} from 'react-router-dom';

const PortfolioItemPage = (props) => {
    return (
    <div className="page-content">
        <h1>Here's a project</h1>
        <p>This is page for the item with id of {props.match.params.id} </p>
        <NavLink to="/portfolio" activeClassName="is-active" exact={true}>Portfolio</NavLink>

    </div>
);
    }

export default PortfolioItemPage;

